import { CreateTaskRequestDTO, CreateTaskResponseDTO } from '../../dtos/task'
import { httpClientResponseHandler } from '../../utils'
import { TaskGateway } from '@/core/domain/gateways'
import { Task } from '@/core/domain/entities'

export class CreateTaskUseCase {
  private taskGateway: TaskGateway

  constructor(taskGate: TaskGateway) {
    this.taskGateway = taskGate
  }

  async execute(createTaskDto: CreateTaskRequestDTO): Promise<CreateTaskResponseDTO> {
    const { description, done } = createTaskDto

    const task: Task = { description, done }
    const response = await this.taskGateway.create(task)

    const createdTask = httpClientResponseHandler(response)

    return {
      id: createdTask?.id ?? '',
      description,
      done,
    }
  }
}
