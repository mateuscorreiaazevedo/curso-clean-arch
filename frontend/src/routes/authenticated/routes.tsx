import { App } from '@/components'
import { Route, Routes } from 'react-router-dom'

export default function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route index element={<App />} />
    </Routes>
  )
}
