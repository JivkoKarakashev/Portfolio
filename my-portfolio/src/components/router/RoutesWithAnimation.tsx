import { Route, Routes, useLocation } from "react-router-dom";

// import Home from "../home/Home.tsx";
import Navigate from "../navigate/Navigate.tsx";
import { AnimatePresence } from "framer-motion";
import AnimatedHome from "../home/Home.tsx";
import AnimatedAboutMe from "../about-me/About-me.tsx";
import { Bio } from "../about-me/bio/Bio.tsx";
import { LocationPathStateContextProvider } from "../../context/LocationPath.tsx";
import { Interests } from "../about-me/interests/Interests.tsx";

const RoutesWithAnimation = () => {
    const location = useLocation();
    // console.log(location);
    const topLevelKey = '/'.concat(location.pathname.split('/')[1]);
    console.log(topLevelKey);

    return (
        <LocationPathStateContextProvider>
            <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={topLevelKey}>
                    <Route path="/" element={<AnimatedHome />} />
                    <Route path="/navigate" element={<Navigate />} />
                    <Route path="/about-me" element={<AnimatedAboutMe />}>
                        <Route path="bio" element={<Bio />} />
                        <Route path="interests" element={<Interests />} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </LocationPathStateContextProvider>
    );
};

export default RoutesWithAnimation;