import { useTaskAdapter } from '@/hooks/use-task-adapter'
import { useUpdatedList } from '@/hooks/use-updated-list'
import { XCircle } from 'lucide-react'

type Props = {
  id: string
}

export function DeleteTask({ id }: Props) {
  const { removeTaskUseCase } = useTaskAdapter()
  const { setUpdatedList } = useUpdatedList()

  async function deleteTask() {
    await removeTaskUseCase.execute({ id })
    setUpdatedList(true)
  }

  return (
    <button onClick={deleteTask}>
      <XCircle className="size-4 text-red-600 hover:text-red-500" />
    </button>
  )
}
