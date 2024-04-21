import express from 'express'
import { json } from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'

// Routes 
import { taskRoutes } from './routes/task-route'
import { connect } from 'mongoose'

const PORT = 3333
const app = express()

app.use(helmet())
app.use(cors())
app.use(json())

// Use routes
app.use(taskRoutes)

app.listen(PORT, async () => {
  await connect('mongodb://localhost:27017/database')
  console.info(`Cleanest TODO API listening on ${PORT}`)
})