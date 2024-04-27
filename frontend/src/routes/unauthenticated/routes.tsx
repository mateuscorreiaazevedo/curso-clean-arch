import { Navigate, Route, Routes } from 'react-router-dom'

export default function UnauthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
