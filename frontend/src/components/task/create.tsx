import { useTaskAdapter } from '@/hooks/use-task-adapter'
import { FormEvent, useRef } from 'react'
import { Check } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Task } from '@/core/domain/entities'

export function CreateTask() {
  const inputRef = useRef<HTMLInputElement>(null)
  const { createTaskUseCase } = useTaskAdapter()
  const queryClient = useQueryClient()

  const { mutateAsync: createNewTaskFn } = useMutation({
    mutationFn: (description: string) =>
      createTaskUseCase.execute({ description, done: false }),
    onSuccess: newData => {
      const cached = queryClient.getQueryData(['tasks']) as Task[]

      queryClient.setQueryData(['tasks'], () => [...cached, newData])
    },
  })

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      if (!inputRef.current) return
      const description = inputRef.current.value
      await createNewTaskFn(description)

      inputRef.current.value = ''
      inputRef.current.focus()
    } catch (error) {
      throw new Error(error as any)
    }
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
