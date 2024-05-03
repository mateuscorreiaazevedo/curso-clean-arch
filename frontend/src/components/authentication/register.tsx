import { RegisterPageUseCase } from '@/@types'

export function RegisterForm(props: RegisterPageUseCase) {
  return <form>{JSON.stringify(props, null, 2)}</form>
}
