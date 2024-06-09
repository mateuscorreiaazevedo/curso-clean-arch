import { CreateTask } from './create'
import { TaskItem } from './task'
import { useQuery } from '@tanstack/react-query'
import { Task } from '@/core/domain/entities'
import { taskAdapter } from '@/utils/task-adapter'

export function TaskList() {
  const { listTaskUseCase } = taskAdapter

  const getTasks = async () => {
    try {
      return (await listTaskUseCase.execute()) as Task[]
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  const { data: tasks, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })

  return (
    <>
      <div className="p-4 flex flex-col gap-1">
        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-6 w-full my-1 bg-zinc-900 animate-pulse rounded"
            />
          ))}

        {tasks?.map(task => <TaskItem {...task} key={task?.id} />)}
      </div>
      <CreateTask />
    </>
  )
}
