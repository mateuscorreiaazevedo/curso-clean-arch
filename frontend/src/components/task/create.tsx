import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Task } from '@/core/domain/entities'
import { taskAdapter } from '@/utils/task-adapter'
import { Form } from '../commons/form'
import * as y from 'yup'
import { useCustomForm } from '@/hooks/use-custom-form'
import { Check } from 'lucide-react'

const formSchema = y.object({ description: y.string().required('Campo obrigatório') })

type Schema = y.InferType<typeof formSchema>

export function CreateTask() {
  const form = useCustomForm<Schema>({
    schema: formSchema,
  })
  const { createTaskUseCase } = taskAdapter
  const queryClient = useQueryClient()

  const { mutateAsync: createNewTaskFn } = useMutation({
    mutationFn: (description: string) =>
      createTaskUseCase.execute({ description, done: false }),
    onSuccess: newData => {
      const cached = queryClient.getQueryData(['tasks']) as Task[]

      queryClient.setQueryData(['tasks'], () => [...cached, newData])
    },
  })

  const onSubmit = async (data: Schema) => {
    try {
      await createNewTaskFn(data.description)

      form.reset()
      form.setFocus('description')
    } catch (error) {
      const { message } = error as Error

      form.setError('description', { message })
    }
  }

  return (
    <Form {...form} onSubmit={onSubmit} className="flex gap-x-2">
      <Form.Input name="description" placeholder="Descrição">
        <Form.Input.ErrorLabel />
        <Form.Input.Field />
      </Form.Input>
      <button type="submit" className="bg-teal-400 px-4 hover:bg-teal-500 text-black">
        <Check />
      </button>
    </Form>
  )
}
