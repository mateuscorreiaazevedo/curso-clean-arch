import { env } from '@src/config'
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

type HttpRequest = {
  data?: any
  url: string
  method?: 'get' | 'post' | 'patch' | 'delete'
  headers?: any
  params?: string
}

type HttpResponse<T = unknown> = {
  statusCode: number
  body: T
}

export class HttpService {
  private axiosInstance: AxiosInstance

  constructor(private readonly BASE_URL = env.BASE_URL) {
    this.axiosInstance = axios.create({
      baseURL: this.BASE_URL,
    })
  }

  async request<T = unknown>(props: HttpRequest): Promise<HttpResponse<T>> {
    const { url, data, headers, method = 'get', params } = props
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await this.axiosInstance.request({
        url,
        data,
        headers,
        params,
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
