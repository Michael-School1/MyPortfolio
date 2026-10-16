import express from 'express'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

import contactRoutes from './routes/contact.routes.js'
import projectRoutes from './routes/project.routes.js'
import qualificationRoutes from './routes/qualification.routes.js'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

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
// Root route - welcome message shown in the browser
// ---------------------------------------------------------------
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to My Portfolio application.' })
})

// ---------------------------------------------------------------
// REST API routes
// ---------------------------------------------------------------
app.use('/', contactRoutes)
app.use('/', projectRoutes)
app.use('/', qualificationRoutes)
app.use('/', userRoutes)
app.use('/', authRoutes)

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
