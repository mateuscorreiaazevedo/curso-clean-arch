import { Task } from '@/core/domain/entities'
import { taskAdapter } from '@/utils/task-adapter'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { XCircle } from 'lucide-react'

type Props = {
  id: string
}

export function DeleteTask({ id }: Props) {
  const { removeTaskUseCase } = taskAdapter
  const queryClient = useQueryClient()

  const { mutateAsync: deleteTask } = useMutation({
    mutationFn: () => removeTaskUseCase.execute({ id }),
    onSuccess: () => {
      const cached = queryClient.getQueryData(['tasks']) as Task[]

      queryClient.setQueryData(['tasks'], () => cached.filter(task => task.id !== id))
    },
  })

  return (
    <button onClick={() => deleteTask()}>
      <XCircle className="size-4 text-red-600 hover:text-red-500" />
    </button>
  )
}
