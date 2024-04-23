import { BadRequestError, ServerError, UnexpectedError } from '@/core/domain/errors'
import { HttpResponse, HttpStatusCode } from '@/core/data/protocols'

export class HttpClientResponseHandler {
  execute<T = unknown>(response: HttpResponse<T>) {
    switch (response.statusCode) {
      case HttpStatusCode.OK:
        return response.body as T

      case HttpStatusCode.CREATED:
        return response.body as T

      case HttpStatusCode.BAD_REQUEST:
        throw new BadRequestError()

      case HttpStatusCode.SERVER_ERROR:
        throw new ServerError()

      default:
        throw new UnexpectedError()
    }
  }
}
