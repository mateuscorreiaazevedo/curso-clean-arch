import { createContext, useContext } from 'react'

interface State {
  name: string
  placeholder?: string
}

export const InputContext = createContext({} as State)

export const useInput = () => {
  const context = useContext(InputContext)

  if (!context) {
    throw new Error('Error on input-context')
  }

  return { ...context }
}
