export interface Cache {
  set(key: string, value: object): void
  get<T = unknown>(key: string): T
  remove(key: string): void
}
