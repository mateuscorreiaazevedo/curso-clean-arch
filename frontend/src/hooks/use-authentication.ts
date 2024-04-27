import { AuthenticationContext } from '@/contexts/auth-context'
import { useContext } from 'react'

export function useAuthentication() {
  const context = useContext(AuthenticationContext)

  if (!context) {
    throw new Error('Error on authProvider. Please, verify the app')
  }

  return {
    ...context,
  }
}
