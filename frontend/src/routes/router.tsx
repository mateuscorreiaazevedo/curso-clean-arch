import { Suspense } from 'react'
import AuthenticatedRoutes from './authenticated/routes'
import UnauthenticatedRoutes from './unauthenticated/routes'
import { useAuthentication } from '@/hooks/use-authentication'

export default function RouterApp() {
  const { authenticated, loading } = useAuthentication()

  return (
    <Suspense fallback={<p>loading...</p>}>
      {authenticated && !loading ? (
        <AuthenticatedRoutes />
      ) : (
        <UnauthenticatedRoutes />
      )}
    </Suspense>
  )
}
