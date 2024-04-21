import { TaskGateway } from "@/core/gateways";
import { RemoveTaskRequestDto } from "./remove-task-dtos";

export class RemoveTaskUseCase {
  private TaskGate: TaskGateway
  
  constructor(taskGate: TaskGateway) {
    this.TaskGate = taskGate
  }

  async execute(removeTaskDto: RemoveTaskRequestDto): Promise<void> {
    const { id } = removeTaskDto
    const task = await this.TaskGate.findById(id)

    await this.TaskGate.remove(task)
  }
}