import { useAuthentication } from '@/hooks/use-authentication'
import { Head } from './commons/head'
import { TaskList } from './task/list'

export default function App() {
  const { user } = useAuthentication()

  return (
    <>
      <Head title={`TODO de ${user?.name}`} />
      <div className="h-screen w-full flex items-center justify-center">
        <section className="border border-zinc-900 flex flex-col min-w-60">
          <div className="flex items-center justify-center px-8 py-4">
            <h1 className="text-2xl font-semibold text-teal-400">Todos</h1>
          </div>
          <hr className="border-teal-800" />
          <TaskList />
        </section>
      </div>
    </>
  )
}
