import { TaskGateway } from "../../../gateways";
import { ToogleTaskRequestDto } from "./toggle-task-dtos";

export class ToggleTaskUseCase {
  private TaskGate: TaskGateway
  
  constructor(taskGate: TaskGateway) {
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