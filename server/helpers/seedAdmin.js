import User from '../models/user.model.js'
import config from '../../config/config.js'

// Makes sure the admin account exists in the database.
// The admin credentials come from config.js (ADMIN_NAME, ADMIN_EMAIL and ADMIN_PASSWORD in .env).
// If the account already exists it is kept as is and only its role is set to "admin".
const seedAdmin = async () => {
  const { name, email, password } = config.admin
  const existing = await User.findOne({ email })

  if (existing) {
    if (existing.role !== 'admin') {
      existing.role = 'admin'
      await existing.save()
      console.log(`Admin role given to ${email}`)
    }
    return
  }

  const admin = new User({ name, email, password, role: 'admin' })
  await admin.save()
  console.log(`Admin account created: ${email}`)
}

export default seedAdmin
