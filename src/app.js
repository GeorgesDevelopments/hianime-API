import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { config } from 'dotenv'

import hiAnimeRoutes from './routes/routes.js'

const app = new Hono()

config()
const origins = process.env.ORIGIN ? process.env.ORIGIN.split(',') : ['*']

app.use('*', cors({
  origin: origins,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length', 'X-Requested-With'],
  maxAge: 3600,
  credentials: true
}))

app.get('/', (c) => {
  c.status(200)
  return c.text('welcome to anime API 🎉 start by hitting /api/v1 for documentation')
})

app.get('/test', (c) => {
  return c.json({
    status: true,
  })
})

app.route('/api/v1', hiAnimeRoutes)

export default app
