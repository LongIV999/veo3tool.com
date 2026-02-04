# Wrangler Configuration Reference

## File Formats

Wrangler supports three config formats:
- `wrangler.jsonc` (recommended - JSON with comments)
- `wrangler.json`
- `wrangler.toml`

## Complete wrangler.jsonc Template

```jsonc
{
  // Schema for IDE autocompletion
  "$schema": "node_modules/wrangler/config-schema.json",

  // === REQUIRED ===
  "name": "my-worker",                    // Worker name (used in URL)
  "main": "src/index.ts",                 // Entry point
  "compatibility_date": "2024-12-01",     // Runtime version

  // === OPTIONAL: Runtime ===
  "compatibility_flags": [
    "nodejs_compat"                        // Enable Node.js APIs
  ],

  // === OPTIONAL: Static Assets ===
  "assets": {
    "directory": "./dist",                 // Static files directory
    "binding": "ASSETS"                    // Optional binding name
  },

  // === OPTIONAL: D1 Databases ===
  "d1_databases": [{
    "binding": "DB",                       // Access via env.DB
    "database_name": "my-database",
    "database_id": "xxx-xxx-xxx",
    "migrations_dir": "migrations"         // Optional
  }],

  // === OPTIONAL: KV Namespaces ===
  "kv_namespaces": [{
    "binding": "KV",                       // Access via env.KV
    "id": "xxx-xxx-xxx"
  }],

  // === OPTIONAL: R2 Buckets ===
  "r2_buckets": [{
    "binding": "BUCKET",                   // Access via env.BUCKET
    "bucket_name": "my-bucket"
  }],

  // === OPTIONAL: Durable Objects ===
  "durable_objects": {
    "bindings": [{
      "name": "COUNTER",
      "class_name": "Counter"
    }]
  },
  "migrations": [{
    "tag": "v1",
    "new_classes": ["Counter"]
  }],

  // === OPTIONAL: Queues ===
  "queues": {
    "producers": [{
      "queue": "my-queue",
      "binding": "QUEUE"
    }],
    "consumers": [{
      "queue": "my-queue",
      "max_batch_size": 10
    }]
  },

  // === OPTIONAL: AI ===
  "ai": {
    "binding": "AI"
  },

  // === OPTIONAL: Vectorize ===
  "vectorize": [{
    "binding": "VECTORIZE",
    "index_name": "my-index"
  }],

  // === OPTIONAL: Service Bindings ===
  "services": [{
    "binding": "OTHER_WORKER",
    "service": "other-worker-name"
  }],

  // === OPTIONAL: Environment Variables ===
  "vars": {
    "API_URL": "https://api.example.com",
    "DEBUG": "false"
  },

  // === OPTIONAL: Environments ===
  "env": {
    "staging": {
      "vars": {
        "API_URL": "https://staging-api.example.com"
      },
      "d1_databases": [{
        "binding": "DB",
        "database_name": "my-database-staging",
        "database_id": "yyy-yyy-yyy"
      }]
    },
    "production": {
      "vars": {
        "API_URL": "https://api.example.com"
      }
    }
  },

  // === OPTIONAL: Routes & Domains ===
  "routes": [
    { "pattern": "example.com/*", "zone_name": "example.com" }
  ],

  // === OPTIONAL: Cron Triggers ===
  "triggers": {
    "crons": ["0 * * * *"]                 // Every hour
  },

  // === OPTIONAL: Build ===
  "build": {
    "command": "npm run build"
  },

  // === OPTIONAL: Limits ===
  "limits": {
    "cpu_ms": 50
  }
}
```

## Minimal Configs by Use Case

### API Only (Hono)

```jsonc
{
  "name": "my-api",
  "main": "src/index.ts",
  "compatibility_date": "2024-12-01"
}
```

### Static Site

```jsonc
{
  "name": "my-site",
  "compatibility_date": "2024-12-01",
  "assets": {
    "directory": "./dist"
  }
}
```

### Full-Stack (API + Static)

```jsonc
{
  "name": "my-app",
  "main": "src/index.ts",
  "compatibility_date": "2024-12-01",
  "assets": {
    "directory": "./public"
  }
}
```

### With Database

```jsonc
{
  "name": "my-app",
  "main": "src/index.ts",
  "compatibility_date": "2024-12-01",
  "compatibility_flags": ["nodejs_compat"],
  "d1_databases": [{
    "binding": "DB",
    "database_name": "my-db",
    "database_id": "xxx"
  }]
}
```

## TOML Equivalent

```toml
name = "my-worker"
main = "src/index.ts"
compatibility_date = "2024-12-01"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = "./dist"

[[d1_databases]]
binding = "DB"
database_name = "my-db"
database_id = "xxx"

[[kv_namespaces]]
binding = "KV"
id = "xxx"

[[r2_buckets]]
binding = "BUCKET"
bucket_name = "my-bucket"

[vars]
API_URL = "https://api.example.com"

[env.staging.vars]
API_URL = "https://staging.example.com"
```

## Wrangler Commands

### Development

```bash
wrangler dev                      # Local dev
wrangler dev --remote             # Against remote resources
wrangler dev --port 3000          # Custom port
```

### Types

```bash
wrangler types                    # Generate worker-configuration.d.ts
```

### Deploy

```bash
wrangler deploy                   # Deploy to production
wrangler deploy --env staging     # Deploy to staging
wrangler deploy --dry-run         # Preview changes
```

### D1

```bash
wrangler d1 create my-db
wrangler d1 list
wrangler d1 info my-db
wrangler d1 migrations create my-db migration-name
wrangler d1 migrations apply my-db --local
wrangler d1 migrations apply my-db --remote
wrangler d1 execute my-db --command "SELECT * FROM users" --local
wrangler d1 execute my-db --command "SELECT * FROM users" --remote
```

### KV

```bash
wrangler kv namespace create MY_KV
wrangler kv namespace list
wrangler kv key put --binding MY_KV "key" "value"
wrangler kv key get --binding MY_KV "key"
wrangler kv key list --binding MY_KV
```

### R2

```bash
wrangler r2 bucket create my-bucket
wrangler r2 bucket list
wrangler r2 object put my-bucket/file.txt --file ./local-file.txt
wrangler r2 object get my-bucket/file.txt
```

### Secrets

```bash
wrangler secret put API_KEY       # Prompted for value
wrangler secret list
wrangler secret delete API_KEY
```

### Tail (Logs)

```bash
wrangler tail                     # Stream logs
wrangler tail --format pretty     # Formatted output
```

## Compatibility Flags

| Flag | Purpose |
|------|---------|
| `nodejs_compat` | Enable Node.js built-in modules |
| `nodejs_compat_populate_process_env` | Enable process.env |
| `global_fetch_strictly_public` | Allow fetch to public URLs |

## Troubleshooting

### "Binding not found"

1. Check binding name matches exactly (case-sensitive)
2. Ensure wrangler.jsonc is valid JSON
3. Restart `wrangler dev`

### "Module not found" for Node.js APIs

Add to wrangler.jsonc:
```json
"compatibility_flags": ["nodejs_compat"]
```

### Types not working

```bash
wrangler types
```

Then ensure `worker-configuration.d.ts` is included in tsconfig.json.

### Local data not persisting

Check `.wrangler/state/v3/` directory exists and isn't gitignored (if you want persistence).
