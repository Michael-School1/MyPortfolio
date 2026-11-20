import express from 'express'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import contactRoutes from './routes/contact.routes.js'
import projectRoutes from './routes/project.routes.js'
import qualificationRoutes from './routes/qualification.routes.js'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

// The built React site (client/dist) is served by Express when it exists.
// "npm run build" creates it. In development Vite serves the site instead.
const serverFolder = path.dirname(fileURLToPath(import.meta.url))
const clientDist = path.join(serverFolder, '..', 'client', 'dist')
const hasClientBuild = fs.existsSync(path.join(clientDist, 'index.html'))

// ---------------------------------------------------------------
// Middleware - must be registered BEFORE the routes so every
// request body is parsed and the security headers are applied.
// ---------------------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

// ---------------------------------------------------------------
// Welcome message. When the React site is built, "/" shows the site
// and the welcome message is available at /api instead.
// ---------------------------------------------------------------
const welcome = (req, res) => {
  res.json({ message: 'Welcome to My Portfolio application.' })
}
app.get('/api', welcome)

if (hasClientBuild) {
  app.use(express.static(clientDist))
} else {
  app.get('/', welcome)
}

// ---------------------------------------------------------------
// REST API routes
// ---------------------------------------------------------------
app.use('/', contactRoutes)
app.use('/', projectRoutes)
app.use('/', qualificationRoutes)
app.use('/', userRoutes)
app.use('/', authRoutes)

// ---------------------------------------------------------------
// React pages (e.g. /projects or /signin) - send the built site so
// React Router can show the right page. API and auth routes are skipped.
// ---------------------------------------------------------------
if (hasClientBuild) {
  app.get(/^\/(?!api(\/|$)|auth(\/|$)).*/, (req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'))
  })
}

// ---------------------------------------------------------------
// Unknown routes
// ---------------------------------------------------------------
app.use((req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` })
})

// ---------------------------------------------------------------
// Error handler - catches JWT errors from express-jwt (missing or
// invalid token) and any other unexpected errors.
// ---------------------------------------------------------------
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: `${err.name}: ${err.message}` })
  }
  console.error(err)
  return res.status(500).json({ error: err.message || 'Internal server error' })
})

export default app
