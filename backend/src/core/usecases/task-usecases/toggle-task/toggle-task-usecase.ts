import { TaskGateway } from "@/core/gateways";
import { ToogleTaskRequestDto } from "./toggle-task-dtos";

export class ToggleTaskUseCase {
  private TaskGate: TaskGateway
  
  constructor(taskGate: TaskGateway) {
    this.TaskGate = taskGate
  }

  async execute(toggleTaskDto: ToogleTaskRequestDto): Promise<void> {
    const { id } = toggleTaskDto
    const task = await this.TaskGate.findById(id)

    await this.TaskGate.toggle(task)
  }
}