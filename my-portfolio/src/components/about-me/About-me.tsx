import { type ReactElement, useContext } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import style from "./About-me.module.css";
import { otherPagesDesktopVariants, otherPagesMobileVariants } from "../../animations/otherPages.tsx";
import { ViewModeStateContext } from "../../context/ViewMode.tsx";
import { AboutMeSectionsStateContext } from "../../context/AboutMeSections.tsx";
import { PersonalInfoExpand } from "./personal-info/personal-info-expand.tsx";
import { PersonalInfoCollapse } from "./personal-info/personal-info-collapse.tsx";
import { HobbiesExpand } from "./hobbies/Hobbies-expand.tsx";
import { HobbiesCollapse } from "./hobbies/Hobbies-collapse.tsx";

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
    const outlet = useOutlet();

    return (
        <nav className={`${style["nav"]} ${style["about-me"]}`}>
            <ul>
                <li className={`${style["about-me"]} ${style["nav-row"]}`}>&#95;about&#8210;me</li>
                <li className={`${style["personal-info"]} ${style["nav-row"]}`}>
                    {aboutMeSectionsState['personal-info'] === 'expand' && <PersonalInfoExpand />}
                    {aboutMeSectionsState['personal-info'] === 'collapse' && <PersonalInfoCollapse />}
                </li>
                <li className={`${style["hobbies"]} ${style["nav-row"]}`}>
                    {aboutMeSectionsState['hobbies'] === 'expand' && <HobbiesExpand />}
                    {aboutMeSectionsState['hobbies'] === 'collapse' && <HobbiesCollapse />}
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

                        {outlet}
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

                        {outlet}
                    </motion.div>}
            </AnimatePresence>
        </nav>
    );
};

export default AnimatedAboutMe