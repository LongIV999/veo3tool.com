# Framework Deployment Reference

## Astro

### Static Site (No SSR)

```
# No adapter needed for static
# astro.config.mjs:
export default defineConfig({
  output: 'static'  // Default
})

# wrangler.jsonc:
{
  "name": "my-site",
  "compatibility_date": "2024-12-01",
  "assets": {
    "directory": "./dist"
  }
}

# Build & Deploy
npm run build
npx wrangler deploy
```

### SSR (Server-Side Rendering)

```
# Install adapter
npx astro add cloudflare

# astro.config.mjs:
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
    platformProxy: { enabled: true }
  })
})

# wrangler.jsonc (auto-generated):
{
  "name": "my-site",
  "main": "./dist/_worker.js",
  "compatibility_date": "2024-12-01",
  "assets": { "directory": "./dist" }
}
```

### Access Bindings (Astro)

```typescript
// src/env.d.ts
type Runtime = import('@astrojs/cloudflare').Runtime<Env>
declare namespace App {
  interface Locals extends Runtime {}
}

// src/pages/api/data.ts
export async function GET({ locals }) {
  const { env } = locals.runtime
  
  // D1
  const users = await env.DB.prepare('SELECT * FROM users').all()
  
  // KV
  const cached = await env.KV.get('key')
  
  // R2
  const file = await env.BUCKET.get('file.txt')
  
  return new Response(JSON.stringify(users))
}
```

### Scripts

```json
{
  "scripts": {
    "dev": "wrangler types && astro dev",
    "build": "astro build",
    "preview": "wrangler dev",
    "deploy": "npm run build && wrangler deploy"
  }
}
```

## Next.js (OpenNext)

### Setup

```
npm install @opennextjs/cloudflare

# package.json:
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
    "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy"
  }
}
```

### wrangler.jsonc

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "my-nextjs-app",
  "main": ".open-next/worker.js",
  "compatibility_date": "2024-12-01",
  "compatibility_flags": ["nodejs_compat"],
  "assets": {
    "directory": ".open-next/assets"
  }
}
```

### open-next.config.ts

```typescript
import { defineCloudflareConfig } from "@opennextjs/cloudflare"

export default defineCloudflareConfig({
  // Optional: R2 for ISR cache
  // incrementalCache: r2IncrementalCache
})
```

### Access Bindings (Next.js)

```typescript
import { getCloudflareContext } from '@opennextjs/cloudflare'

export async function GET() {
  const { env } = await getCloudflareContext()
  
  const result = await env.DB.prepare('SELECT * FROM users').all()
  
  return Response.json(result)
}
```

### Important Notes

- Edge runtime not supported yet
- Add `.open-next` to `.gitignore`
- Environment variables in CF dashboard
- Use `NEXT_PUBLIC_` prefix for client vars

## Hono

### Create Project

```
npm create hono@latest my-app
# Select: cloudflare-workers
```

### Basic Setup

```typescript
// src/index.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Cloudflare!'))

export default app
```

### With Bindings

```typescript
import { Hono } from 'hono'

type Bindings = {
  DB: D1Database
  KV: KVNamespace
  BUCKET: R2Bucket
  API_KEY: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/users', async (c) => {
  const { results } = await c.env.DB
    .prepare('SELECT * FROM users')
    .all()
  return c.json(results)
})

app.get('/cache/:key', async (c) => {
  const key = c.req.param('key')
  const value = await c.env.KV.get(key)
  return c.json({ key, value })
})

export default app
```

### wrangler.jsonc

```jsonc
{
  "name": "my-hono-api",
  "main": "src/index.ts",
  "compatibility_date": "2024-12-01",
  "compatibility_flags": ["nodejs_compat"],
  
  "d1_databases": [{
    "binding": "DB",
    "database_name": "my-db",
    "database_id": "xxx"
  }],
  
  "kv_namespaces": [{
    "binding": "KV",
    "id": "xxx"
  }]
}
```

### With Static Assets

```jsonc
// wrangler.jsonc
{
  "assets": {
    "directory": "./public"
  }
}
```

```
project/
├── src/index.ts
├── public/
│   ├── index.html
│   └── static/
└── wrangler.jsonc
```

### Scripts

```json
{
  "scripts": {
    "dev": "wrangler dev",
    "deploy": "wrangler deploy",
    "test": "vitest"
  }
}
```

### Testing

```typescript
// src/index.test.ts
import { describe, it, expect } from 'vitest'
import app from './index'

describe('API', () => {
  it('returns 200', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
  })
})
```

## Common Issues

### "Module not found" errors

Add to wrangler.jsonc:
```json
"compatibility_flags": ["nodejs_compat"]
```

### Types not available

```
wrangler types
```

### Local bindings not persisting

Data stored in `.wrangler/state/v3/`. Don't gitignore if you want to persist local dev data.

### Framework-specific dev

| Framework | Dev Command |
|-----------|-------------|
| Astro | `astro dev` (wraps wrangler) |
| Next.js | `next dev` (local) or `opennextjs-cloudflare preview` |
| Hono | `wrangler dev` |
