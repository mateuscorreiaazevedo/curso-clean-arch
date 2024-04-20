import express from 'express'
import { json } from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'

// Routes 
import taskRoutes from '@/routes/task-route'

const PORT = 3333
const app = express()

app.use(helmet())
app.use(cors())
app.use(json())

// Use routes
app.use(taskRoutes)

app.listen(PORT, async () => {
  console.info(`Cleanest TODO API listening on ${PORT}`)
})