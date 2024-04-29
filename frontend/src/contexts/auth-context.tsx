import { User } from '@/core/domain/entities'
import { LocalStorageCacheService } from '@/core/infra/cache/local-storage-cache-service'
import { useAuthAdapter } from '@/hooks/use-auth-adapter'
import { createContext, PropsWithChildren, useEffect, useState } from 'react'

interface AuthenticatedProps {
  user: Omit<User, 'password'> | null
  authenticated: boolean
  loading: boolean
  setLoading: (value: boolean) => void
}

export const AuthenticationContext = createContext<AuthenticatedProps | null>(null)

const cacheService = new LocalStorageCacheService()

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<Omit<User, 'password'> | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const { getMeUserUseCase } = useAuthAdapter()
  const token = cacheService.get<string | null>('token')

  async function getCurrentUser() {
    try {
      const response = await getMeUserUseCase.execute()

      setUser(response)
      setAuthenticated(true)
    } catch (error) {
      setAuthenticated(false)
    }
  }

  useEffect(() => {
    if (token) {
      getCurrentUser()
    }
    setLoading(false)
  }, [loading])

  return (
    <AuthenticationContext.Provider
      value={{ authenticated, user, loading, setLoading }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
