export class UnexpectedError extends Error {
  constructor() {
    super('Algo de errado aconteceu. Tende novamente em breve')
    this.name = 'UnexpectedError'
  }
}
