import { Request, Response } from "express";
import { MongooseUserRepository } from "../../core/repositories";
import { CreateUserUseCase } from "../../core/usecases/user-usecases";

const userRepository = new MongooseUserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)

export const create = async (req: Request, res: Response) => {
  try {
    const { email, name, password, confirmPassword } = req.body

    const user = await createUserUseCase.execute({ confirmPassword, email, name, password })
    
    res.status(201).send({ id: user.id, name, email })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}