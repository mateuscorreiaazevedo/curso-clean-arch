import { httpClientResponseHandler } from '../../utils'
import { ToggleTaskRequestDTO } from '../../dtos/task'
import { TaskGateway } from '@/core/domain/gateways'

export class ToggleTaskUseCase {
  private taskGateway: TaskGateway

  constructor(taskGate: TaskGateway) {
    this.taskGateway = taskGate
  }

  async execute(toggleTaskDto: ToggleTaskRequestDTO): Promise<void> {
    const { id } = toggleTaskDto

    const response = await this.taskGateway.toggle(id)

    return httpClientResponseHandler<void>(response)
  }
}
