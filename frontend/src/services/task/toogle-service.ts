import { HttpService } from '../http-service'

const http = new HttpService()

export async function toggle(id: string) {
  const url = `/task/${id}`
  const { body: taskFound } = await http.request<TaskResponse>({
    url: url,
    method: 'get',
  })

  if (taskFound) {
    await http.request({
      url,
      method: 'patch',
      data: {
        done: !taskFound.done,
      },
    })
  }
}
