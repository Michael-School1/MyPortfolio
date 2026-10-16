import extend from 'lodash/extend.js'
import Qualification from '../models/qualification.model.js'
import errorHandler from '../helpers/dbErrorHandler.js'

// POST /api/qualifications - add a new qualification
const create = async (req, res) => {
  const qualification = new Qualification(req.body)
  try {
    await qualification.save()
    return res.status(201).json({ message: 'Qualification successfully created!', qualification })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// GET /api/qualifications - get all qualifications
const list = async (req, res) => {
  try {
    const qualifications = await Qualification.find()
    return res.json(qualifications)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// Runs for any route with :qualificationId - loads the qualification and attaches it to req
const qualificationByID = async (req, res, next, id) => {
  try {
    const qualification = await Qualification.findById(id)
    if (!qualification) {
      return res.status(404).json({ error: 'Qualification not found' })
    }
    req.qualification = qualification
    next()
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// GET /api/qualifications/:qualificationId - get qualification by id
const read = (req, res) => {
  return res.json(req.qualification)
}

// PUT /api/qualifications/:qualificationId - update qualification by id
const update = async (req, res) => {
  try {
    const qualification = extend(req.qualification, req.body)
    await qualification.save()
    return res.json(qualification)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/qualifications/:qualificationId - remove qualification by id
const remove = async (req, res) => {
  try {
    const deletedQualification = req.qualification
    await deletedQualification.deleteOne()
    return res.json({ message: 'Qualification successfully deleted!', qualification: deletedQualification })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/qualifications - remove all qualifications
const removeAll = async (req, res) => {
  try {
    const result = await Qualification.deleteMany({})
    return res.json({ message: `${result.deletedCount} qualification(s) successfully deleted!` })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

export default { create, list, qualificationByID, read, update, remove, removeAll }
