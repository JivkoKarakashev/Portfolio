import { type ReactElement, useContext } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import style from "./Contact-me.module.css";
import { otherPagesDesktopVariants, otherPagesMobileVariants } from "../../animations/otherPages.tsx";
import { ViewModeStateContext } from "../../context/ViewMode.tsx";
import { ContactMeSectionsStateContext } from "../../context/ContactMeSections.tsx";
import { ContactsExpand } from "./contacts/Contacts-expand.tsx";
import { ContactsCollapse } from "./contacts/Contacts-collapse.tsx";
import { FindMeAlsoInExpand } from "./find-me-also-in/Find-me-also-in-expand.tsx";
import { FindMeAlsoInCollapse } from "./find-me-also-in/Find-me-also-in-collapse.tsx";

// import { LocationPathStateContext } from "../../context/LocationPath.tsx";
// import { Link } from "react-router-dom";

const AnimatedContactMe = () => {
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
                <ContactMe />
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
                <ContactMe />
            </motion.div>
        );
    }
};

const ContactMe = (): ReactElement => {

    const { contactMeSectionsState } = useContext(ContactMeSectionsStateContext);
    const { viewModeState } = useContext(ViewModeStateContext);
    const location = useLocation();
    const outlet = useOutlet();

    return (
        <nav className={`${style["nav"]} ${style["contact-me"]}`}>
            <ul>
                <li className={`${style["contact-me"]} ${style["nav-row"]}`}>&#95;contact&#8210;me</li>
                <li className={`${style["contacts"]} ${style["nav-row"]}`}>
                    {contactMeSectionsState.contacts === 'expand' && <ContactsExpand />}
                    {contactMeSectionsState.contacts === 'collapse' && <ContactsCollapse />}
                </li>
                <li className={`${style["find-me-also-in"]} ${style["nav-row"]}`}>
                    {contactMeSectionsState['find-me-also-in'] === 'expand' && <FindMeAlsoInExpand />}
                    {contactMeSectionsState['find-me-also-in'] === 'collapse' && <FindMeAlsoInCollapse />}
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

export default AnimatedContactMe