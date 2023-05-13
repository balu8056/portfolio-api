import { Request, Response } from 'express'
import WorkModel from 'src/models/WorkModel'

const getWorks = (req: Request, res: Response) => {
  try {
    WorkModel.find()
      .then((works) => {
        return res.status(200).json(works)
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getWorkById = (req: Request, res: Response) => {
  const id = req.params.id

  try {
    WorkModel.findById(id)
      .then((work) => {
        return res.status(200).json(work)
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const createWork = (req: Request, res: Response) => {
  const body = req.body

  try {
    const workDocument = new WorkModel({ ...body })

    workDocument
      .save()
      .then((work) => {
        return res.status(201).json({ message: 'Created!', data: work })
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const updateWork = (req: Request, res: Response) => {
  const body = req.body
  const id = req.params.id

  try {
    WorkModel.findById(id)
      .then((work) => {
        if (work) {
          work.set(body)

          work
            .save()
            .then((updatedWork) => {
              return res.status(201).json({ message: 'Updated!', data: updatedWork })
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

const deleteWork = (req: Request, res: Response) => {
  const id = req.params.id

  try {
    WorkModel.findByIdAndDelete(id)
      .then((work) => {
        return work
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

export default { getWorks, getWorkById, createWork, updateWork, deleteWork }
