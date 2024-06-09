import { GetMeUserResponseDTO } from '@/core/application/dtos/user'
import { LocalStorageCacheService } from '@/core/infra/cache'
import { useAuthAdapter } from '@/hooks/use-auth-adapter'
import { useQuery } from '@tanstack/react-query'
import { createContext, PropsWithChildren, useState } from 'react'

interface AuthenticatedProps {
  user?: GetMeUserResponseDTO | null
  authenticated: boolean
  isLoading: boolean
}

export const AuthenticationContext = createContext<AuthenticatedProps | null>(null)

const localStorageService = new LocalStorageCacheService()

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const token = localStorageService.get('token')
  const { getMeUserUseCase } = useAuthAdapter()

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
