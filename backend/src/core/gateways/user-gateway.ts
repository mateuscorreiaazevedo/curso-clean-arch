import { Authentication, User } from "../entities";

export interface UserGateway {
  create(user: User): Promise<User>
  findByEmail(email: string): Promise<User | null>
  login(email: string, password: string): Promise<Authentication | null>
}