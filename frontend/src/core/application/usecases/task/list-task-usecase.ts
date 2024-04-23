import { ListTaskResponseDTO } from '../../dtos/task'
import { TaskGateway } from '@/core/domain/gateways'
import { HttpStatusCode } from '@/core/data/protocols'
import { BadRequestError, ServerError, UnexpectedError } from '@/core/domain/errors'

export class ListTaskUseCase {
  private taskGateway: TaskGateway

  constructor(taskGate: TaskGateway) {
    this.taskGateway = taskGate
  }

  async execute(): Promise<ListTaskResponseDTO[]> {
    const response = await this.taskGateway.list()
    const listedTasks: ListTaskResponseDTO[] = []

    switch (response.statusCode) {
      case HttpStatusCode.OK:
        response.body?.tasks.forEach(task => {
          listedTasks.push({
            description: task.description,
            done: task.done,
            id: task.id ?? '',
          })
        })
        break
      case HttpStatusCode.BAD_REQUEST:
        throw new BadRequestError()
      case HttpStatusCode.SERVER_ERROR:
        throw new ServerError()
      default:
        throw new UnexpectedError()
    }

    return listedTasks
  }
}
