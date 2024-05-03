import { UserRepository } from '@/core/infra/repositories/user/user-repository'

export class SignOutUserUseCase {
  private userGateway: UserRepository

  constructor(userGate: UserRepository) {
    this.userGateway = userGate
  }

  execute(): void {
    this.userGateway.signOut()
  }
}
