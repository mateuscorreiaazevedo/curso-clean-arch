import { TaskGateway } from "../../../gateways";
import { CreateTaskRequestDto, CreateTaskResponseDto } from "./create-task-dtos";
import { Task } from "../../../entities"

export class CreateTaskUseCase {
  private TaskGate: TaskGateway
  
  constructor(taskGate: TaskGateway) {
    this.TaskGate = taskGate
  }

  async execute(createTaskDto: CreateTaskRequestDto): Promise<CreateTaskResponseDto> {
    const {description, done } = createTaskDto
    const task = new Task(description, done)
    
    const result = await this.TaskGate.create(task)
    const { id } = result
    
    return {
      id: id ?? '',
      description,
      done
    }
  }
}