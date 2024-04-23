import { BadRequestError, ServerError, UnexpectedError } from '@/core/domain/errors'
import { HttpStatusCode } from '@/core/data/protocols'
import { RemoveTaskRequestDTO } from '../../dtos/task'
import { TaskGateway } from '@/core/domain/gateways'

export class TaskUseCaseRemove {
  private taskGateway: TaskGateway

  constructor(taskGate: TaskGateway) {
    this.taskGateway = taskGate
  }

  async execute(toggleTaskDto: RemoveTaskRequestDTO): Promise<void> {
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
