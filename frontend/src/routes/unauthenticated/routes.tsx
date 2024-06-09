import { authAdapter } from '@/utils/auth-adapter'
import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('@/pages/login'))
const Register = lazy(() => import('@/pages/register'))

export default function UnauthenticatedRoutes() {
  const { loginUserUseCase, createUserUseCase } = authAdapter

  return (
    <Routes>
      <Route path="/login" element={<Login loginUserUseCase={loginUserUseCase} />} />
      <Route
        path="/register"
        element={<Register createUserUseCase={createUserUseCase} />}
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
