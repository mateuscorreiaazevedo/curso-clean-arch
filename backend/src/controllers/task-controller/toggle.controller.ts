import { ToggleTaskUseCase } from "../../core/usecases/task-usecases";
import { MongooseTaskRepository } from "../../core/repositories";
import { Request, Response } from "express";

const taskRepository = new MongooseTaskRepository()
const toggleTaskUseCase = new ToggleTaskUseCase(taskRepository) 

export const toggle = async (req: Request, res: Response) => {
  try {
    const { id } = req.body

    await toggleTaskUseCase.execute({ id })

    res.status(200).send({ updated: true })
    
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}