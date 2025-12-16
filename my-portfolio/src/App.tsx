import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import { PageTransitionOverlay } from "./components/page-transition-overlay/pageTransitionOverlay.tsx";
import RoutesWithAnimation from "./components/router/RoutesWithAnimation.tsx";
import { HeaderMobile } from "./components/header/mobile/HeaderMobile.tsx";
import { HeaderDesktop } from "./components/header/desktop/HeaderDesktop.tsx";
import { FooterMobile } from "./components/footer/mobile/FooterMobile.tsx";
import { FooterDesktop } from "./components/footer/desktop/FooterDesktop.tsx";
import { ViewModeStateContext } from "./context/ViewMode.tsx";

import styles from './App.module.css';

function App() {

  const { viewModeState } = useContext(ViewModeStateContext);

  return (
    <div className="frame">
      <div className="site-container">
        <BrowserRouter>
          {viewModeState === 'mobile' && <HeaderMobile />}
          {viewModeState === 'desktop' && <HeaderDesktop />}
          <div className={styles['page-content-wrapper']}>
            <PageTransitionOverlay />
            <RoutesWithAnimation />
          </div>
          {viewModeState === 'mobile' && <FooterMobile />}
          {viewModeState === 'desktop' && <FooterDesktop />}
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;