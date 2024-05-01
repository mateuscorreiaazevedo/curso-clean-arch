import { ToogleTaskRequestDto } from "./toggle-task-dtos";
import { TaskRepository } from "../../../repositories";

export class ToggleTaskUseCase {
  private TaskGate: TaskRepository
  
  constructor(taskGate: TaskRepository) {
    this.TaskGate = taskGate
  }

  async execute(toggleTaskDto: ToogleTaskRequestDto): Promise<void> {
    const { id, userId } = toggleTaskDto
    const task = await this.TaskGate.findById(id)

    if(task.userId !== userId) {
      throw new Error("Unauthorized request");
      
    }

    await this.TaskGate.toggle(task)
  }
}