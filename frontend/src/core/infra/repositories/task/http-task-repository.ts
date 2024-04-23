import { AxiosHttpService } from '../../http/axios-http-service'
import { Task, HttpResponse } from '../../../domain/entities'
import { TaskGateway } from '../../../domain/gateways'

export class HttpTaskService extends AxiosHttpService implements TaskGateway {
  async create(task: Task): Promise<HttpResponse<Task>> {
    const { description, done } = task

    const response = await this.request<Task>({
      url: '/task',
      method: 'post',
      data: { description, done },
    })

    return response
  }

  async list(): Promise<HttpResponse<{ tasks: Task[] }>> {
    const response = await this.request<{ tasks: Task[] }>({
      url: '/task',
      method: 'get',
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
    })
  }
  async remove(id: string): Promise<HttpResponse<void>> {
    return await this.request<void>({
      url: '/task',
      method: 'delete',
      data: {
        id,
      },
    })
  }
}
