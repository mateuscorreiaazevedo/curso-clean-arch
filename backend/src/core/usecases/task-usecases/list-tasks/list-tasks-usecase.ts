import { ListTaskRequestDTO, ListTasksResponseDto } from "./list-tasks-dtos";
import { TaskRepository } from "../../../repositories";

export class ListTasksUseCase {
  private TaskGate: TaskRepository
  
  constructor(taskGate: TaskRepository) {
    this.TaskGate = taskGate
  }

  async execute(listTaskDto: ListTaskRequestDTO): Promise<ListTasksResponseDto[]> {
    const { userId } = listTaskDto
    const result: ListTasksResponseDto[] = []
    const tasks = await this.TaskGate.list(userId)

    tasks.forEach(task => {
      result.push({
        description: task.description,
        done: task.done,
        userId,
        id: task.id ?? ''
      })
    })

    return result
  }
}