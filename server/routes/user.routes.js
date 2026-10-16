import express from 'express'
import userCtrl from '../controllers/user.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

// Anyone can sign up (POST) and see the list of users (GET).
// Deleting every user requires a signed-in user.
router.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create)
  .delete(authCtrl.requireSignin, userCtrl.removeAll)

// Protected routes: you must be signed in, and you can only
// view / edit / delete your OWN account.
router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router
