import { AxiosHttpService } from '../../http/axios-http-service'
import { LocalStorageCacheService } from '../../cache'
import { TaskRepository } from './task-repository'
import { Task } from '../../../domain/entities'
import { HttpResponse } from '../../http'

const cacheStorage = new LocalStorageCacheService()

export class HttpTaskRepository extends AxiosHttpService implements TaskRepository {
  private token = cacheStorage.get('token')

  async create(task: Task): Promise<HttpResponse<Task>> {
    const { description, done } = task

    const response = await this.request<Task>({
      url: '/task',
      method: 'post',
      data: { description, done },
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })

    return response
  }

  async list(): Promise<HttpResponse<{ tasks: Task[] }>> {
    const response = await this.request<{ tasks: Task[] }>({
      url: '/task',
      method: 'get',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })

    return response
  }
  async toggle(id: string): Promise<HttpResponse<void>> {
    return await this.request<void>({
      url: '/task',
      method: 'patch',
      data: {
        id,
      },
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
  }
  async remove(id: string): Promise<HttpResponse<void>> {
    return await this.request<void>({
      url: '/task',
      method: 'delete',
      data: {
        id,
      },
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
  }
}
