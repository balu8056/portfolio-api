import { Request, Response } from 'express'
import ExperienceModel from '../models/ExperienceModel'

const getExperience = (req: Request, res: Response) => {
  try {
    ExperienceModel.find()
      .then((exp) => {
        return res.status(200).json(exp)
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getExpsByInfoId = (req: Request, res: Response) => {
  const infoId = req.params.infoId

  try {
    ExperienceModel.find({ infoId: infoId })
      .then((exps) => {
        return res.status(200).json(exps)
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getExpById = (req: Request, res: Response) => {
  const id = req.params.id

  try {
    ExperienceModel.findById(id)
      .then((exp) => {
        return res.status(200).json(exp)
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const createExperience = (req: Request, res: Response) => {
  const body = req.body

  try {
    const expDocument = new ExperienceModel({ ...body })

    expDocument
      .save()
      .then((exp) => {
        return res.status(201).json({ message: 'Created!', data: exp })
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const updateExperience = (req: Request, res: Response) => {
  const body = req.body
  const id = req.params.id

  try {
    ExperienceModel.findById(id)
      .then((exp) => {
        if (exp) {
          exp.set(body)

          exp
            .save()
            .then((updatedExp) => {
              return res.status(201).json({ message: 'Updated!', data: updatedExp })
            })
            .catch((err) => {
              return res.status(500).json(err)
            })
        } else {
          return res.status(404).json({ message: 'Not found!' })
        }
      })
      .catch((err) => {
        return res.status(500).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const deleteExperience = (req: Request, res: Response) => {
  const id = req.params.id

  try {
    ExperienceModel.findByIdAndDelete(id)
      .then((exp) => {
        return exp
          ? res.status(201).json({ message: 'Deleted!', id: id })
          : res.status(404).json({ message: 'Not found!' })
      })
      .catch((err) => {
        return res.status(500).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

export default { getExperience, getExpsByInfoId, getExpById, createExperience, updateExperience, deleteExperience }
