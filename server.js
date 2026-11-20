import mongoose from 'mongoose'
import config from './config/config.js'
import app from './server/express.js'
import seedAdmin from './server/helpers/seedAdmin.js'

// ---------------------------------------------------------------
// Database connection
// ---------------------------------------------------------------
mongoose.Promise = global.Promise

mongoose
  .connect(config.mongoUri)
  .then(async () => {
    console.log(`Connected to the database! (${mongoose.connection.name})`)
    try {
      await seedAdmin()
    } catch (seedError) {
      console.error(`Could not create the admin account: ${seedError.message}`)
    }
  })
  .catch((connectionError) => {
    console.error(`Unable to connect to database: ${connectionError.message}`)
  })

mongoose.connection.on('error', (databaseError) => {
  console.error(`MongoDB connection error: ${databaseError.message}`)
})

// ---------------------------------------------------------------
// Start the Express web server
// ---------------------------------------------------------------
app.listen(config.port, (startError) => {
  if (startError) {
    console.log(startError)
    return
  }
  console.info('Server started on port %s.', config.port)
})
