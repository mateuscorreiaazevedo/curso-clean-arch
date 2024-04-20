import { Task } from "@/models/task-model";
import { Request, Response } from "express";

export const toggle = async (req: Request, res: Response) => {
  try {
    const { id } = req.body

    const task = await Task.findById(id).exec()

    const result = await Task.updateOne({ _id: id }, {
      done: !task?.done
    })

    res.status(200).send({ updated: result.modifiedCount > 0 })
    
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}