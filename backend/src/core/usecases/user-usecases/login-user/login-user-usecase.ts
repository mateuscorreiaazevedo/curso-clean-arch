import { UserGateway } from "../../../gateways";
import { LoginUserReponseDTO, LoginUserRequestDTO } from "./login-user-dtos";

export class LoginUserUseCase {
  private userGateway: UserGateway

  constructor(userGate: UserGateway) {
    this.userGateway = userGate
  }

  async execute(loginUserDto: LoginUserRequestDTO): Promise<LoginUserReponseDTO> {
    const { email, password } = loginUserDto
    
    const credentials = await this.userGateway.login(email, password)

    if(!credentials) {
      throw new Error("Invalid credentials");
    }

    return credentials
  }
}