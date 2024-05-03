import { CreateTaskRequestDTO, CreateTaskResponseDTO } from '../../dtos/task'
import { TaskRepository } from '@/core/infra/repositories/task'
import { httpClientResponseHandler } from '../../utils'
import { Task } from '@/core/domain/entities'

export class CreateTaskUseCase {
  private taskGateway: TaskRepository

  constructor(taskGate: TaskRepository) {
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
