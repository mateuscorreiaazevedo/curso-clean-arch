import { LoginForm } from '@/components/authentication/login'
import { Head } from '@/components/commons/head'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <>
      <Head title="Login" />
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="text-2xl text-teal-400 font-semibold">Login</h1>
        <hr className="border-b border-b-teal-600 my-2" />
        <LoginForm />
        <Link to={'/register'}>Ir para cadastro</Link>
      </div>
    </>
  )
}
