import {
  CreateUserUseCase,
  GetMeUserUseCase,
  LoginUserUseCase,
  SignOutUserUseCase,
} from '@/core/application/usecases/user'
import { HttpUserRepository } from '@/core/infra/repositories/user'
import { create } from 'zustand'

export interface AuthenticationAdapters {
  createUserUseCase: CreateUserUseCase
  loginUserUseCase: LoginUserUseCase
  getMeUserUseCase: GetMeUserUseCase
  signOutUserUseCase: SignOutUserUseCase
}

const userRepository = new HttpUserRepository()

const createUserUseCase = new CreateUserUseCase(userRepository)
const loginUserUseCase = new LoginUserUseCase(userRepository)
const getMeUserUseCase = new GetMeUserUseCase(userRepository)
const signOutUserUseCase = new SignOutUserUseCase(userRepository)

export const useAuthAdapter = create<AuthenticationAdapters>(() => ({
  createUserUseCase,
  getMeUserUseCase,
  loginUserUseCase,
  signOutUserUseCase,
}))
