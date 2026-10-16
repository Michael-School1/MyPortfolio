import mongoose from 'mongoose'
import crypto from 'crypto'

// User - registered users (collection: "users")
// The "password" field is a virtual: the plain password is never saved.
// Instead it is combined with a random salt and stored as hashed_password.
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required',
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required',
  },
  hashed_password: {
    type: String,
    required: 'Password is required',
  },
  salt: String,
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
})

// Setting user.password hashes it automatically
UserSchema.virtual('password')
  .set(function (password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function () {
    return this._password
  })

// Validate the plain password before it is hashed
UserSchema.path('hashed_password').validate(function () {
  if (this._password && this._password.length < 6) {
    this.invalidate('password', 'Password must be at least 6 characters.')
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required')
  }
}, null)

UserSchema.methods = {
  // Compare a plain-text password with the stored hash
  authenticate(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },
  encryptPassword(password) {
    if (!password) return ''
    try {
      return crypto.createHmac('sha256', this.salt).update(password).digest('hex')
    } catch {
      return ''
    }
  },
  makeSalt() {
    return crypto.randomBytes(16).toString('hex')
  },
}

// Never send the password hash or salt back in API responses
UserSchema.set('toJSON', {
  transform: (doc, returnedUser) => {
    delete returnedUser.hashed_password
    delete returnedUser.salt
    return returnedUser
  },
})

export default mongoose.model('User', UserSchema)
