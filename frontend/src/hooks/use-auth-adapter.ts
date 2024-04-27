import {
  CreateUserUseCase,
  GetMeUserUseCase,
  LoginUserUseCase,
} from '@/core/application/usecases/user'
import { HttpUserRepository } from '@/core/infra/repositories'
import { create } from 'zustand'

export interface AuthenticationAdapters {
  createUserUseCase: CreateUserUseCase
  loginUserUseCase: LoginUserUseCase
  getMeUserUseCase: GetMeUserUseCase
}

const userRepository = new HttpUserRepository()

const createUserUseCase = new CreateUserUseCase(userRepository)
const loginUserUseCase = new LoginUserUseCase(userRepository)
const getMeUserUseCase = new GetMeUserUseCase(userRepository)

export const useAuthAdapter = create<AuthenticationAdapters>(() => ({
  createUserUseCase,
  getMeUserUseCase,
  loginUserUseCase,
}))
