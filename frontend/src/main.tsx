import ReactDOM from 'react-dom/client'
import '@/assets/styles/globals.css'
import React from 'react'
import { RouterApp } from './routes/router'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/auth-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const reactQuery = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={reactQuery}>
      <BrowserRouter>
        <AuthProvider>
          <RouterApp />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
