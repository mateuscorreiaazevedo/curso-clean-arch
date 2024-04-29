import { CacheGateway } from '@/core/domain/gateways'

export class LocalStorageCacheService implements CacheGateway {
  get<T = unknown>(key: string): T {
    const cacheData = localStorage.getItem(key)

    const response = cacheData ? JSON.parse(cacheData) : null

    return response as T
  }

  set(key: string, value: object | string): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  remove(key: string): void {
    localStorage.removeItem(key)
  }
}