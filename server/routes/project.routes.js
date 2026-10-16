import express from 'express'
import projectCtrl from '../controllers/project.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

// Anyone can view projects (GET).
// Adding, editing and deleting projects requires a signed-in user.
router.route('/api/projects')
  .get(projectCtrl.list)
  .post(authCtrl.requireSignin, projectCtrl.create)
  .delete(authCtrl.requireSignin, projectCtrl.removeAll)

router.route('/api/projects/:projectId')
  .get(projectCtrl.read)
  .put(authCtrl.requireSignin, projectCtrl.update)
  .delete(authCtrl.requireSignin, projectCtrl.remove)

router.param('projectId', projectCtrl.projectByID)

export default router
