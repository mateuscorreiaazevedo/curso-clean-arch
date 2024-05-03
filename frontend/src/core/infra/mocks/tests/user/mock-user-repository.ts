import { UserRepository } from '@/core/infra/repositories/user/user-repository'
import { Authentication, User } from '@/core/domain/entities'
import { BadRequestError } from '@/core/domain/errors'

const userLogged: User = {
  email: 'any_email@email.com',
  name: 'any_name',
  password: 'Any_pass123',
  id: 'any_id',
}

export class MockUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 200))

    return user
  }

  async login(user: User): Promise<Authentication> {
    await new Promise(resolve => setTimeout(resolve, 200))

    if (user.email !== userLogged.email || user.password !== userLogged.password) {
      throw new BadRequestError()
    }

    return {
      token: 'any_token',
    }
  }

  signOut(): void {}

  async getMe(): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 200))

    return userLogged
  }
}
