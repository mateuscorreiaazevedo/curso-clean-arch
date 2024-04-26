import express from 'express'
import { json } from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'

// Routes 
import { taskRoutes } from './routes/task-route'
import { userRoutes } from './routes/user-route'

// Database
import { connect } from './database'
import { env } from './config'

const PORT = env.port
const app = express()

app.use(helmet())
app.use(cors())
app.use(json())

// Use routes
app.use(taskRoutes)
app.use(userRoutes)

app.listen(PORT, async () => {
  await connect()
  console.info(`Cleanest TODO API listening on ${PORT}`)
})