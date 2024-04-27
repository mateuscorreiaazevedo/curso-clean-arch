export interface ListTaskRequestDTO {
  userId: string
}

export interface ListTasksResponseDto {
  id: string
  userId: string
  description: string
  done: boolean
}