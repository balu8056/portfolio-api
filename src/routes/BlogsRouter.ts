import { Router } from 'express'
import BlogsController from 'src/controller/BlogsController'

const BlogsRouter: Router = Router()

BlogsRouter.get('/', BlogsController.getBlogs)
BlogsRouter.get('/:id', BlogsController.getBlogById)
BlogsRouter.post('/create', BlogsController.createBlog)
BlogsRouter.post('/update/:id', BlogsController.updateBlog)
BlogsRouter.post('/delete/:id', BlogsController.deleteBlog)

export default BlogsRouter
