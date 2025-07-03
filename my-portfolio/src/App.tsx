import { BrowserRouter } from "react-router-dom";

import RoutesWithAnimation from "./components/router/RoutesWithAnimation.tsx";
import HeaderMobile from "./components/header/mobile/HeaderMobile.tsx";
import HeaderDesktop from "./components/header/desktop/HeaderDesktop.tsx";
import FooterMobile from "./components/footer/mobile/FooterMobile.tsx";
import FooterDesktop from "./components/footer/desktop/FooterDesktop.tsx";

function App() {

  return (
    <div className="frame">
      <div className="site-container">
        <BrowserRouter>
          <HeaderMobile />
          <HeaderDesktop />
          <RoutesWithAnimation />
          <FooterMobile />
          <FooterDesktop />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
