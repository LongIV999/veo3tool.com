# Cloudflare Bindings Reference

## D1 (SQL Database)

### Setup

```
# Create database
wrangler d1 create my-db

# Output: database_id = "xxx-xxx-xxx"
```

### wrangler.jsonc

```jsonc
{
  "d1_databases": [{
    "binding": "DB",
    "database_name": "my-db",
    "database_id": "xxx-xxx-xxx"
  }]
}
```

### Migrations

```
# Create migration
wrangler d1 migrations create my-db init

# Edit migrations/0001_init.sql:
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

# Apply locally
wrangler d1 migrations apply my-db --local

# Apply to production
wrangler d1 migrations apply my-db --remote
```

### Usage

```typescript
// Prepared statements (recommended)
const { results } = await env.DB
  .prepare('SELECT * FROM users WHERE id = ?')
  .bind(userId)
  .all()

// Insert
await env.DB
  .prepare('INSERT INTO users (email, name) VALUES (?, ?)')
  .bind(email, name)
  .run()

// Batch
const batch = [
  env.DB.prepare('INSERT INTO users (email) VALUES (?)').bind('a@a.com'),
  env.DB.prepare('INSERT INTO users (email) VALUES (?)').bind('b@b.com'),
]
await env.DB.batch(batch)

// Raw (use carefully)
const result = await env.DB.exec('DROP TABLE IF EXISTS temp')
```

### Query Results

```typescript
interface D1Result<T> {
  results: T[]         // Array of rows
  success: boolean
  meta: {
    duration: number
    changes: number
    last_row_id: number
  }
}

// .all() - returns all rows
const { results } = await env.DB.prepare('SELECT * FROM users').all()

// .first() - returns first row or null
const user = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(1).first()

// .run() - for INSERT/UPDATE/DELETE
const { meta } = await env.DB.prepare('DELETE FROM users WHERE id = ?').bind(1).run()
```

## KV (Key-Value Store)

### Setup

```
# Create namespace
wrangler kv namespace create MY_KV

# Output: id = "xxx-xxx-xxx"
```

### wrangler.jsonc

```jsonc
{
  "kv_namespaces": [{
    "binding": "KV",
    "id": "xxx-xxx-xxx"
  }]
}
```

### Usage

```typescript
// Get
const value = await env.KV.get('key')              // string | null
const json = await env.KV.get('key', 'json')       // parsed JSON
const buffer = await env.KV.get('key', 'arrayBuffer')

// Put
await env.KV.put('key', 'value')
await env.KV.put('key', JSON.stringify(data))

// With options
await env.KV.put('key', 'value', {
  expirationTtl: 3600,        // Seconds
  expiration: 1234567890,     // Unix timestamp
  metadata: { version: 1 }
})

// Get with metadata
const { value, metadata } = await env.KV.getWithMetadata('key')

// Delete
await env.KV.delete('key')

// List
const { keys, list_complete, cursor } = await env.KV.list({
  prefix: 'user:',
  limit: 100
})
```

### Best Practices

- Keys: max 512 bytes
- Values: max 25 MB
- Eventually consistent (may take ~60s globally)
- Use for: caching, config, sessions
- Don't use for: frequently updated data, strong consistency

## R2 (Object Storage)

### Setup

```
# Create bucket
wrangler r2 bucket create my-bucket
```

### wrangler.jsonc

```jsonc
{
  "r2_buckets": [{
    "binding": "BUCKET",
    "bucket_name": "my-bucket"
  }]
}
```

### Usage

```typescript
// Put
await env.BUCKET.put('file.txt', 'content')
await env.BUCKET.put('data.json', JSON.stringify(data), {
  httpMetadata: { contentType: 'application/json' }
})

// Put from request body
await env.BUCKET.put('upload.png', request.body, {
  httpMetadata: { contentType: 'image/png' }
})

// Get
const object = await env.BUCKET.get('file.txt')
if (object) {
  const text = await object.text()
  // or: object.json(), object.arrayBuffer(), object.blob()
}

// Get with range
const partial = await env.BUCKET.get('large-file.bin', {
  range: { offset: 0, length: 1024 }
})

// Head (metadata only)
const head = await env.BUCKET.head('file.txt')
// head.size, head.httpMetadata, head.customMetadata

// Delete
await env.BUCKET.delete('file.txt')
await env.BUCKET.delete(['file1.txt', 'file2.txt'])

// List
const { objects, truncated, cursor } = await env.BUCKET.list({
  prefix: 'uploads/',
  limit: 100
})
```

### R2Object Properties

```typescript
interface R2Object {
  key: string
  size: number
  etag: string
  uploaded: Date
  httpMetadata?: {
    contentType?: string
    contentLanguage?: string
    contentDisposition?: string
    contentEncoding?: string
    cacheControl?: string
    cacheExpiry?: Date
  }
  customMetadata?: Record<string, string>
}
```

## Durable Objects

### Setup

```typescript
// src/counter.ts
export class Counter {
  state: DurableObjectState
  
  constructor(state: DurableObjectState) {
    this.state = state
  }
  
  async fetch(request: Request) {
    const count = (await this.state.storage.get('count') || 0) as number
    await this.state.storage.put('count', count + 1)
    return new Response(String(count + 1))
  }
}
```

### wrangler.jsonc

```jsonc
{
  "durable_objects": {
    "bindings": [{
      "name": "COUNTER",
      "class_name": "Counter"
    }]
  },
  "migrations": [{
    "tag": "v1",
    "new_classes": ["Counter"]
  }]
}
```

### Usage

```typescript
app.get('/count/:id', async (c) => {
  const id = c.env.COUNTER.idFromName(c.req.param('id'))
  const stub = c.env.COUNTER.get(id)
  return stub.fetch(c.req.raw)
})
```

## Environment Variables

### wrangler.jsonc

```jsonc
{
  "vars": {
    "API_URL": "https://api.example.com",
    "DEBUG": "false"
  }
}
```

### Secrets (via CLI)

```
# Set secret
wrangler secret put API_KEY
# Enter value when prompted

# List secrets
wrangler secret list

# Delete secret
wrangler secret delete API_KEY
```

### Local Development

```
# .dev.vars
API_KEY=dev-secret-key
DATABASE_URL=local-connection

# NOT committed to git
```

### Access

```typescript
// Hono
const apiKey = c.env.API_KEY

// Workers
export default {
  fetch(request, env) {
    const apiKey = env.API_KEY
  }
}

// Astro
const { env } = locals.runtime
const apiKey = env.API_KEY
```

## Queues

### wrangler.jsonc

```jsonc
{
  "queues": {
    "producers": [{
      "queue": "my-queue",
      "binding": "QUEUE"
    }],
    "consumers": [{
      "queue": "my-queue",
      "max_batch_size": 10,
      "max_batch_timeout": 30
    }]
  }
}
```

### Producer

```typescript
await env.QUEUE.send({ type: 'email', to: 'user@example.com' })

// Batch
await env.QUEUE.sendBatch([
  { body: { type: 'email', to: 'a@a.com' } },
  { body: { type: 'email', to: 'b@b.com' } }
])
```

### Consumer

```typescript
export default {
  async queue(batch, env) {
    for (const message of batch.messages) {
      console.log(message.body)
      message.ack()  // Acknowledge
    }
  }
}
```

## AI

### wrangler.jsonc

```jsonc
{
  "ai": {
    "binding": "AI"
  }
}
```

### Usage

```typescript
const result = await env.AI.run('@cf/meta/llama-2-7b-chat-int8', {
  messages: [{ role: 'user', content: 'Hello' }]
})
```
