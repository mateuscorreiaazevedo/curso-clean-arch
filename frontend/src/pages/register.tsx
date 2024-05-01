import { RegisterForm } from '@/components/authentication/register'
import { Head } from '@/components/commons/head'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <>
      <Head title="Registro" />
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="text-2xl text-teal-400 font-semibold">Registrar-se</h1>
        <hr className="border-b border-b-teal-600 my-2" />
        <RegisterForm />
        <Link to={'/login'}>Acesse sua conta</Link>
      </div>
    </>
  )
}
