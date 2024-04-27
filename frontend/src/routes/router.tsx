import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthenticatedRoutes from './authenticated/routes'
import UnauthenticatedRoutes from './unauthenticated/routes'
import { useAuthentication } from '@/hooks/use-authentication'

export default function RouterApp() {
  const { authenticated } = useAuthentication()

  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading...</p>}>
        {authenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </Suspense>
    </BrowserRouter>
  )
}
