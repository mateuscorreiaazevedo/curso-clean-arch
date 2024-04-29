import { useFormContext } from 'react-hook-form'
import { useInput } from './model'
import { XCircle } from 'lucide-react'

export function InputErrorLabel() {
  const { name } = useInput()
  const { formState } = useFormContext()

  return (
    formState.errors[name] && (
      <p className="absolute bottom-0.5 flex gap-1 items-center text-xs w-full text-nowrap text-red-500">
        <XCircle className="size-3" /> {formState.errors[name]?.message?.toString()}
      </p>
    )
  )
}
