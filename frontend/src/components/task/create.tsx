import { useTaskAdapter } from '@/hooks/use-task-adapter'
import { useUpdatedList } from '@/hooks/use-updated-list'
import { FormEvent, useRef } from 'react'
import { Check } from 'lucide-react'

export function CreateTask() {
  const inputRef = useRef<HTMLInputElement>(null)
  const { createTaskUseCase } = useTaskAdapter()
  const { setUpdatedList } = useUpdatedList()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputRef.current) return
    const description = inputRef.current.value
    await createTaskUseCase.execute({ description, done: false })

    inputRef.current.value = ''
    inputRef.current.focus()
    setUpdatedList(true)
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-x-2">
      <input
        ref={inputRef}
        type="text"
        className="bg-zinc-700 pl-4 flex-1 outline-none focus-visible:bg-zinc-800"
      />
      <button type="submit" className="bg-teal-400 px-4 hover:bg-teal-500 text-black">
        <Check />
      </button>
    </form>
  )
}
