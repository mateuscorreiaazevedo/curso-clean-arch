import { httpClientResponseHandler } from '../../utils'
import { RemoveTaskRequestDTO } from '../../dtos/task'
import { TaskGateway } from '@/core/domain/gateways'

export class RemoveTaskUseCase {
  private taskGateway: TaskGateway

  constructor(taskGate: TaskGateway) {
    this.taskGateway = taskGate
  }

  async execute(toggleTaskDto: RemoveTaskRequestDTO): Promise<void> {
    const { id } = toggleTaskDto

    const response = await this.taskGateway.remove(id)

    return httpClientResponseHandler<void>(response)
  }
}
