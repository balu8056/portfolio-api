import { NextFunction, Request, Response } from 'express'
import InfoModel from 'src/models/InfoModel'

const getInfo = (req: Request, res: Response) => {
  try {
    InfoModel.find()
      .then((infos) => {
        return res.status(200).json(infos)
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getInfoById = (req: Request, res: Response) => {
  const id = req.params.id

  try {
    InfoModel.findById(id)
      .then((info) => {
        return res.status(200).json(info)
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const checkEmailAlreadyExists = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body

  try {
    InfoModel.find({ email: body.email })
      .then((info) => {
        if (info && info.length > 0) {
          return res.status(200).json({ message: 'Email Already Exists!', data: info })
        } else {
          next()
        }
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const createInfo = (req: Request, res: Response) => {
  const body = req.body

  try {
    const infoDocument = new InfoModel({ ...body })

    infoDocument
      .save()
      .then((info) => {
        return res.status(201).json({ message: 'Created!', data: info })
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const updateInfo = (req: Request, res: Response) => {
  const body = req.body
  const id = req.params.id

  try {
    InfoModel.findById(id)
      .then((info) => {
        if (info) {
          info.set(body)

          info
            .save()
            .then((updatedInfo) => {
              return res.status(201).json({ message: 'Updated!', data: updatedInfo })
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

const deleteInfo = (req: Request, res: Response) => {
  const id = req.params.id

  try {
    InfoModel.findByIdAndDelete(id)
      .then((info) => {
        return info
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

export default { getInfo, getInfoById, checkEmailAlreadyExists, createInfo, updateInfo, deleteInfo }
