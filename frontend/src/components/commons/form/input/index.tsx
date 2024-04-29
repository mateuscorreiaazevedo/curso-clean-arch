import { InputErrorLabel } from './error-label'
import { InputField } from './field'
import { InputContext } from './model'
import { InputPassword } from './password'

type InputProps = {
  children: React.ReactNode
  name: string
  placeholder?: string
}

function Input({ name, children, placeholder }: InputProps) {
  return (
    <InputContext.Provider value={{ name, placeholder }}>
      <div className="flex flex-col gap-0.5 pb-5 relative">{children}</div>
    </InputContext.Provider>
  )
}

Input.Field = InputField
Input.Password = InputPassword
Input.ErrorLabel = InputErrorLabel

export { Input }
