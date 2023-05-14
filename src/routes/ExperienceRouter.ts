import { Router } from 'express'
import ExperienceController from '../controller/ExperienceController'

const ExperienceRouter: Router = Router()

ExperienceRouter.get('/', ExperienceController.getExperience)
ExperienceRouter.get('/user/:infoId', ExperienceController.getExpsByInfoId)
ExperienceRouter.get('/:id', ExperienceController.getExpById)
ExperienceRouter.post('/create', ExperienceController.createExperience)
ExperienceRouter.post('/update/:id', ExperienceController.updateExperience)
ExperienceRouter.post('/delete/:id', ExperienceController.deleteExperience)

export default ExperienceRouter
