import { create } from 'zustand'

type State = {
  updatedList: boolean
  setUpdatedList: (value: boolean) => void
}

export const useUpdatedList = create<State>(set => ({
  updatedList: false,
  setUpdatedList(value: boolean) {
    set(() => ({ updatedList: value }))
  },
}))
