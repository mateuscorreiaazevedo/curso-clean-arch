import { Task } from "../entities";
import { TaskGateway } from "../gateways";
import { TaskModel } from "./models/task-model";

export class MongooseTaskRepository implements TaskGateway {
  async create(task: Task): Promise<Task> {
    const { description, done } = task

   const result = await TaskModel.create({ description, done })

   return new Task(description, done, result._id.toString() )
  }

  async list(): Promise<Task[]> {
    const result: Task[] = []
    const tasks = await TaskModel.find()

    tasks.forEach(task => {
      result.push(new Task(
        task.description,
        task.done,
        task._id.toString()
      ))
    })

    return result
  }

  async toggle(task: Task): Promise<Task> {
    const taskFound = await TaskModel.findById(task.id).exec()
    const done = !taskFound?.done

    await TaskModel.updateOne(
      {
        _id: task.id
      },
      {
      done
      }
    )    

    return new Task(task.description, done, task.id)
  }

  async remove(task: Task): Promise<void> {
    await TaskModel.deleteOne({ _id: task.id })
  }
 
}