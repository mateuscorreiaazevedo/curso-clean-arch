export class ServerError extends Error {
  constructor() {
    super('Falha no sistema, tente novamente mais tarde.')
    this.name = 'ServerError'
  }
}
