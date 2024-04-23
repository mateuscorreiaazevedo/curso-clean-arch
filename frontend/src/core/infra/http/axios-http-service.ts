import { env } from '@/config'
import { HttpRequest, HttpResponse } from '@/core/domain/entities'
import { HttpClientGateway } from '@/core/domain/gateways'
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

export class AxiosHttpService implements HttpClientGateway {
  private axiosInstance: AxiosInstance

  constructor(private readonly BASE_URL = env.BASE_URL) {
    this.axiosInstance = axios.create({
      baseURL: this.BASE_URL,
    })
  }

  async request<T = unknown>(props: HttpRequest): Promise<HttpResponse<T>> {
    const { url, data, headers, method = 'get' } = props
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await this.axiosInstance.request({
        url,
        data,
        headers,
        method,
      })
    } catch (error) {
      axiosResponse = (error as AxiosError).response!
    }

    return {
      body: axiosResponse.data,
      statusCode: axiosResponse.status,
    }
  }
}
