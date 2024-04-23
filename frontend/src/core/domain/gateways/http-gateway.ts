import { HttpRequest, HttpResponse } from '@/core/data/protocols'

export interface HttpClientGateway<R = unknown> {
  request(data: HttpRequest): Promise<HttpResponse<R>>
}
