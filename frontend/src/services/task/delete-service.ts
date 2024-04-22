import { HttpService } from '../http-service'

const http = new HttpService()

export async function remove(id: string) {
  await http.request({
    url: '/task',
    data: { id },
    method: 'delete',
  })
}
