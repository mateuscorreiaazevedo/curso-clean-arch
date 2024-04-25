export class User {
  private Id: string
  private Name: string
  private Email: string
  private Password: string

  constructor(name: string, email: string, password: string, id?: string) {
    if (id && !this.isIdValid(id)) {
      throw new Error("INVALID_USER_ID");
    }
    if (!this.isNameValid(name)) {
      throw new Error("INVALID_USER_NAME");
    }
    if (!this.isEmailValid(email)) {
      throw new Error("INVALID_USER_EMAIL");
    }
    if (!this.isPasswordValid(password)) {
      throw new Error("INVALID_USER_PASSWORD");
    }

    this.Id = id
    this.Name = name
    this.Email = email
    this.Password = password
  }

  get id() {
    return this.Id
  }

  get name() {
    return this.Name
  }

  get email() {
    return this.Email
  }

  get password() {
    return this.Password
  }
  
  private isIdValid(id: string): boolean {
    return typeof id === 'string'
  }

  private isNameValid(name: string): boolean {
    return typeof name === 'string' && name.length > 3 && name.length < 30
  }

  private isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    return typeof email === 'string' && emailRegex.test(email)
  }

  private isPasswordValid(password: string): boolean {
    const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    
    return typeof password === 'string' && passwordRegex.test(password) && password.length >= 8
  }
}