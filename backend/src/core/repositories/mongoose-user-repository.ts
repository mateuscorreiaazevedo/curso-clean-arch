import { UserGateway } from "../gateways";
import { User } from "../entities";
import { UserModel } from "./models/user-model";
import { cryptHandler } from "./utils/crypt-handler";

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

  async findByEmail(email: string): Promise<User> {
    const userExistent = await UserModel.findOne({ email })

    return new User(
      userExistent.name,
      userExistent.email,
      userExistent.password,
      userExistent._id.toString()
    )
  }
}