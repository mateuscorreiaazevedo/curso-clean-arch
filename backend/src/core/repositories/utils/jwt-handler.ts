import { env } from "../../../config";
import { User } from "../../entities";
import jwt from "jsonwebtoken";

export type JWTPayload = {
  id: string
}

class JWTHandler {
  encrypt(payload: JWTPayload): string {
    const token = jwt.sign(payload, env.jwsSecret, { expiresIn: '7d' })

    return token
  }

  decrypt(token: string): JWTPayload | null {
    const decoded = jwt.verify(token, env.jwsSecret)

    if(!decoded) {
      return null
    }

    return decoded as JWTPayload
  }
}

export const jwtHandler = new JWTHandler()