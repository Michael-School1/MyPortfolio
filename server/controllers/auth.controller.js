import jwt from 'jsonwebtoken'
import { expressjwt } from 'express-jwt'
import User from '../models/user.model.js'
import config from '../../config/config.js'

// POST /auth/signin - check email + password, then return a JWT token
const signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(401).json({ error: 'User not found' })
    }
    if (!user.authenticate(req.body.password)) {
      return res.status(401).json({ error: "Email and password don't match." })
    }

    // The token stores the user's id and is signed with our secret
    const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: '1d' })

    // Also save the token in a cookie called "t"
    res.cookie('t', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })

    return res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email },
    })
  } catch {
    return res.status(401).json({ error: 'Could not sign in' })
  }
}

// GET /auth/signout - clear the token cookie
const signout = (req, res) => {
  res.clearCookie('t')
  return res.status(200).json({ message: 'Signed out' })
}

// Middleware: only lets the request continue if a valid JWT is sent.
// The token can be sent as "Authorization: Bearer <token>" or in the "t" cookie.
// The decoded token ({ _id }) is placed on req.auth.
const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ['HS256'],
  requestProperty: 'auth',
  getToken: (req) => {
    const authHeader = req.headers.authorization
    if (authHeader && authHeader.split(' ')[0] === 'Bearer') {
      return authHeader.split(' ')[1]
    }
    if (req.cookies && req.cookies.t) {
      return req.cookies.t
    }
    return undefined
  },
})

// Middleware: the signed-in user may only change their own account
const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && String(req.profile._id) === String(req.auth._id)
  if (!authorized) {
    return res.status(403).json({ error: 'User is not authorized' })
  }
  next()
}

export default { signin, signout, requireSignin, hasAuthorization }
