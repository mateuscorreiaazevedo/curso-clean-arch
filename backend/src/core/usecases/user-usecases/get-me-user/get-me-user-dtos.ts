export interface GetMeUserRequestDTO {
  token: string
}

export interface GetMeUserResponseDTO {
  id: string
  name: string
  email: string
}