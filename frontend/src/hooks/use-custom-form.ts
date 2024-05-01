import { FieldValues, useForm, UseFormProps } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type CustomForms<T extends FieldValues> = Omit<UseFormProps, 'resolver' | 'mode'> & {
  schema: yup.ObjectSchema<T>
}

export function useCustomForm<T extends FieldValues>(props: CustomForms<T>) {
  const { schema, ...rest } = props

  const methods = useForm<T | any>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    ...rest,
  })

  return methods
}
