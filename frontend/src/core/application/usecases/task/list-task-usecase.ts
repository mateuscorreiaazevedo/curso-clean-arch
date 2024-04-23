import { ListTaskResponseDTO } from '../../dtos/task'
import { TaskGateway } from '@/core/domain/gateways'
import { httpClientResponseHandler } from '../../protocols/http'
import { Task } from '@/core/domain/entities'

export class ListTaskUseCase {
  private taskGateway: TaskGateway

  constructor(taskGate: TaskGateway) {
    this.taskGateway = taskGate
  }

  async execute(): Promise<ListTaskResponseDTO[]> {
    const response = await this.taskGateway.list()
    const listedTasks: ListTaskResponseDTO[] = []

    const { tasks } = httpClientResponseHandler<{ tasks: Task[] }>(response)

    tasks.forEach(task => {
      listedTasks.push({
        description: task.description,
        done: task.done,
        id: task.id ?? '',
      })
    })

    return listedTasks
  }
}
