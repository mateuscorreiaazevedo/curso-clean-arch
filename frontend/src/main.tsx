import ReactDOM from 'react-dom/client'
import '@/assets/styles/globals.css'
import React from 'react'
import { App } from './components'
import { TaskUseCaseProvider } from './contexts/task/task-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskUseCaseProvider>
      <App />
    </TaskUseCaseProvider>
  </React.StrictMode>
)
