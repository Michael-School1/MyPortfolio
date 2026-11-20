import express from 'express'
import contactCtrl from '../controllers/contact.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

// Anyone can send a contact message (POST).
// Only the admin can read, edit and delete messages.
router.route('/api/contacts')
  .get(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.list)
  .post(contactCtrl.create)
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.removeAll)

router.route('/api/contacts/:contactId')
  .get(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.remove)

router.param('contactId', contactCtrl.contactByID)

export default router
