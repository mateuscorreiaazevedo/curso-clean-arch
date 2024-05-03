import { TaskRepository } from '@/core/infra/repositories/task'
import { httpClientResponseHandler } from '../../utils'
import { RemoveTaskRequestDTO } from '../../dtos/task'

export class RemoveTaskUseCase {
  private taskGateway: TaskRepository

  constructor(taskGate: TaskRepository) {
    this.taskGateway = taskGate
  }

  async execute(toggleTaskDto: RemoveTaskRequestDTO): Promise<void> {
    const { id } = toggleTaskDto

    const response = await this.taskGateway.remove(id)

    return httpClientResponseHandler<void>(response)
  }
}
