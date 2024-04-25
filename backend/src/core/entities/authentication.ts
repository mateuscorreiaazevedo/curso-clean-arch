export class Authentication {
  private Token: string

  constructor(token: string) {
    if (!this.isTokenValid(token)) {
      throw new Error("INVALID_TOKEN_VALUE");
    }
    
    this.Token = token
  }

  get token() {
    return this.Token
  }
  
  private isTokenValid(token: string): boolean {
    const tokenRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/

    return typeof token === 'string' && tokenRegex.test(token)
  }
}