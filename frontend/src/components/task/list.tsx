import { get } from '@src/services/task'
import { useEffect, useState } from 'react'
import { Task } from './task'
import { useUpdatedList } from '@src/hooks/use-updated-list'
import { CreateTask } from './create'

export function TaskList() {
  const [tasks, setTasks] = useState<TaskResponse[]>([])
  const { setUpdatedList, updatedList } = useUpdatedList()

  async function getTasks() {
    try {
      const response = await get()
      setTasks(response)
    } catch (error) {
      setTasks([])
      throw new Error((error as Error).message)
    }
  }

  useEffect(() => {
    getTasks()
    setUpdatedList(false)
  }, [setUpdatedList, updatedList])

  return (
    <>
      <div className="p-4 flex flex-col gap-1">
        {tasks.map(task => (
          <Task {...task} key={task.id} />
        ))}
      </div>
      <CreateTask />
    </>
  )
}
