import { UserGateway } from '@/core/domain/gateways'

export class SignOutUserUseCase {
  private userGateway: UserGateway

  constructor(userGate: UserGateway) {
    this.userGateway = userGate
  }

  execute(): void {
    this.userGateway.signOut()
  }
}
