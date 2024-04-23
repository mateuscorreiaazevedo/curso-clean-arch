import { PropsWithChildren } from 'react'

import { UseCaseContext, useCaseDefaultValue } from './task-context'

export const TaskUseCaseProvider = ({ children }: PropsWithChildren) => {
  return (
    <UseCaseContext.Provider value={useCaseDefaultValue}>
      {children}
    </UseCaseContext.Provider>
  )
}
