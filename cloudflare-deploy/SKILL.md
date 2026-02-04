---
name: cloudflare-deploy
description: >
  Deploy web apps to Cloudflare Workers & Pages with bindings (D1, KV, R2).
  Supports Astro, Next.js, Hono, and static sites.
  Triggers: "cloudflare", "workers", "pages", "wrangler", "D1", "KV", "R2",
  "deploy to cloudflare", "edge deploy".
argument-hint: [framework or app type]
---

# Cloudflare Deploy Skill

## Integration with Global Workflows

This skill provides **deployment knowledge** for Cloudflare platform. Use with:

| Global Workflow | How This Skill Helps |
|-----------------|---------------------|
| `/brainstorm` | Suggests Cloudflare bindings for data needs |
| `/feature` | Provides edge-compatible patterns |
| `/deploy` | Provides CF-specific deploy checklist |

## Quick Decision Tree

```
What are you deploying?

├── Static site (HTML, Astro static)
│   → Workers with Assets
│   → See references/static.md
│
├── SSR Framework
│   ├── Astro SSR → @astrojs/cloudflare adapter
│   ├── Next.js → @opennextjs/cloudflare
│   ├── Remix/React Router → native CF support
│   └── See references/frameworks.md
│
├── API Only (Hono, raw Worker)
│   → Workers
│   → See references/hono.md
│
└── Full-stack (Frontend + API)
    → Workers with Assets + bindings
    → See references/fullstack.md
```

## Core Concepts

### Workers vs Pages

| Feature | Workers | Pages |
|---------|---------|-------|
| Static assets | Via Assets config | Native |
| SSR | Native | Via Functions |
| Bindings | Full support | Full support |
| Preview URLs | Yes | Yes |
| Git integration | Workers Builds | Native |
| **Recommendation** | New projects | Legacy or simple sites |

**Note**: Cloudflare is converging Workers & Pages. New projects should use Workers with Assets.

### Bindings Overview

| Binding | Use For | Access Pattern |
|---------|---------|----------------|
| **D1** | SQL database | `env.DB.prepare()` |
| **KV** | Key-value store | `env.KV.get()`, `.put()` |
| **R2** | Object storage | `env.BUCKET.get()`, `.put()` |
| **Durable Objects** | Stateful coordination | `env.DO.get(id)` |
| **Queues** | Message queues | `env.QUEUE.send()` |
| **AI** | Workers AI | `env.AI.run()` |

## wrangler.jsonc Structure

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "my-app",
  "main": "src/index.ts",           // Entry point
  "compatibility_date": "2024-12-01",
  "compatibility_flags": ["nodejs_compat"],

  // Static assets
  "assets": {
    "directory": "./dist"           // Or ./public
  },

  // Bindings
  "d1_databases": [{
    "binding": "DB",
    "database_name": "my-db",
    "database_id": "xxx-xxx"
  }],

  "kv_namespaces": [{
    "binding": "KV",
    "id": "xxx-xxx"
  }],

  "r2_buckets": [{
    "binding": "BUCKET",
    "bucket_name": "my-bucket"
  }],

  // Environment variables
  "vars": {
    "API_URL": "https://api.example.com"
  }
}
```

## Framework Quick Setup

### Astro

```
# Install
npx astro add cloudflare

# Creates wrangler.jsonc automatically
# astro.config.mjs:
import cloudflare from '@astrojs/cloudflare';
export default defineConfig({
  output: 'server',
  adapter: cloudflare()
});

# Dev & Deploy
npm run dev          # wrangler types && astro dev
npx wrangler deploy  # Build & deploy
```

### Next.js (OpenNext)

```
# Install
npm i @opennextjs/cloudflare

# package.json scripts:
"preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview"
"deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy"

# wrangler.jsonc:
{
  "main": ".open-next/worker.js",
  "compatibility_flags": ["nodejs_compat"],
  "assets": { "directory": ".open-next/assets" }
}
```

### Hono

```
# Create
npm create hono@latest my-app
# Select: cloudflare-workers

# src/index.ts:
import { Hono } from 'hono'
const app = new Hono()
app.get('/', (c) => c.text('Hello!'))
export default app

# Dev & Deploy
npm run dev          # wrangler dev
npm run deploy       # wrangler deploy
```

## Local Development

### Commands

```
wrangler dev              # Local dev with bindings
wrangler dev --remote     # Dev against remote resources
wrangler types            # Generate TypeScript types
wrangler d1 execute DB --local --command "SELECT * FROM users"
```

### Environment Variables

```
# .dev.vars (local secrets)
API_KEY=secret123
DATABASE_URL=local-db

# Access in code
const apiKey = c.env.API_KEY  // Hono
const apiKey = env.API_KEY    // Workers
```

## Deploy Checklist

When using `/deploy` for Cloudflare:

```
Pre-deploy:
□ wrangler.jsonc configured correctly
□ Compatibility date set (recent)
□ Bindings declared (D1, KV, R2)
□ Environment variables set in dashboard

Build:
□ npm run build (framework build)
□ wrangler types (generate types)

Deploy:
□ wrangler deploy (or framework-specific)
□ Verify preview URL
□ Check Workers logs in dashboard

Post-deploy:
□ Custom domain configured (if needed)
□ Environment variables for production
□ D1 migrations applied
```

## Common Patterns

### Access Bindings (Hono)

```typescript
type Bindings = {
  DB: D1Database
  KV: KVNamespace
  BUCKET: R2Bucket
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/users', async (c) => {
  const result = await c.env.DB
    .prepare('SELECT * FROM users')
    .all()
  return c.json(result)
})
```

### Access Bindings (Astro)

```typescript
// src/pages/api/users.ts
export async function GET({ locals }) {
  const { env } = locals.runtime
  const result = await env.DB
    .prepare('SELECT * FROM users')
    .all()
  return new Response(JSON.stringify(result))
}
```

### D1 Migrations

```
wrangler d1 create my-db
wrangler d1 migrations create my-db init
# Edit migrations/0001_init.sql
wrangler d1 migrations apply my-db --local
wrangler d1 migrations apply my-db --remote
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Binding not found" | Check wrangler.jsonc, restart dev |
| "Module not found" | Add `nodejs_compat` flag |
| Types not generated | Run `wrangler types` |
| Local data lost | Check `.wrangler/state/` |
| Deploy fails | Check compatibility_date |

## References

Detailed patterns in:
- `references/frameworks.md` - Astro, Next.js, Hono setup
- `references/bindings.md` - D1, KV, R2 patterns
- `references/wrangler.md` - wrangler.jsonc config
