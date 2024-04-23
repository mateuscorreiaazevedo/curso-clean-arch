import { BadRequestError, ServerError, UnexpectedError } from '@/core/domain/errors'
import { ToggleTaskRequestDTO } from '../../dtos/task'
import { TaskGateway } from '@/core/domain/gateways'
import { HttpStatusCode } from '@/core/data/protocols'

export class ToggleTaskUseCase {
  private taskGateway: TaskGateway

  constructor(taskGate: TaskGateway) {
    this.taskGateway = taskGate
  }

  async execute(toggleTaskDto: ToggleTaskRequestDTO): Promise<void> {
    const { id } = toggleTaskDto

    const response = await this.taskGateway.remove(id)

    switch (response.statusCode) {
      case HttpStatusCode.CREATED:
        return
      case HttpStatusCode.BAD_REQUEST:
        throw new BadRequestError()
      case HttpStatusCode.SERVER_ERROR:
        throw new ServerError()
      default:
        throw new UnexpectedError()
    }
  }
}
