import { TaskGateway } from "../../../gateways";
import { RemoveTaskRequestDto } from "./remove-task-dtos";

export class RemoveTaskUseCase {
  private TaskGate: TaskGateway
  
  constructor(taskGate: TaskGateway) {
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