import {
  CreateTaskUseCase,
  ListTaskUseCase,
  RemoveTaskUseCase,
  ToggleTaskUseCase,
} from '@/core/application/usecases/task'
import { TaskGateway } from '@/core/domain/gateways'
import { HttpTaskRepository } from '@/core/infra/repositories'
import { createContext } from 'react'

const taskRepository: TaskGateway = new HttpTaskRepository()

const createTaskUseCase = new CreateTaskUseCase(taskRepository)
const listTaskUseCase = new ListTaskUseCase(taskRepository)
const toggleTaskUseCase = new ToggleTaskUseCase(taskRepository)
const removeTaskUseCase = new RemoveTaskUseCase(taskRepository)

export interface UseCaseContextInterface {
  createTaskUseCase: CreateTaskUseCase
  listTaskUseCase: ListTaskUseCase
  toggleTaskUseCase: ToggleTaskUseCase
  removeTaskUseCase: RemoveTaskUseCase
}

export const useCaseDefaultValue: UseCaseContextInterface = {
  createTaskUseCase,
  listTaskUseCase,
  removeTaskUseCase,
  toggleTaskUseCase,
}

export const UseCaseContext =
  createContext<UseCaseContextInterface>(useCaseDefaultValue)
