export interface CreateTaskRequestDto {
  description: string
  done: boolean
}

export interface CreateTaskResponseDto {
  id: string
  description: string
  done: boolean
}