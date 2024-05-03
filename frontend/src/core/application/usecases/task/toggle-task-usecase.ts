import { TaskRepository } from '@/core/infra/repositories/task'
import { httpClientResponseHandler } from '../../utils'
import { ToggleTaskRequestDTO } from '../../dtos/task'

export class ToggleTaskUseCase {
  private taskGateway: TaskRepository

  constructor(taskGate: TaskRepository) {
    this.taskGateway = taskGate
  }

  async execute(toggleTaskDto: ToggleTaskRequestDTO): Promise<void> {
    const { id } = toggleTaskDto

    const response = await this.taskGateway.toggle(id)

    return httpClientResponseHandler<void>(response)
  }
}
