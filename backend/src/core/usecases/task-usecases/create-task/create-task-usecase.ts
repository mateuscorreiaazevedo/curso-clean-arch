import { CreateTaskRequestDto, CreateTaskResponseDto } from "./create-task-dtos";
import { TaskRepository } from "../../../repositories";
import { Task } from "../../../entities"

export class CreateTaskUseCase {
  private TaskGate: TaskRepository
  
  constructor(taskGate: TaskRepository) {
    this.TaskGate = taskGate
  }

  async execute(createTaskDto: CreateTaskRequestDto): Promise<CreateTaskResponseDto> {
    const {description, done, userId } = createTaskDto
    const task = new Task(description, done, userId)
    
    const result = await this.TaskGate.create(task)
    const { id } = result
    
    return {
      id: id ?? '',
      description,
      userId,
      done
    }
  }
}