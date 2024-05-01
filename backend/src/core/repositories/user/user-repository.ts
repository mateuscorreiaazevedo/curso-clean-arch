import { Authentication, User } from "../../entities";

export interface UserRepository {
  create(user: User): Promise<User>
  findByEmail(email: string): Promise<User | null>
  login(user: User, password: string): Promise<Authentication | null>
  getMe(token: string): Promise<User>
}