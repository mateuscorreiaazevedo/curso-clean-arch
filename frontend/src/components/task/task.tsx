import { useTaskAdapter } from '@/hooks/use-task-adapter'
import { Task } from '@/core/domain/entities'
import { DeleteTask } from './delete'
import { Check } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function TaskItem(props: Task) {
  const { toggleTaskUseCase } = useTaskAdapter()
  const { description, done, id } = props
  const queryClient = useQueryClient()

  const { mutateAsync: toggleTask } = useMutation({
    mutationFn: () => toggleTaskUseCase.execute({ id: id ?? '' }),
    onSuccess: () => {
      const cached = queryClient.getQueryData(['tasks']) as Task[]

      queryClient.setQueryData(['tasks'], () => {
        const listMapped = cached.map(task => {
          if (task.id === id) {
            return { ...task, done: !task.done }
          }
          return task
        })
        return listMapped
      })
    },
  })

  return (
    <div className="flex flex-row items-center gap-x-2">
      <input
        type="checkbox"
        id={id}
        checked={done}
        onChange={() => toggleTask()}
        className="sr-only"
      />
      <label
        htmlFor={id}
        data-done={done}
        className="size-5 flex items-center justify-center cursor-pointer border border-zinc-700 rounded data-[done=true]:bg-green-600"
      >
        {done && <Check className="text-white size-4" />}
      </label>
      <span
        data-done={done}
        className="flex-1 text-base data-[done=true]:line-through"
      >
        {description}
      </span>
      <DeleteTask id={id ?? ''} />
    </div>
  )
}
