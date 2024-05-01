import 'dotenv/config'

export default {
  port: process.env.PORT || 3333,
  jwsSecret: process.env.JWT_SECRET || 'secret'
}