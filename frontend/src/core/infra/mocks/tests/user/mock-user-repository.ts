import { UserRepository } from '@/core/infra/repositories/user/user-repository'
import { Authentication, User } from '@/core/domain/entities'
import { HttpResponse } from '@/core/infra/http'

const userLogged: User = {
  email: 'any_email@email.com',
  name: 'any_name',
  password: 'Any_pass123',
  id: 'any_id',
}

export class MockUserRepository implements UserRepository {
  async create(user: User): Promise<HttpResponse<User>> {
    await new Promise(resolve => setTimeout(resolve, 200))

    return {
      statusCode: 200,
      body: user,
    }
  }

  async login(user: User): Promise<HttpResponse<Authentication>> {
    await new Promise(resolve => setTimeout(resolve, 200))

    if (user.email !== userLogged.email || user.password !== userLogged.password) {
      return {
        statusCode: 400,
      }
    }

    return {
      statusCode: 200,
      body: {
        token: 'any_token',
      },
    }
  }

  signOut(): void {}

  async getMe(): Promise<HttpResponse<User>> {
    await new Promise(resolve => setTimeout(resolve, 200))

    return {
      statusCode: 200,
      body: userLogged,
    }
  }
}
