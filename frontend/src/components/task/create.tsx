import { useUpdatedList } from '@src/hooks/use-updated-list'
import { create } from '@src/services/task'
import { Check } from 'lucide-react'
import { FormEvent, useRef } from 'react'

export function CreateTask() {
  const { setUpdatedList } = useUpdatedList()
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputRef.current) return
    const description = inputRef.current.value
    await create(description)

    inputRef.current.value = ''
    setUpdatedList(true)
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-x-2">
      <input
        ref={inputRef}
        type="text"
        className="bg-zinc-700 flex-1 outline-none focus-visible:bg-zinc-800"
      />
      <button type="submit" className="bg-teal-400 px-4 hover:bg-teal-500 text-black">
        <Check />
      </button>
    </form>
  )
}
