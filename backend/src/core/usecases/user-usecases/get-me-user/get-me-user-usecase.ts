import { Authentication } from "../../../entities";
import { UserGateway } from "../../../gateways";
import { GetMeUserRequestDTO, GetMeUserResponseDTO } from "./get-me-user-dtos";

export class GetMeUserUseCase {
  private userGateway: UserGateway

  constructor(userGate: UserGateway) {
    this.userGateway = userGate
  }

  async execute(getMeUser: GetMeUserRequestDTO): Promise<GetMeUserResponseDTO> {
    const { token } = getMeUser

    if (!token) {
      throw new Error('Unauthorized')
    }
    
    const tokenValue = token.split(' ')[1]
    
    const validateToken = new Authentication(tokenValue)
    
    if (!validateToken) {
      throw new Error("Invalid token");
    }

    const user = await this.userGateway.getMe(validateToken.token)
    
    if(!user) {
      throw new Error("Unauthorized user");
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name
    }
    
  }
}