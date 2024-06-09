export class BadRequestError extends Error {
  constructor(message?: string) {
    super(message ?? 'Falha na requisição, tente novamente mais tarde')
    this.name = 'BadRequestError'
  }
}
