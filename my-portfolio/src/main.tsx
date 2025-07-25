// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'
import { ComposeAppContexts } from './context/ComposeAppContexts.tsx'
import { MobileNavMenuStatesContextProvider } from './context/MobileNavMenu.tsx'
import { DesktopNavLinksStatesContextProvider } from './context/DesktopNavLinks.tsx'
import { ViewModeStateContextProvider } from './context/ViewMode.tsx'
import { AboutMeSectionsStateContextProvider } from './context/AboutMeSections.tsx'
import { ContactMeSectionsStateContextProvider } from './context/ContactMeSections.tsx'


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <ComposeAppContexts components={[
      MobileNavMenuStatesContextProvider,
      DesktopNavLinksStatesContextProvider,
      ViewModeStateContextProvider,
      AboutMeSectionsStateContextProvider,
      ContactMeSectionsStateContextProvider
    ]}>
      <App />
    </ComposeAppContexts>
  // </StrictMode>,
)
