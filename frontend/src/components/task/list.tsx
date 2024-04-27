import { useTaskAdapter } from '@/hooks/use-task-adapter'
import { useUpdatedList } from '@/hooks/use-updated-list'
import { Task } from '@/core/domain/entities'
import { useEffect, useState } from 'react'
import { CreateTask } from './create'
import { TaskItem } from './task'

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const { setUpdatedList, updatedList } = useUpdatedList()
  const { listTaskUseCase } = useTaskAdapter()

  const getTasks = async () => {
    setUpdatedList(true)
    try {
      const response = await listTaskUseCase.execute()
      setTasks(response)
    } catch (error) {
      setTasks([])
      throw new Error((error as Error).message)
    }
  }

  useEffect(() => {
    getTasks()
    setUpdatedList(false)
  }, [updatedList])

  return (
    <>
      <div className="p-4 flex flex-col gap-1">
        {tasks.map(task => (
          <TaskItem {...task} key={task?.id} />
        ))}
      </div>
      <CreateTask />
    </>
  )
}
