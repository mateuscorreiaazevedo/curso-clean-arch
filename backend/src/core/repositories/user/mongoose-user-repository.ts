import { Authentication, User } from "../../entities";
import { UserModel } from "../models/user-model";
import { cryptHandler } from "../utils/crypt-handler";
import { jwtHandler } from "../utils/jwt-handler";
import { UserRepository } from "./user-repository";

export class MongooseUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    const { email, name, password } = user

    const passwordHashed = await cryptHandler.hash(password)

    const newUser = await UserModel.create({ email, name, password: passwordHashed })
    
    return new User(
      email,
      passwordHashed,
      name,
      newUser._id.toString()
    )
  }

  async findByEmail(email: string): Promise<User | null> {
    const userFinded = await UserModel.findOne({ email }).exec()

    if(!userFinded) {
      return null
    }
    
    return new User(
      userFinded?.email,
      userFinded?.password,
      userFinded?.name,
      userFinded?._id.toString() ?? ''
    )
  }

  async login(user: User, password: string): Promise<Authentication | null> {
    
    const verifyPassword = await cryptHandler.compare(password, user.password)
      
    if(!verifyPassword) {
      return null
    }

    const token = jwtHandler.encrypt({ id: user.id })

    return new Authentication(token)
  }

  async getMe(token: string): Promise<User> {
    const { id } = jwtHandler.decrypt(token)

    const user = await UserModel.findById(id)
    
    if(!user) {
      return null
    }
    
    return new User(
      user.email,
      user.password,
      user.name,
      id
    )
  }
}