import { User } from "../../../entities";
import { UserGateway } from "../../../gateways";
import { LoginUserReponseDTO, LoginUserRequestDTO } from "./login-user-dtos";

export class LoginUserUseCase {
  private userGateway: UserGateway

  constructor(userGate: UserGateway) {
    this.userGateway = userGate
  }

  async execute(loginUserDto: LoginUserRequestDTO): Promise<LoginUserReponseDTO> {
    const { email, password } = loginUserDto
    const user = new User(email, password)
    
    const { token } = await this.userGateway.login(user)

    if(!token) {
      throw new Error("Invalid credentials");
    }

    return {
      token
    }
  }
}