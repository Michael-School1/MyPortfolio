import express from 'express'
import userCtrl from '../controllers/user.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

// Anyone can sign up (POST).
// Only the admin can see the list of users or delete every user.
router.route('/api/users')
  .get(authCtrl.requireSignin, authCtrl.isAdmin, userCtrl.list)
  .post(userCtrl.create)
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, userCtrl.removeAll)

// Protected routes: you must be signed in, and you can only
// edit / delete your OWN account.
router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router
