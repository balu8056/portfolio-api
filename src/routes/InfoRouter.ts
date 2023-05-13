import { Router } from 'express'
import InfoController from '../controller/InfoController'

const InfoRouter: Router = Router()

InfoRouter.get('/', InfoController.getInfo)
InfoRouter.get('/:id', InfoController.getInfoById)
InfoRouter.post('/create', InfoController.checkEmailAlreadyExists, InfoController.createInfo)
InfoRouter.post('/update/:id', InfoController.updateInfo)
InfoRouter.post('/delete/:id', InfoController.deleteInfo)

export default InfoRouter
