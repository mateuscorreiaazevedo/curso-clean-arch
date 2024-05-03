import { CreateUserUseCase, LoginUserUseCase } from '@/core/application/usecases/user'

export interface LoginPageUseCase {
  loginUserUseCase: LoginUserUseCase
}

export interface RegisterPageUseCase {
  createUserUseCase: CreateUserUseCase
}
