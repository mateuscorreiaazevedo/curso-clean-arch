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

export interface HttpClient<R = unknown> {
  request(data: HttpRequest): Promise<HttpResponse<R>>
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  SERVER_ERROR = 500,
}
