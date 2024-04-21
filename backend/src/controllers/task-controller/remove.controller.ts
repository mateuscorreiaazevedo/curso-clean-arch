import { MongooseTaskRepository } from "../../core/repositories";
import { RemoveTaskUseCase } from "../../core/usecases/task-usecases";
import { Request, Response } from "express";

const taskRepository = new MongooseTaskRepository()
const removeTaskUseCase = new RemoveTaskUseCase(taskRepository)

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.body

    
    await removeTaskUseCase.execute({ id })

    res.status(200).send({deleted: true })
    
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}