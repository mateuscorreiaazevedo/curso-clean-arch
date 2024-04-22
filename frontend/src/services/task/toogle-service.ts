import { HttpService } from '../http-service'

const http = new HttpService()

export async function toggle(id: string) {
  await http.request({
    url: '/task',
    method: 'patch',
    data: {
      id,
    },
  })
}
