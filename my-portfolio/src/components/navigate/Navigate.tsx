import { useContext, type JSX } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import style from "./navigate.module.css";

import { navigateVariants } from "../../animations/navigate.tsx";
import { MenuStateContext } from "../../context/ShowStateContext.tsx";

const Navigate = (): boolean | JSX.Element => {
    const { setMenuState } = useContext(MenuStateContext);
    const navigate = useNavigate();

    const onClose = (): void => {
        setMenuState('closed');
        navigate(-1);
    };

    return (
        <motion.nav
            variants={navigateVariants}
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
                    <Link to="/">_hello</Link>
                </li>
                <li className={`${style["row"]} ${style['link']}`}>
                    <Link to="/about-me">_about-me</Link>
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