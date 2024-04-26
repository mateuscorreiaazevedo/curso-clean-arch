import { Request, Response } from "express";
import { MongooseUserRepository } from "../../core/repositories";
import { GetMeUserUseCase } from "../../core/usecases/user-usecases";

const userRepository = new MongooseUserRepository()
const getMeUserUseCase = new GetMeUserUseCase(userRepository)

export async function getMe(req: Request, res: Response) {
  try {
    const { authorization } = req.headers
    
    const me = await getMeUserUseCase.execute({ token: authorization })
    
    res.status(200).send({ me })
    
  } catch (error) {
    res.status(400).send({ error: error.message })
  }

  
}