import { Authentication, User } from '@/core/domain/entities'

export type CreateUser = User & {
  confirmPassword: string
}

export interface UserRepository {
  create(user: CreateUser): Promise<User>
  login(user: User): Promise<Authentication>
  getMe(): Promise<User>
  signOut(): void
}
