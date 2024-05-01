export interface LoginUserRequestDTO {
  email: string
  password: string
}

export interface LoginUserReponseDTO {
  token: string
}