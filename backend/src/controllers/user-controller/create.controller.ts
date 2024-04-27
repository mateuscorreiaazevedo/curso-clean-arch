import { Request, Response } from "express";
import { userAdapter } from "../../adapters/user.adapter";


export const create = async (req: Request, res: Response) => {
  try {
    const { email, name, password, confirmPassword } = req.body

    const user = await userAdapter.createUserUseCase.execute({
      confirmPassword,
      email,
      name,
      password
    })
    
    res.status(201).send({ id: user.id, name, email })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}