import { RemoveTaskRequestDto } from "./remove-task-dtos";
import { TaskRepository } from "../../../repositories";

export class RemoveTaskUseCase {
  private TaskGate: TaskRepository
  
  constructor(taskGate: TaskRepository) {
    this.TaskGate = taskGate
  }

  async execute(removeTaskDto: RemoveTaskRequestDto): Promise<void> {
    const { id, userId } = removeTaskDto
    const task = await this.TaskGate.findById(id)

    if(task.userId !== userId) {
      throw new Error("Unauthorized request");
    }

    await this.TaskGate.remove(task)
  }
}