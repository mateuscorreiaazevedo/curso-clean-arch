import { create, login } from '../../controllers/user-controller'
import { Router } from 'express'

const route = Router()

route.post('/user/register', create)
route.post('/user/login', login)

export default route