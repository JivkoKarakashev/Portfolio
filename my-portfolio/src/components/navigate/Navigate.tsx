import { useContext, type JSX } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import style from "./navigate.module.css";

import { navigatePageVariants } from "../../animations/navigatePage.tsx";
import { MobileNavMenuStatesContext } from "../../context/MobileNavMenu.tsx";
import { DesktopNavLinksStatesContext } from "../../context/DesktopNavLinks.tsx";
// import { AppStatesContext } from "../../context/AppStatesContext.tsx";

const Navigate = (): boolean | JSX.Element => {
    const { setMenuState } = useContext(MobileNavMenuStatesContext);
    const {navLinksState, setNavLinksState  } = useContext(DesktopNavLinksStatesContext);
    const navigate = useNavigate();

    const onClose = (): void => {
        setMenuState('closed');
        navigate(-1);
    };

    const toggleActive = (activetedLink: string) => {
        // console.log(e.currentTarget.textContent);
        const currState = { ...navLinksState };
        for (const key in currState) {
            // console.log(`KEY: ${key}`);
            // console.log(`ActivatedLink: ${activetedLink}`);
            if (key === activetedLink) {
                currState[key] = 'active';
            } else {
                currState[key] = 'inactive';
            }
        }

        // console.log(currState);

        setNavLinksState((state) => ({
            ...state,
            ...currState
        }));
    };

    const onNavigate = (e: React.MouseEvent) => {
        const activetedLink = e.currentTarget.textContent || '';
        console.log(activetedLink);
        setMenuState('closed');
        toggleActive(activetedLink);
        switch (activetedLink) {
            case '_about-me': {
                navigate('/about-me');
                break;
            }
            case '_hello': {
                navigate('/');
                break;
            }
        }
    };

    return (
        <motion.nav
            variants={navigatePageVariants}
            initial="initial"
            animate="final"
            exit="exit"
            className={style["navbar"]}>
            <ul>
                <li className={`${style["row"]} ${style["logo-wrapper"]}`}>
                    <ul>
                        <li className={style["logo"]}>
                            <Link to="/">jivko-karakashev</Link>
                        </li>
                        <li className={style["close-button"]}>
                            <i className="fa-regular fa-circle-xmark fa-2xl" onClick={onClose}></i>
                        </li>
                    </ul>
                </li>
                <li className={style["heading"]}><i className="fa-solid fa-hashtag"></i> navigate&#58;</li>
                <li className={`${style["row"]} ${style['link']}`}>
                    {/* <Link to="/">_hello</Link> */}
                    <span onClick={onNavigate}>_hello</span>
                </li>
                <li className={`${style["row"]} ${style['link']}`}>
                    {/* <Link to="/about-me">_about-me</Link> */}
                    <span onClick={onNavigate}>_about-me</span>
                </li>
                <li className={`${style["row"]} ${style['link']}`}>
                    <Link to="javascript:void(0)">_projects</Link>
                </li>
                <li className={`${style["row"]} ${style['link']}`}>
                    <Link to="javascript:void(0)">_contact-me</Link>
                </li>
            </ul>
        </motion.nav>
    );
};

export default Navigate