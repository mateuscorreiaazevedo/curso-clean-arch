import { create, login, getMe } from '../../controllers/user-controller'
import { Router } from 'express'

const route = Router()

route.post('/user/register', create)
route.post('/user/login', login)
route.get('/user/me', getMe)

export default route