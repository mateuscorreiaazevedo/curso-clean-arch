import { HttpService } from '../http-service'

const http = new HttpService()

export async function create(description: string) {
  if (!description.length) {
    throw new Error('valor inválido')
  }

  await http.request({
    url: '/task',
    data: {
      description,
      done: false,
    },
    method: 'post',
  })
}
