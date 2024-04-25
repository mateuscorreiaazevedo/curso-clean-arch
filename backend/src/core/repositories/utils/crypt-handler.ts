import bcrypt from 'bcrypt'

class CryptHandler {
  async hash(value: string): Promise<string> {
    const salt = await bcrypt.genSalt()

    const hashedValue = await bcrypt.hash(value, salt)

    return hashedValue
  }
}

export const cryptHandler = new CryptHandler()