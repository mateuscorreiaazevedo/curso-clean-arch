import { useAuthAdapter } from '@/hooks/use-auth-adapter'
import { useAuthentication } from '@/hooks/use-authentication'
import { useQueryClient } from '@tanstack/react-query'
import { DoorOpen } from 'lucide-react'

export function Header() {
  const { signOutUserUseCase } = useAuthAdapter()
  const { user } = useAuthentication()
  const queryClient = useQueryClient()

  function handleSignOut() {
    signOutUserUseCase.execute()
    queryClient.removeQueries({
      queryKey: ['me'],
    })

    window.location.reload()
  }

  return (
    <header className="fixed top-0 py-4 left-0 w-full flex items-center justify-start">
      <div className="flex flex-col gap-y-1 pl-10">
        <strong className="text-base leading-4 font-semibold text-teal-500">
          Olá, {user?.name}
        </strong>
        <span className="text-xs leading-3 text-zinc-400 font-medium">
          {user?.email}
        </span>
      </div>
      <button className="flex group gap-1 cursor-pointer" onClick={handleSignOut}>
        <DoorOpen className="size-5 text-white ml-3" />
        <span className="text-sm opacity-0 group-hover:opacity-100 transition-all">
          Sair
        </span>
      </button>
    </header>
  )
}
