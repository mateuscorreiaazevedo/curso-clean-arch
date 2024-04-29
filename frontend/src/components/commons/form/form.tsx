import { FormProvider, UseFormReturn } from 'react-hook-form'
import { Input } from './input'

interface FormProps extends UseFormReturn {
  onSubmit: (data: any) => Promise<void>
  children: React.ReactNode
  className?: string
}

function Form({ onSubmit, children, className, ...methods }: FormProps) {
  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.Input = Input

export { Form }
