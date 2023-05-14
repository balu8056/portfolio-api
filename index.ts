import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import mongoose from 'mongoose'
import InfoRouter from './src/routes/InfoRouter'
import ExperienceRouter from './src/routes/ExperienceRouter'
import BlogsRouter from './src/routes/BlogsRouter'
import WorksRouter from './src/routes/WorksRouter'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 9000

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use(cors())
app.use(helmet())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS')
    return res.status(200).json({})
  }
  next()
})

app.get('/', (req: Request, res: Response) => {
  res.json({ message: "Hi... This is bala's portfolio API" })
})

app.use('/info', InfoRouter)
app.use('/experience', ExperienceRouter)
app.use('/blogs', BlogsRouter)
app.use('/works', WorksRouter)

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.6ujrr.mongodb.net/${process.env.MONGODB_DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.log(`Error while establishing mongodb connection \n\n ${err}`)
  })
