import { UserRepository } from "../../../repositories";
import { LoginUserReponseDTO, LoginUserRequestDTO } from "./login-user-dtos";

export class LoginUserUseCase {
  private userGateway: UserRepository

  constructor(userGate: UserRepository) {
    this.userGateway = userGate
  }

  async execute(loginUserDto: LoginUserRequestDTO): Promise<LoginUserReponseDTO> {
    const { email, password } = loginUserDto
    
    const user = await this.userGateway.findByEmail(email)
    
    if(!user) {
      throw new Error('INVALID_USER_EMAIL');
    }
    
    const userLogged = await this.userGateway.login(user, password)

    if(!userLogged) {
      throw new Error("INVALID_USER_PASSWORD");
    }

    return {
      token: userLogged.token
    }
  }
}