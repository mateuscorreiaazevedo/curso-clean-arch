import { TaskRepository } from '@/core/infra/repositories'
import { httpClientResponseHandler } from '../../utils'
import { ListTaskResponseDTO } from '../../dtos/task'
import { Task } from '@/core/domain/entities'

export class ListTaskUseCase {
  private taskGateway: TaskRepository

  constructor(taskGate: TaskRepository) {
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
