import { TaskGateway } from "@/core/gateways";
import { ListTasksResponseDto } from "./list-tasks-dtos";

export class ListTasksUseCase {
  private TaskGate: TaskGateway
  
  constructor(taskGate: TaskGateway) {
    this.TaskGate = taskGate
  }

  async execute(): Promise<ListTasksResponseDto[]> {
    const result: ListTasksResponseDto[] = []
    const tasks = await this.TaskGate.list()

    tasks.forEach(task => {
      result.push({
        description: task.description,
        done: task.done,
        id: task.id ?? ''
      })
    })

    return result
  }
}