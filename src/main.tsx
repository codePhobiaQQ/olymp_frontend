import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '@components/features/providers'
import { StoreProvider } from '@/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <BrowserRouter future={{ v7_startTransition: true }} basename='/'>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </StoreProvider>
  </React.StrictMode>,
)
