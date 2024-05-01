import { Outlet } from 'react-router-dom'
import { Header } from '../commons/header/header'

export function LayoutAuthenticated() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
