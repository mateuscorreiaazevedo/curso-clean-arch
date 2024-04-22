import { useUpdatedList } from '@/hooks/use-updated-list'
import { remove } from '@/services/task'
import { XCircle } from 'lucide-react'

type Props = {
  id: string
}

export function DeleteTask({ id }: Props) {
  const { setUpdatedList } = useUpdatedList()

  async function deleteTask() {
    await remove(id)
    setUpdatedList(true)
  }

  return (
    <button onClick={deleteTask}>
      <XCircle className="size-4 text-red-600 hover:text-red-500" />
    </button>
  )
}
