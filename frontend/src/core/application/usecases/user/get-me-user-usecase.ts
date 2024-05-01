import { UserRepository } from '@/core/infra/repositories'
import { httpClientResponseHandler } from '../../utils'
import { GetMeUserResponseDTO } from '../../dtos/user'

export class GetMeUserUseCase {
  private userGateway: UserRepository

  constructor(userGate: UserRepository) {
    this.userGateway = userGate
  }

  async execute(): Promise<GetMeUserResponseDTO> {
    const me = await this.userGateway.getMe()

    const response = httpClientResponseHandler(me)

    return {
      id: response?.id ?? '',
      email: response.email ?? '',
      name: response?.name ?? '',
    }
  }
}
