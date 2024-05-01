import { User } from "../../../entities";
import { UserRepository } from "../../../repositories";
import { CreateUserRequestDTO, CreateUserResponseDTO } from "./create-user-dto";

export class CreateUserUseCase {
  private UserGate: UserRepository

  constructor (userGate: UserRepository) {
    this.UserGate = userGate
  }

  async execute(createUserDto: CreateUserRequestDTO): Promise<CreateUserResponseDTO> {
    const { confirmPassword, email, name, password } = createUserDto
    const user = new User(email, password, name)

    if(password !== confirmPassword) {
      throw new Error("Password is not equals.");
    }

    const verifyUserExists = await this.UserGate.findByEmail(email)

    if(verifyUserExists) {
      throw new Error("User already registered");
    }
    
    const response = await this.UserGate.create(user)
    
    const { id, password: hashedPassword } = response
    
    return {
      id,
      email,
      name,
      password: hashedPassword
    }
  }
}