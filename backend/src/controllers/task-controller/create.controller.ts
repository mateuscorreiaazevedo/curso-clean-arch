import { Request, Response } from "express";
import { userAdapter } from "../../adapters/user.adapter";
import { taskAdapter } from "../../adapters/task.adapter";

export const create = async (req: Request, res: Response) => {
  try {
    const { description, done } = req.body
    const { authorization } = req.headers

    const user = await userAdapter.getMeUserUseCase.execute({ token: authorization })
    const task = await taskAdapter.createTaskUseCase.execute({
      description,
      done,
      userId: user.id
    })

    res.status(201).send({ id: task.id, description, done })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

