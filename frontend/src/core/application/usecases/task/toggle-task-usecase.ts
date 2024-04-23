import { HttpClientResponseHandler } from '../../http/http-client-response-handler'
import { ToggleTaskRequestDTO } from '../../dtos/task'
import { TaskGateway } from '@/core/domain/gateways'

export class ToggleTaskUseCase {
  private responseHandler = new HttpClientResponseHandler().execute
  private taskGateway: TaskGateway

  constructor(taskGate: TaskGateway) {
    this.taskGateway = taskGate
  }

  async execute(toggleTaskDto: ToggleTaskRequestDTO): Promise<void> {
    const { id } = toggleTaskDto

    const response = await this.taskGateway.toggle(id)

    this.responseHandler(response)
  }
}
