import { userAdapter } from "../../adapters/user.adapter";
import { Request, Response } from "express";

export async function getMe(req: Request, res: Response) {
  try {
    const { authorization } = req.headers
    
    const me = await userAdapter.getMeUserUseCase.execute({ token: authorization })
    
    res.status(200).send({ me })
    
  } catch (error) {
    res.status(400).send({ error: error.message })
  }

  
}