import { Request, Response } from "express";
import { userAdapter } from "../../adapters/user.adapter";
import { taskAdapter } from "../../adapters/task.adapter";


export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.body
    const { authorization } = req.headers
    
    const user = await userAdapter.getMeUserUseCase.execute({ token: authorization })

    await taskAdapter.removeTaskUseCase.execute({ id, userId: user.id })

    res.status(200).send({ deleted: true })

  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}