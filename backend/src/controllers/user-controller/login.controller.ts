import { Request, Response } from "express";
import { userAdapter } from "../../adapters/user.adapter";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body
    
    const credentials = await userAdapter.loginUserUseCase.execute({ email, password })
    
    res.status(200).send(credentials)
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}