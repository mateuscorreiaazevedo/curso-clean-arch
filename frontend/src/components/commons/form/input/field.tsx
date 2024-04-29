import { useFormContext } from 'react-hook-form'
import { useInput } from './model'

export function InputField() {
  const { name, placeholder } = useInput()
  const { register } = useFormContext()

  return (
    <div className="flex-1 flex">
      <input
        autoComplete="off"
        className="w-60 pl-2 text-zinc-800"
        {...register(name)}
        id={name}
        placeholder={placeholder}
      />
    </div>
  )
}
