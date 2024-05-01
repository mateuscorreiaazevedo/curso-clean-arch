import { MongooseTaskRepository } from "../core/repositories";
import {
  CreateTaskUseCase,
  ListTasksUseCase,
  RemoveTaskUseCase,
  ToggleTaskUseCase,
} from "../core/usecases/task-usecases";

export const taskRepository = new MongooseTaskRepository()

const createTaskUseCase = new CreateTaskUseCase(taskRepository)
const listTasksUseCase = new ListTasksUseCase(taskRepository)
const toggleTaskUseCase = new ToggleTaskUseCase(taskRepository)
const removeTaskUseCase = new RemoveTaskUseCase(taskRepository)

export const taskAdapter = {
  createTaskUseCase,
  listTasksUseCase,
  toggleTaskUseCase,
  removeTaskUseCase
}