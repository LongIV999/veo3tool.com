import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import { PopupProvider } from './context/PopupContext.tsx'

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element not found');

createRoot(rootEl).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <PopupProvider>
          <App />
        </PopupProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
