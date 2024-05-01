import { Authentication, User } from '@/core/domain/entities'
import { HttpResponse } from '../../http'

export interface UserRepository {
  create(user: User): Promise<HttpResponse<User>>
  login(user: User): Promise<HttpResponse<Authentication>>
  getMe(): Promise<HttpResponse<User>>
  signOut(): void
}
