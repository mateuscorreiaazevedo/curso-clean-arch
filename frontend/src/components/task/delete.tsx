import { useUpdatedList } from '@/hooks/use-updated-list'
import { useCasesTask } from '@/hooks/usecases-task'
import { XCircle } from 'lucide-react'

type Props = {
  id: string
}

export function DeleteTask({ id }: Props) {
  const { removeTaskUseCase } = useCasesTask()
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
