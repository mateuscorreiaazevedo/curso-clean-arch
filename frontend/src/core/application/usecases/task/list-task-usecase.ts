import { HttpClientResponseHandler } from '../../http/http-client-response-handler'
import { ListTaskResponseDTO } from '../../dtos/task'
import { TaskGateway } from '@/core/domain/gateways'

export class ListTaskUseCase {
  private responseHandler = new HttpClientResponseHandler().execute
  private taskGateway: TaskGateway

  constructor(taskGate: TaskGateway) {
    this.taskGateway = taskGate
  }

  async execute(): Promise<ListTaskResponseDTO[]> {
    const response = await this.taskGateway.list()
    const listedTasks: ListTaskResponseDTO[] = []
    const { tasks } = this.responseHandler<{ tasks: ListTaskResponseDTO[] }>(response)

    tasks.forEach(task => {
      listedTasks.push({
        description: task.description,
        done: task.done,
        id: task.id,
      })
    })

    return listedTasks
  }
}
