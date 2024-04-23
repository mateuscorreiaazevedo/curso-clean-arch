export type HttpMethod = 'get' | 'post' | 'patch' | 'delete'

export type HttpRequest = {
  url: string
  method: HttpMethod
  data?: unknown
  headers?: Partial<unknown>
}

export type HttpResponse<T = unknown | undefined> = {
  statusCode: number
  body?: T
}
