import Task from "@/models/task-model";
import { Request, Response } from "express";




export const create = async (req: Request, res: Response) => {
  try {
    const { description, done } = req.body
    
    const task = await Task.create({ description, done })

    res.status(201).send({ id: task._id, description, done })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

