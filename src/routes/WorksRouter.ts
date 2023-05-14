import { Router } from 'express'
import WorksController from '../controller/WorksController'

const WorksRouter: Router = Router()

WorksRouter.get('/', WorksController.getWorks)
WorksRouter.get('/user/:infoId', WorksController.getWorksByInfoId)
WorksRouter.get('/:id', WorksController.getWorkById)
WorksRouter.post('/create', WorksController.createWork)
WorksRouter.post('/update/:id', WorksController.updateWork)
WorksRouter.post('/delete/:id', WorksController.deleteWork)

export default WorksRouter
