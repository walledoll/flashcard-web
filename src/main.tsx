import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@app/App.tsx'
import '@app/styles/index.scss'
import '@shared/config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
