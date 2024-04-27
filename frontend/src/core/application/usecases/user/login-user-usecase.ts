import { LoginUserRequestDTO } from '../../dtos/user'
import { UserGateway } from '@/core/domain/gateways'
import { User } from '@/core/domain/entities'
import { httpClientResponseHandler } from '../../utils'

export class LoginUserUseCase {
  private userGateway: UserGateway

  constructor(userGate: UserGateway) {
    this.userGateway = userGate
  }

  async execute(loginUserDto: LoginUserRequestDTO): Promise<void> {
    const { email, password } = loginUserDto
    const user: User = { email, password }

    const response = await this.userGateway.login(user)

    httpClientResponseHandler(response)
  }
}
