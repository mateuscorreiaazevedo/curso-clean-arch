import { HttpService } from '../http-service'

const http = new HttpService()

export async function get() {
  const response = await http.request<{ tasks: TaskResponse[] }>({
    url: '/task',
  })

  return response.body.tasks
}
