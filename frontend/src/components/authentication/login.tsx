import { useCustomForm } from '@/hooks/use-custom-form'
import { Form } from '../commons/form'
import * as y from 'yup'
import { useTokenLocalStorage } from '@/hooks/use-token-local-storage'
import { LoginPageUseCase } from '@/@types'

const loginSchema = y.object({
  email: y
    .string()
    .required('Campo e-mail é obrigatório')
    .email('O email deve ser válido'),
  password: y
    .string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve conter no mínimo 8 caracteres'),
})

type Schema = y.InferType<typeof loginSchema>

export function LoginForm({ loginUserUseCase }: LoginPageUseCase) {
  const cacheStorage = useTokenLocalStorage()

  const form = useCustomForm<Schema>({
    schema: loginSchema,
  })

  const onSubmit = async (data: Schema) => {
    try {
      const { token } = await loginUserUseCase.execute(data)
      cacheStorage.set(token)
      window.location.reload()
    } catch (error) {
      const { message } = error as Error
      form.setError('root', { message })
    }
  }

  return (
    <Form {...form} onSubmit={onSubmit} className="my-2">
      <Form.Input name="root">
        <Form.Input.ErrorLabel />
      </Form.Input>
      <Form.Input name="email" placeholder="E-mail">
        <Form.Input.Field />
        <Form.Input.ErrorLabel />
      </Form.Input>
      <Form.Input name="password" placeholder="Senha">
        <Form.Input.Password />
        <Form.Input.ErrorLabel />
      </Form.Input>
      <button
        type="submit"
        className="bg-white hover:bg-zinc-200 font-semibold text-zinc-900 w-full py-2 rounded"
      >
        Login
      </button>
    </Form>
  )
}
