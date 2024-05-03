import { UserRepository } from '@/core/infra/repositories/user/user-repository'
import { LoginUserRequestDTO, LoginUserResponseDTO } from '../../dtos/user'
import { User } from '@/core/domain/entities'

export class LoginUserUseCase {
  private userGateway: UserRepository

  constructor(userGate: UserRepository) {
    this.userGateway = userGate
  }

  async execute(loginUserDto: LoginUserRequestDTO): Promise<LoginUserResponseDTO> {
    const { email, password } = loginUserDto
    const user: User = { email, password }

    const response = await this.userGateway.login(user)

    return {
      token: response.token,
    }
  }
}
