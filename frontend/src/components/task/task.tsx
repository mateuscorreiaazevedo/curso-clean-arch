import { useTaskAdapter } from '@/hooks/use-task-adapter'
import { useUpdatedList } from '@/hooks/use-updated-list'
import { Task } from '@/core/domain/entities'
import { DeleteTask } from './delete'
import { Check } from 'lucide-react'

export function TaskItem(props: Task) {
  const { setUpdatedList } = useUpdatedList()
  const { toggleTaskUseCase } = useTaskAdapter()
  const { description, done, id } = props

  const toggleTask = async () => {
    await toggleTaskUseCase.execute({ id: id ?? '' })
    setUpdatedList(true)
  }

  return (
    <div className="flex flex-row items-center gap-x-2">
      <input
        type="checkbox"
        id={id}
        checked={done}
        onChange={toggleTask}
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
