import { GetMeUserResponseDTO } from '@/core/application/dtos/user'
import { useTokenLocalStorage } from '@/hooks/use-token-local-storage'
import { authAdapter } from '@/utils/auth-adapter'
import { useQuery } from '@tanstack/react-query'
import { createContext, PropsWithChildren, useState } from 'react'

interface AuthenticatedProps {
  user?: GetMeUserResponseDTO | null
  authenticated: boolean
  isLoading: boolean
}

export const AuthenticationContext = createContext<AuthenticatedProps | null>(null)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const token = useTokenLocalStorage().get()
  const { getMeUserUseCase } = authAdapter

  async function getCurrentUser() {
    if (token) {
      try {
        const response = await getMeUserUseCase.execute()
        setAuthenticated(true)
        return response
      } catch (error) {
        setAuthenticated(false)
        return null
      }
    }

    return null
  }

  const { data: user, isLoading } = useQuery({
    queryKey: ['me'],
    queryFn: getCurrentUser,
  })

  return (
    <AuthenticationContext.Provider value={{ authenticated, user, isLoading }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
