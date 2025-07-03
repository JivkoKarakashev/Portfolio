import { Route, Routes, useLocation } from "react-router-dom";

import Home from "../home/Home.tsx";
import Navigate from "../navigate/Navigate.tsx";
import { AnimatePresence } from "framer-motion";
import AboutMeMobile from "../about-me/mobile/about-me.tsx";

const RoutesWithAnimation = () => {
    const location = useLocation();
    // console.log(location);

    return (
        // <>
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.key}>
                <Route path="/" element={<Home />} />
                <Route path="/navigate" element={<Navigate />} />
                <Route path="/about-me" element={<AboutMeMobile />} />
            </Routes>
        </AnimatePresence>
        // </>
    );
};

export default RoutesWithAnimation;