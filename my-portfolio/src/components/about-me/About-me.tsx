import { type ReactElement, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import style from "./About-me.module.css";
import { otherPagesDesktopVariants, otherPagesMobileVariants } from "../../animations/otherPages.tsx";
import { ViewModeStateContext } from "../../context/ViewMode.tsx";
import { AboutMeSectionsStateContext } from "../../context/AboutMeSections.tsx";
import { PersonalInfoExpand } from "./partials/personal-info/personal-info-expand.tsx";
import { PersonalInfoCollapse } from "./partials/personal-info/personal-info-collapse.tsx";
import { Outlet, useLocation } from "react-router-dom";

// import { LocationPathStateContext } from "../../context/LocationPath.tsx";
// import { Link } from "react-router-dom";

const AnimatedAboutMe = () => {
    console.log('Inital Render');
    const { viewModeState } = useContext(ViewModeStateContext);
    // const { currPath, prevPath } = useContext(LocationPathStateContext);
    // const isSamePath = currPath === prevPath;

    // console.log('----------------------------');
    // console.log(`locationPathName: ${location.pathname}`);
    // console.log(`prev: ${prevPath}`);
    // console.log(`curr: ${currPath}`);
    // console.log(isSamePath);
    // console.log('----------------------------');

    if (viewModeState === 'mobile') {
        return (
            <motion.div className={style["animation-wrapper"]}
                variants={otherPagesMobileVariants}
                initial={"initial"}
                animate={"final"}
                exit={"exit"}
            >
                <AboutMe />
            </motion.div>
        );
    } else if (viewModeState === 'desktop') {
        return (
            <motion.div className={style["animation-wrapper"]}
                variants={otherPagesDesktopVariants}
                initial={"initial"}
                animate={"final"}
                exit={"exit"}
            >
                <AboutMe />
            </motion.div>
        );
    }
};

const AboutMe = (): ReactElement => {

    const { aboutMeSectionsState } = useContext(AboutMeSectionsStateContext);
    const { viewModeState } = useContext(ViewModeStateContext);
    const location = useLocation();

    return (
        <nav className={`${style["nav"]} ${style["about-me"]}`}>
            <ul>
                <li className={`${style["about-me"]} ${style["nav-row"]}`}>&#95;about&#8210;me</li>
                <li className={`${style["personal-info"]} ${style["nav-row"]}`}>
                    {
                        aboutMeSectionsState['personal-info'] === 'expand' && <PersonalInfoExpand />
                    }
                    {
                        aboutMeSectionsState['personal-info'] === 'collapse' && <PersonalInfoCollapse />
                    }
                </li>

            </ul>
            <AnimatePresence mode="wait">
                {
                    viewModeState === 'mobile' &&
                    <motion.div
                        key={location.pathname}
                        variants={otherPagesMobileVariants}
                        initial={'initial'}
                        animate={'final'}
                        exit={'exit'}
                    >

                        <Outlet />
                    </motion.div>
                }
                {
                    viewModeState === 'desktop' &&
                    <motion.div
                        key={location.pathname}
                        variants={otherPagesDesktopVariants}
                        initial={'initial'}
                        animate={'final'}
                        exit={'exit'}
                    >

                        <Outlet />
                    </motion.div>}
            </AnimatePresence>
        </nav>
    );
};

export default AnimatedAboutMe