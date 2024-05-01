import { useFormContext } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react'
import { useInput } from './model'
import { useState } from 'react'

export function InputPassword() {
  const { name, placeholder } = useInput()
  const [password, setPassword] = useState<boolean>(true)
  const { register } = useFormContext()

  const Icon = password ? Eye : EyeOff

  const handleTogglePassword = () => {
    setPassword(prev => !prev)
  }

  return (
    <div className="flex-1 flex gap-2">
      <input
        type={password ? 'password' : 'text'}
        autoComplete="off"
        className="w-full pl-2 text-zinc-800"
        {...register(name)}
        id={name}
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={handleTogglePassword}
        className="text-black bg-white py-px px-0.5 flex items-center justify-center"
      >
        <Icon className="size-4" />
      </button>
    </div>
  )
}
