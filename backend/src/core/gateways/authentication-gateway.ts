import { Authentication } from "../entities";

export interface AuthenticationGateway {
  login(email: string, password: string): Promise<Authentication>
}