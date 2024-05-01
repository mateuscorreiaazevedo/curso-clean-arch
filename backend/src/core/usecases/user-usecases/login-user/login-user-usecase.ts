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
      throw new Error('Invalid email')
    }
    
    const userLogged = await this.userGateway.login(user, password)

    if(!userLogged) {
      throw new Error("Invalid password");
    }

    return {
      token: userLogged.token
    }
  }
}