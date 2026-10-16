import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Load the .env file from the project root no matter which folder the server
// is started from (e.g. "node server.js" at the root, or "nodemon ../server.js" from /client).
const configFolder = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(configFolder, '..', '.env') })

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'change_this_portfolio_secret',
  // Use MONGODB_URI from .env (Atlas or local). Falls back to a local MongoDB
  // server with a database named "Portfolio".
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Portfolio',
}

export default config
