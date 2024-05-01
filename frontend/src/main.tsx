import ReactDOM from 'react-dom/client'
import '@/assets/styles/globals.css'
import React from 'react'
import RouterApp from './routes/router'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/auth-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
