import { HttpRequest, HttpResponse } from '../entities'

export interface HttpClientGateway<R = unknown> {
  request(data: HttpRequest): Promise<HttpResponse<R>>
}
