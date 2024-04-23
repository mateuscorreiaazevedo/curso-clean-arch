import { Task, HttpResponse } from '../entities'

export interface TaskGateway {
  create(task: Task): Promise<HttpResponse<Task>>
  list(): Promise<HttpResponse<{ tasks: Task[] }>>
  toggle(id: string): Promise<HttpResponse<void>>
  remove(id: string): Promise<HttpResponse<void>>
}