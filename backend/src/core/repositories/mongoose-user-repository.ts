import { UserGateway } from "../gateways";
import { Authentication, User } from "../entities";
import { UserModel } from "./models/user-model";
import { cryptHandler } from "./utils/crypt-handler";
import { jwtHandler } from "./utils/jwt-handler";

export class MongooseUserRepository implements UserGateway {
  async create(user: User): Promise<User> {
    const { email, name, password } = user

    const passwordHashed = await cryptHandler.hash(password)

    const newUser = await UserModel.create({ email, name, password: passwordHashed })
    
    return new User(
      name,
      email,
      passwordHashed,
      newUser._id.toString()
    )
  }

  async findByEmail(email: string): Promise<User | null> {
    const userFinded = await UserModel.findOne({ email }).exec()

    if(!userFinded) {
      return null
    }
    
    return new User(
      userFinded?.name,
      userFinded?.email,
      userFinded?.password,
      userFinded?._id.toString()
    )
  }

  async login(email: string, password: string): Promise<Authentication | null> {
    const userFinded = await this.findByEmail(email)
      
    if(!userFinded) {
      return null
    }
    
    const verifyPassword = await cryptHandler.compare(password, userFinded.password)
      
    if(!verifyPassword) {
      return null
    }

    const token = jwtHandler.encrypt({ id: userFinded.id })

    return new Authentication(token)
  }

  async getMe(token: string): Promise<User> {
    const tokenFormatted = token.split(' ')[1]
    
    const { id } = jwtHandler.decrypt(tokenFormatted)

    const user = await UserModel.findById(id)
    
    return new User(
      user.name,
      user.email,
      user.password,
      id
    )
  }
}