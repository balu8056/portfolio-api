import { Router } from 'express'
import ExperienceController from '../controller/ExperienceController'

const ExperienceRouter: Router = Router()

ExperienceRouter.get('/', ExperienceController.getExperience)
ExperienceRouter.get('/:id', ExperienceController.getExperiencesById)
ExperienceRouter.post('/create', ExperienceController.createExperience)
ExperienceRouter.post('/update/:id', ExperienceController.updateExperience)
ExperienceRouter.post('/delete/:id', ExperienceController.deleteExperience)

export default ExperienceRouter
