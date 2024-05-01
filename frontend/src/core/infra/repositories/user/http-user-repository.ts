import { AxiosHttpService } from '../../http/axios-http-service'
import { User, Authentication } from '@/core/domain/entities'
import { LocalStorageCacheService } from '../../cache'
import { UserRepository } from './user-repository'
import { HttpResponse } from '../../http'

const cacheSevice = new LocalStorageCacheService()

export class HttpUserRepository extends AxiosHttpService implements UserRepository {
  async create(user: User): Promise<HttpResponse<User>> {
    const { email, name, password } = user

    const response = await this.request<User>({
      url: '/user/register',
      method: 'post',
      data: {
        email,
        name,
        password,
      },
    })

    return response
  }

  async login(user: User): Promise<HttpResponse<Authentication>> {
    const { email, password } = user

    const response = await this.request<Authentication>({
      url: '/user/login',
      method: 'post',
      data: {
        email,
        password,
      },
    })

    return response
  }

  async getMe(): Promise<HttpResponse<User>> {
    const token = cacheSevice.get('token')

    const response = await this.request<User>({
      url: '/user/me',
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response
  }

  signOut(): void {
    cacheSevice.remove('token')
  }
}
