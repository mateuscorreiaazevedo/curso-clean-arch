export class BadRequestError extends Error {
  constructor() {
    super('Falha na requisição, tente novamente mais tarde')
    this.name = 'BadRequestError'
  }
}
