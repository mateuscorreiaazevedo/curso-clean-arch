import { env } from '@/config'
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { HttpClient, HttpRequest, HttpResponse } from './http-protocols'

export class AxiosHttpService implements HttpClient {
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
