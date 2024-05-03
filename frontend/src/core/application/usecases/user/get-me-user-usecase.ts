import { UserRepository } from '@/core/infra/repositories/user/user-repository'
import { GetMeUserResponseDTO } from '../../dtos/user'

export class GetMeUserUseCase {
  private userGateway: UserRepository

  constructor(userGate: UserRepository) {
    this.userGateway = userGate
  }

  async execute(): Promise<GetMeUserResponseDTO> {
    const me = await this.userGateway.getMe()

    return {
      id: me?.id ?? '',
      email: me.email ?? '',
      name: me?.name ?? '',
    }
  }
}
