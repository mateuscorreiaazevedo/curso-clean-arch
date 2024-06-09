import { useTaskAdapter } from '@/hooks/use-task-adapter'
import { CreateTask } from './create'
import { TaskItem } from './task'
import { useQuery } from '@tanstack/react-query'
import { Task } from '@/core/domain/entities'

export function TaskList() {
  const { listTaskUseCase } = useTaskAdapter()

  const getTasks = async () => {
    try {
      return (await listTaskUseCase.execute()) as Task[]
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  const { data: tasks } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })

  return (
    <>
      <div className="p-4 flex flex-col gap-1">
        {tasks?.map(task => <TaskItem {...task} key={task?.id} />)}
      </div>
      <CreateTask />
    </>
  )
}
