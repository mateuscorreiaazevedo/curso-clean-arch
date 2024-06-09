import { BadRequestError, ServerError, UnexpectedError } from '@/core/domain/errors'
import { HttpResponse, HttpStatusCode } from '@/core/infra/http'

type HttpRespondeError = {
  error?: string
}

export function httpClientResponseHandler<T = unknown>(
  response: HttpResponse<T & HttpRespondeError>
): T {
  switch (response.statusCode) {
    case HttpStatusCode.OK:
      return response.body!
    case HttpStatusCode.CREATED:
      return response.body!
    case HttpStatusCode.BAD_REQUEST:
      throw new BadRequestError(response.body?.error)
    case HttpStatusCode.SERVER_ERROR:
      throw new ServerError()
    default:
      throw new UnexpectedError()
  }
}
