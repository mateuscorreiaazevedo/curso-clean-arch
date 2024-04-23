import { BadRequestError, ServerError, UnexpectedError } from '@/core/domain/errors'
import { HttpResponse } from '@/core/domain/entities'
import { HttpStatusCode } from './http-client'

export function httpClientResponseHandler<T = unknown>(response: HttpResponse<T>): T {
  switch (response.statusCode) {
    case HttpStatusCode.OK:
      return response.body!
    case HttpStatusCode.CREATED:
      return response.body!
    case HttpStatusCode.BAD_REQUEST:
      throw new BadRequestError()
    case HttpStatusCode.SERVER_ERROR:
      throw new ServerError()
    default:
      throw new UnexpectedError()
  }
}
