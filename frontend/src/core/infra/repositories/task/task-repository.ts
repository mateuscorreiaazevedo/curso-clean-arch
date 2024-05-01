import { Task } from '@/core/domain/entities'
import { HttpResponse } from '../../http'

export interface TaskRepository {
  create(task: Task): Promise<HttpResponse<Task>>
  list(): Promise<HttpResponse<{ tasks: Task[] }>>
  toggle(id: string): Promise<HttpResponse<void>>
  remove(id: string): Promise<HttpResponse<void>>
}
