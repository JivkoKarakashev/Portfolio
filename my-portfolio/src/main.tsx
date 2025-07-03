import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { MenuStateContextProvider } from './context/ShowStateContext.tsx'

import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuStateContextProvider>
      <App />
    </MenuStateContextProvider>
  </StrictMode>,
)
