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
      throw new Error("Invalid token");
    }

    const user = await this.userGateway.getMe(token)
    
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