import { Task } from "../entities";

export interface TaskGateway {
  create(task: Task): Promise<Task>
  list(userId: string): Promise<Task[]>
  findById(id: string): Promise<Task>
  toggle(task: Task): Promise<Task>
  remove(task: Task): Promise<void>
}