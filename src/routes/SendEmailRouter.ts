import { Router } from 'express'
import SendEmailController from '../controller/SendEmailController'

const SendEmailRouter: Router = Router()

SendEmailRouter.post('/', SendEmailController.SendEmail)

export default SendEmailRouter
