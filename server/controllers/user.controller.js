import extend from 'lodash/extend.js'
import omit from 'lodash/omit.js'
import User from '../models/user.model.js'
import errorHandler from '../helpers/dbErrorHandler.js'

// POST /api/users - add a new user (sign up)
// New users always get the "user" role. The role field from the request is ignored.
const create = async (req, res) => {
  const user = new User(omit(req.body, ['role']))
  try {
    await user.save()
    return res.status(201).json({ message: 'Successfully signed up!', user })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// GET /api/users - get all users (password hash is never included)
const list = async (req, res) => {
  try {
    const users = await User.find().select('name email role created updated')
    return res.json(users)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// Runs for any route with :userId - loads the user and attaches it to req.profile
const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    req.profile = user
    next()
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// GET /api/users/:userId - get user by id
const read = (req, res) => {
  return res.json(req.profile)
}

// PUT /api/users/:userId - update user by id
const update = async (req, res) => {
  try {
    const user = extend(req.profile, omit(req.body, ['role']))
    user.updated = Date.now()
    await user.save()
    return res.json(user)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/users/:userId - remove user by id
const remove = async (req, res) => {
  try {
    const deletedUser = req.profile
    await deletedUser.deleteOne()
    return res.json({ message: 'User successfully deleted!', user: deletedUser })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/users - remove all users
const removeAll = async (req, res) => {
  try {
    const result = await User.deleteMany({})
    return res.json({ message: `${result.deletedCount} user(s) successfully deleted!` })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

export default { create, list, userByID, read, update, remove, removeAll }
