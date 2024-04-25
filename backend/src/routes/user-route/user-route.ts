import { create } from '../../controllers/user-controller'
import { Router } from 'express'

const route = Router()

route.post('/user', create)

export default route