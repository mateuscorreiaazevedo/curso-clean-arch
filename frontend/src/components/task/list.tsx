import { useEffect, useState } from 'react'
import { useUpdatedList } from '@/hooks/use-updated-list'
import { useCasesTask } from '@/hooks/usecases-task'
import { Task } from '@/core/domain/entities'
import { CreateTask } from './create'
import { TaskItem } from './task'

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const { setUpdatedList, updatedList } = useUpdatedList()
  const { listTaskUseCase } = useCasesTask()

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
