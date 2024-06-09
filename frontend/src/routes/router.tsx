import { Suspense } from 'react'
import AuthenticatedRoutes from './authenticated/routes'
import UnauthenticatedRoutes from './unauthenticated/routes'
import { useAuthentication } from '@/hooks/use-authentication'

export function RouterApp() {
  const { authenticated, isLoading } = useAuthentication()

  return (
    <Suspense fallback={<p>loading...</p>}>
      {authenticated && !isLoading ? (
        <AuthenticatedRoutes />
      ) : (
        <UnauthenticatedRoutes />
      )}
    </Suspense>
  )
}
