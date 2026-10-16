import extend from 'lodash/extend.js'
import Project from '../models/project.model.js'
import errorHandler from '../helpers/dbErrorHandler.js'

// POST /api/projects - add a new project
const create = async (req, res) => {
  const project = new Project(req.body)
  try {
    await project.save()
    return res.status(201).json({ message: 'Project successfully created!', project })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// GET /api/projects - get all projects
const list = async (req, res) => {
  try {
    const projects = await Project.find()
    return res.json(projects)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// Runs for any route with :projectId - loads the project and attaches it to req
const projectByID = async (req, res, next, id) => {
  try {
    const project = await Project.findById(id)
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    req.project = project
    next()
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// GET /api/projects/:projectId - get project by id
const read = (req, res) => {
  return res.json(req.project)
}

// PUT /api/projects/:projectId - update project by id
const update = async (req, res) => {
  try {
    const project = extend(req.project, req.body)
    await project.save()
    return res.json(project)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/projects/:projectId - remove project by id
const remove = async (req, res) => {
  try {
    const deletedProject = req.project
    await deletedProject.deleteOne()
    return res.json({ message: 'Project successfully deleted!', project: deletedProject })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/projects - remove all projects
const removeAll = async (req, res) => {
  try {
    const result = await Project.deleteMany({})
    return res.json({ message: `${result.deletedCount} project(s) successfully deleted!` })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

export default { create, list, projectByID, read, update, remove, removeAll }
