import { Task } from "@/models/task-model";
import { Request, Response } from "express";

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.body

    
    const result = await Task.deleteOne({ _id: id })

    res.status(200).send({deleted: result.deletedCount > 0 })
    
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}