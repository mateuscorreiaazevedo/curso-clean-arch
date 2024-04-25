import { User } from "../entities";

export interface UserGateway {
  create(user: User): Promise<User>
}