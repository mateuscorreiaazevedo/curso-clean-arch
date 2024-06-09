import { useCustomForm } from '@/hooks/use-custom-form'
import { RegisterPageUseCase } from '@/@types'
import * as y from 'yup'
import { Form } from '../commons/form'
import { useNavigate } from 'react-router-dom'

const registerSchema = y.object({
  email: y
    .string()
    .required('Campo e-mail é obrigatório')
    .email('O email deve ser válido'),
  password: y
    .string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve conter no mínimo 8 caracteres'),
  confirmPassword: y
    .string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve conter no mínimo 8 caracteres')
    .oneOf([y.ref('password')], 'As senhas devem ser iguais'),
  name: y
    .string()
    .required('O nome é obrigatório')
    .min(2, 'O nome deve conter no mínimo 2 caracteres'),
})

type Schema = y.InferType<typeof registerSchema>

export function RegisterForm(props: RegisterPageUseCase) {
  const { createUserUseCase } = props
  const navigate = useNavigate()

  const form = useCustomForm<Schema>({
    schema: registerSchema,
  })

  const onSubmit = async (data: Schema) => {
    try {
      await createUserUseCase.execute(data)
      navigate('/login')
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
      <Form.Input name="name" placeholder="Nome">
        <Form.Input.Field />
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
      <Form.Input name="confirmPassword" placeholder="Confirmar senha">
        <Form.Input.Password />
        <Form.Input.ErrorLabel />
      </Form.Input>
      <button
        type="submit"
        className="bg-white hover:bg-zinc-200 font-semibold text-zinc-900 w-full py-2 rounded"
      >
        Registrar
      </button>
    </Form>
  )
}
