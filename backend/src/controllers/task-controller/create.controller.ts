import { MongooseTaskRepository } from "../../core/repositories";
import { CreateTaskUseCase } from "../../core/usecases/task-usecases";
import { Request, Response } from "express";

const taskRepository = new MongooseTaskRepository()
const createTaskUseCase = new CreateTaskUseCase(taskRepository)

export const create = async (req: Request, res: Response) => {
  try {
    const { description, done } = req.body
    
    const task = await createTaskUseCase.execute({ description, done })

    res.status(201).send({ id: task.id, description, done })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

