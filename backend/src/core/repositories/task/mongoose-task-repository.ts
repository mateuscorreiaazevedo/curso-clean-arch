import { Task } from "../../entities";
import { TaskModel } from "../models/task-model";
import { TaskRepository } from "./task-repository";

export class MongooseTaskRepository implements TaskRepository {
  async create(task: Task): Promise<Task> {
    const { description, done, userId } = task

   const result = await TaskModel.create({ description, done, userId })

   return new Task(description, done, userId, result._id.toString() )
  }

  async list(userId: string): Promise<Task[]> {
    const result: Task[] = []
    const tasks = await TaskModel.find({ userId })

    tasks.forEach(task => {
      result.push(new Task(
        task.description,
        task.done,
        task.userId,
        task._id.toString()
      ))
    })

    return result
  }
  
  async findById(id: string): Promise<Task> {
    const task = await TaskModel.findById(id).exec()

    return new Task(
      task?.description ?? '',
      task?.done ?? false,
      task?.userId ?? '',
      task?._id.toString() ?? ''
    )
  }

  async toggle(task: Task): Promise<Task> {
    const done = !task.done

    await TaskModel.updateOne(
      {
        _id: task.id
      },
      {
      done
      }
    )    

    return new Task(task.description, done, task.userId, task.id)
  }

  async remove(task: Task): Promise<void> {
    await TaskModel.deleteOne({ _id: task.id })
  }
 
}