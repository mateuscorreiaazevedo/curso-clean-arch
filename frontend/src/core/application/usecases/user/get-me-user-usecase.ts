import { UserGateway } from '@/core/domain/gateways'
import { httpClientResponseHandler } from '../../utils'
import { GetMeUserResponseDTO } from '../../dtos/user'

export class GetMeUserUseCase {
  private userGateway: UserGateway

  constructor(userGate: UserGateway) {
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
