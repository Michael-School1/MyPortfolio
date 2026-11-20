import mongoose from 'mongoose'
import config from '../config/config.js'
import seedAdmin from './helpers/seedAdmin.js'

// Run with: npm run seed:admin
try {
  await mongoose.connect(config.mongoUri)
  await seedAdmin()
  console.log(`Admin is ready: ${config.admin.email}`)
} catch (err) {
  console.error(`Could not create the admin: ${err.message}`)
  process.exitCode = 1
} finally {
  await mongoose.disconnect()
}
