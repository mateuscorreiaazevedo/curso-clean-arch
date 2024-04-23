import { HttpClientResponseHandler } from '../../http/http-client-response-handler'
import { RemoveTaskRequestDTO } from '../../dtos/task'
import { TaskGateway } from '@/core/domain/gateways'

export class TaskUseCaseRemove {
  private responseHandler = new HttpClientResponseHandler().execute
  private taskGateway: TaskGateway

  constructor(taskGate: TaskGateway) {
    this.taskGateway = taskGate
  }

  async execute(toggleTaskDto: RemoveTaskRequestDTO): Promise<void> {
    const { id } = toggleTaskDto

    const response = await this.taskGateway.remove(id)

    this.responseHandler(response)
  }
}
