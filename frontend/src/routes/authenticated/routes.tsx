import { App } from '@/components'
import { LayoutAuthenticated } from '@/components/layouts'
import { Navigate, Route, Routes } from 'react-router-dom'

export default function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutAuthenticated />}>
        <Route index element={<App />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  )
}
