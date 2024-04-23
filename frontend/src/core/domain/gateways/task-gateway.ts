import { Task, HttpResponse } from '../entities'

export interface TaskGateway {
  create(task: Task): Promise<HttpResponse<Task>>
  list(): Promise<HttpResponse<{ tasks: Task[] }>>
  toggle(id: string): Promise<void>
  remove(id: string): Promise<void>
}
