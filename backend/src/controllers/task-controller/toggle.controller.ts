import { userAdapter } from "../../adapters/user.adapter";
import { taskAdapter } from "../../adapters/task.adapter";
import { Request, Response } from "express";


export const toggle = async (req: Request, res: Response) => {
  try {
    const { id } = req.body
    const { authorization: token } = req.headers

    const user = await userAdapter.getMeUserUseCase.execute({ token })
    await taskAdapter.toggleTaskUseCase.execute({ id, userId: user.id })

    res.status(200).send({ updated: true })

  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}