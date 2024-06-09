import {
  CreateTaskUseCase,
  ListTaskUseCase,
  RemoveTaskUseCase,
  ToggleTaskUseCase,
} from '@/core/application/usecases/task'
import { HttpTaskRepository, TaskRepository } from '@/core/infra/repositories/task'

const taskRepository: TaskRepository = new HttpTaskRepository()

const createTaskUseCase = new CreateTaskUseCase(taskRepository)
const listTaskUseCase = new ListTaskUseCase(taskRepository)
const toggleTaskUseCase = new ToggleTaskUseCase(taskRepository)
const removeTaskUseCase = new RemoveTaskUseCase(taskRepository)

export interface TaskAdapter {
  createTaskUseCase: CreateTaskUseCase
  listTaskUseCase: ListTaskUseCase
  toggleTaskUseCase: ToggleTaskUseCase
  removeTaskUseCase: RemoveTaskUseCase
}

export const taskAdapter: TaskAdapter = {
  createTaskUseCase,
  listTaskUseCase,
  removeTaskUseCase,
  toggleTaskUseCase,
}