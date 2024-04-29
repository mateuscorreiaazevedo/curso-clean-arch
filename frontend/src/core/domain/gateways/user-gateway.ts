import { Authentication, HttpResponse, User } from '../entities'

export interface UserGateway {
  create(user: User): Promise<HttpResponse<User>>
  login(user: User): Promise<HttpResponse<Authentication>>
  getMe(): Promise<HttpResponse<User>>
  signOut(): void
}
