import { MongooseTaskRepository } from "@/core/repositories";
import { ListTasksUseCase } from "@/core/usecases/task-usecases";
import { Request, Response } from "express";

const taskRepository = new MongooseTaskRepository()
const listTasksUseCase = new ListTasksUseCase(taskRepository)

export const list = async (_req: Request, res: Response) => {
  try {
    const tasks = await listTasksUseCase.execute()

    res.status(200).send({ tasks })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}