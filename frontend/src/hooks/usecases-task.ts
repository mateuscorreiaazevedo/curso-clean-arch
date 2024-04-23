import { UseCaseContext } from '@/contexts/task/task-context'
import { useContext } from 'react'

export function useCasesTask() {
  const useCaseContext = useContext(UseCaseContext)

  if (!useCaseContext) {
    throw new Error('Failed of to using usecases of task')
  }

  return { ...useCaseContext }
}
