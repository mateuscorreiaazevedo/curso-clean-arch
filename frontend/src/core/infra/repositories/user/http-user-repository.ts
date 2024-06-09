import { AxiosHttpService } from '../../http/axios-http-service'
import { User, Authentication } from '@/core/domain/entities'
import { LocalStorageCacheService } from '../../cache'
import { CreateUser, UserRepository } from './user-repository'
import { httpClientResponseHandler } from '@/core/application/utils'

const cacheSevice = new LocalStorageCacheService()

export class HttpUserRepository extends AxiosHttpService implements UserRepository {
  async create(user: CreateUser): Promise<User> {
    const { email, name, password, confirmPassword } = user

    const response = await this.request<User>({
      url: '/user/register',
      method: 'post',
      data: {
        email,
        name,
        password,
        confirmPassword,
      },
    })

    const createdUser = httpClientResponseHandler(response)

    return createdUser
  }

  async login(user: User): Promise<Authentication> {
    const { email, password } = user

    const response = await this.request<Authentication>({
      url: '/user/login',
      method: 'post',
      data: {
        email,
        password,
      },
    })

    const authentication = httpClientResponseHandler(response)

    return authentication
  }

  async getMe(): Promise<User> {
    const token = cacheSevice.get('token')

    const response = await this.request<User>({
      url: '/user/me',
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const loggedCurrentUser = httpClientResponseHandler(response)

    return loggedCurrentUser
  }

  signOut(): void {
    cacheSevice.remove('token')
  }
}
