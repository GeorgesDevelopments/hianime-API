import app from "./src/app.js";
import { serve } from '@hono/node-server'

// For Vercel deployment
export default {
  fetch: app.fetch
}

// For local development
if (process.env.NODE_ENV !== 'production') {
  serve({
    fetch: app.fetch,
    port: 3030
  })
}
