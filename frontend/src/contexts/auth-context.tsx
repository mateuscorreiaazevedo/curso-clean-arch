import { User } from '@/core/domain/entities'
import { LocalStorageCacheService } from '@/core/infra/cache/local-storage-cache-service'
import { createContext, PropsWithChildren, useEffect, useState } from 'react'

interface AuthenticatedProps {
  user: User | null
  authenticated: boolean
}

export const AuthenticationContext = createContext<AuthenticatedProps | null>(null)

const cacheService = new LocalStorageCacheService()

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [user] = useState<User | null>(null)

  const token = cacheService.get<string | null>('token')

  useEffect(() => {
    if (token) {
      setAuthenticated(true)
    }
  }, [])

  return (
    <AuthenticationContext.Provider value={{ authenticated, user }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
