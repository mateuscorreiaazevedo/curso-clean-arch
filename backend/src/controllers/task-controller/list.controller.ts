import { Request, Response } from "express";
import { userAdapter } from "../../adapters/user.adapter";
import { taskAdapter } from "../../adapters/task.adapter";

export const list = async (req: Request, res: Response) => {
  try {
    const { authorization: token } = req.headers

    const user = await userAdapter.getMeUserUseCase.execute({ token })
    const tasks = await taskAdapter.listTasksUseCase.execute({ userId: user.id })

    res.status(200).send({ tasks })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}