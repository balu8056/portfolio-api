import { Request, Response } from 'express'
import sendEmail from '../helpers/sendEmail'

const SendEmail = async (req: Request, res: Response) => {
  try {
    const { senderName, senderEmail, subject, msg } = req.body

    const isEmailSent = await sendEmail(senderName, senderEmail, subject, msg)
    return res.status(200).json(isEmailSent)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export default { SendEmail }
