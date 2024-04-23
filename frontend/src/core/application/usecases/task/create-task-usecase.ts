import { CreateTaskRequestDTO, CreateTaskResponseDTO } from '../../dtos/task'
import { TaskGateway } from '@/core/domain/gateways'
import { Task } from '@/core/domain/entities'
import { HttpStatusCode } from '@/core/data/protocols'
import { BadRequestError, ServerError, UnexpectedError } from '@/core/domain/errors'

export class CreateTaskUseCase {
  private taskGateway: TaskGateway
  constructor(taskGate: TaskGateway) {
    this.taskGateway = taskGate
  }

  async execute(createTaskDto: CreateTaskRequestDTO): Promise<CreateTaskResponseDTO> {
    const { description, done } = createTaskDto

    const task: Task = { description, done }
    const response = await this.taskGateway.create(task)

    switch (response.statusCode) {
      case HttpStatusCode.CREATED:
        return {
          id: response.body?.id ?? '',
          description,
          done,
        }
      case HttpStatusCode.BAD_REQUEST:
        throw new BadRequestError()
      case HttpStatusCode.SERVER_ERROR:
        throw new ServerError()
      default:
        throw new UnexpectedError()
    }
  }
}
