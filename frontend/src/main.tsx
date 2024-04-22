import ReactDOM from 'react-dom/client'
import '@/assets/styles/globals.css'
import React from 'react'
import { App } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
