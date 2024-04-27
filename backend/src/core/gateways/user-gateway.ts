import { Authentication, User } from "../entities";

export interface UserGateway {
  create(user: User): Promise<User>
  findByEmail(email: string): Promise<User | null>
  login(user: User): Promise<Authentication | null>
  getMe(token: string): Promise<User>
}