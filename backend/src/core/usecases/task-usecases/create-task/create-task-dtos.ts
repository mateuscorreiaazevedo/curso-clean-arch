export interface CreateTaskRequestDto {
  description: string
  done: boolean
  userId: string
}

export interface CreateTaskResponseDto {
  id: string
  userId: string
  description: string
  done: boolean
}