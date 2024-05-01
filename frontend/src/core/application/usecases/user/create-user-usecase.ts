import { CreateUserRequestDTO, CreateUserResponseDTO } from '../../dtos/user'
import { UserRepository } from '@/core/infra/repositories'
import { httpClientResponseHandler } from '../../utils'
import { BadRequestError } from '@/core/domain/errors'
import { User } from '@/core/domain/entities'

export class CreateUserUseCase {
  private userGateway: UserRepository

  constructor(userGate: UserRepository) {
    this.userGateway = userGate
  }

  async execute(createUserDto: CreateUserRequestDTO): Promise<CreateUserResponseDTO> {
    const { confirmPassword, email, name, password } = createUserDto

    const user: User = { email, name, password }

    if (confirmPassword !== password) {
      throw new BadRequestError()
    }

    const response = await this.userGateway.create(user)

    const createdUser = httpClientResponseHandler(response)

    return {
      id: createdUser?.id ?? '',
      name,
      email,
    }
  }
}
