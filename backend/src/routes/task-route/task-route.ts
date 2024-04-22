import { Router } from 'express'
import { create, list, remove, toggle } from '../../controllers/task-controller'

const route = Router()

route.post('/task', create)
route.get('/task', list)
route.patch('/task', toggle)
route.delete('/task', remove)


export default route