import Task from "@/models/task-model";
import { Request, Response } from "express";

export const list = async (_req: Request, res: Response) => {
  try {
    const tasks = await Task.find()

    res.status(200).send({ tasks })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}