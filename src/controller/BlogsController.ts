import { Request, Response } from 'express'
import BlogModel from 'src/models/BlogModel'

const getBlogs = (req: Request, res: Response) => {
  try {
    BlogModel
      .find()
      .then((blogs) => {
        return res.status(200).json(blogs)
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getBlogById = (req: Request, res: Response) => {
  const id = req.params.id

  try {
    BlogModel
      .findById(id)
      .then((blog) => {
        return res.status(200).json(blog)
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const createBlog = (req: Request, res: Response) => {
  const body = req.body

  try {
    const blogDocument = new BlogModel({ ...body })

    blogDocument
      .save()
      .then((blog) => {
        return res.status(201).json({ message: 'Created!', data: blog })
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  } catch (err) {
    return res.status(500).json(err)
  }
}

const updateBlog = (req: Request, res: Response) => {
  const body = req.body
  const id = req.params.id

  try {
    BlogModel
      .findById(id)
      .then((blog) => {
        if (blog) {
          blog.set(body)

          blog
            .save()
            .then((updatedBlog) => {
              return res.status(201).json({ message: 'Updated!', data: updatedBlog })
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

const deleteBlog = (req: Request, res: Response) => {
  const id = req.params.id

  try {
    BlogModel
      .findByIdAndDelete(id)
      .then((blog) => {
        return blog
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
export default { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog }
