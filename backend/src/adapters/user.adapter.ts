import {
  CreateUserUseCase,
  LoginUserUseCase,
  GetMeUserUseCase
} from "../core/usecases/user-usecases";
import { MongooseUserRepository } from "../core/repositories";

export const userRepository = new MongooseUserRepository()

const createUserUseCase = new CreateUserUseCase(userRepository)
const loginUserUseCase = new LoginUserUseCase(userRepository)
const getMeUserUseCase = new GetMeUserUseCase(userRepository)

export const userAdapter = {
  createUserUseCase,
  loginUserUseCase,
  getMeUserUseCase
}