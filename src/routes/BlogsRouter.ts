import { Router } from 'express'
import BlogsController from '../controller/BlogsController'

const BlogsRouter: Router = Router()

BlogsRouter.get('/', BlogsController.getAllBlogs)
BlogsRouter.get('/user/:infoId', BlogsController.getBlogsByInfoId)
BlogsRouter.get('/:id', BlogsController.getBlogById)
BlogsRouter.post('/create', BlogsController.createBlog)
BlogsRouter.post('/update/:id', BlogsController.updateBlog)
BlogsRouter.post('/delete/:id', BlogsController.deleteBlog)

export default BlogsRouter
