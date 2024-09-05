import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AlertContextProvider } from './contexts/AlertContext.tsx'
import { UserContextProvider } from './contexts/UserContext.tsx'
import { AdCtxProvider } from './contexts/AdCtx.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AlertContextProvider>
      <UserContextProvider>
        <AdCtxProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AdCtxProvider>
      </UserContextProvider>
    </AlertContextProvider>
  </React.StrictMode>,
)
