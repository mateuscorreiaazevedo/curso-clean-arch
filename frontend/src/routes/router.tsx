import { Suspense } from 'react'
import AuthenticatedRoutes from './authenticated/routes'
import UnauthenticatedRoutes from './unauthenticated/routes'
import { useAuthentication } from '@/hooks/use-authentication'
import { Routes, Route } from 'react-router-dom'

export function RouterApp() {
  const { authenticated, isLoading } = useAuthentication()

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Routes>
        {authenticated && !isLoading ? (
          <Route path="/*" element={<AuthenticatedRoutes />} />
        ) : (
          <Route path="/*" element={<UnauthenticatedRoutes />} />
        )}
      </Routes>
    </Suspense>
  )
}
