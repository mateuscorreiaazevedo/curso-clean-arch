export interface CreateUserRequestDTO {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface CreateUserResponseDTO {
  id: string
  name: string
  email: string
}
