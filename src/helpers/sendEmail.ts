import Nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const configs = {
  service: `${process.env.EMAIL_HOST}`,
  auth: {
    user: `${process.env.EMAIL_USERNAME}`,
    pass: `${process.env.EMAIL_PASSWORD}`,
  },
}

let mailTransporter = Nodemailer.createTransport(configs)

const sendEmail = async (senderName: string, senderEmail: string, subject: string, msg: string) => {
  const res = await mailTransporter.sendMail({
    from: `${process.env.EMAIL_USERNAME}`,
    to: `${process.env.EMAIL_USERNAME}`,
    subject: `${senderName} - ${subject}`,
    html: `<div><h1>From ${senderEmail}</h1> <br> <p> ${msg}</p></div>`,
  })

  return res
}

export default sendEmail
