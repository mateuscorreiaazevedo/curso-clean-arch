export interface CreateTaskRequestDTO {
  description: string
  done: boolean
}

export interface CreateTaskResponseDTO {
  id: string
  done: boolean
  description: string
}
