import ReactDOM from 'react-dom/client'
import '@/assets/styles/globals.css'
import React from 'react'
import { AuthProvider } from './contexts/auth-context'
import RouterApp from './routes/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterApp />
    </AuthProvider>
  </React.StrictMode>
)
