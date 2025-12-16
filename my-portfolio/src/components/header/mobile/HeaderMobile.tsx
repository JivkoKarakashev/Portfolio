import { type ReactElement, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import style from "./HeaderMobile.module.css";

import { MobileNavMenuStatesContext } from "../../../context/MobileNavMenu.tsx";

const HeaderMobile = (): ReactElement => {

    const { menuState, setMenuState } = useContext(MobileNavMenuStatesContext);
    const navigate = useNavigate();

    const toggleMenu = (): void => {
        setMenuState(menuState === 'closed' ? 'open' : 'closed');
        if (menuState === 'closed') {
            navigate('/navigate')
        } else {
            navigate(-1);
        }
    };

    return (
        <header className={style["mobile"]}>
            <NavLink to='/'>
                <span className={`${style["logo"]} ${style["link"]}`}>jivko&#45;karakashev</span>
            </NavLink>
            <div className={style["menu-icon"]} onClick={toggleMenu}>
                <i className={`fa-solid fa-bars fa-xl ${style["link"]}`}></i>
            </div>
        </header>
    );
};

export {
    HeaderMobile
} 