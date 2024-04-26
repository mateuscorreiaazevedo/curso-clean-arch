import { Request, Response } from "express";
import { MongooseUserRepository } from "../../core/repositories";
import { LoginUserUseCase } from "../../core/usecases/user-usecases";

const userRepository = new MongooseUserRepository()
const loginUserUseCase = new LoginUserUseCase(userRepository)

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body
    
    const credentials = await loginUserUseCase.execute({ email, password })
    
    res.status(200).send(credentials)
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}