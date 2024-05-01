import { LocalStorageCacheService } from '@/core/infra/cache'
import { create } from 'zustand'

interface UseTokenLocalStorage {
  set(value: string): void
  get(): string | null
  remove(): void
}

const localStorageCacheService = new LocalStorageCacheService()

export const useTokenLocalStorage = create<UseTokenLocalStorage>(() => ({
  get() {
    return localStorageCacheService.get<string | null>('token')
  },
  remove() {
    localStorageCacheService.remove('token')
  },
  set(value) {
    localStorageCacheService.set('token', value)
  },
}))
