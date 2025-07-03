import { type ReactElement, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { MenuStateContext } from "../../../context/ShowStateContext.tsx";
import style from "./HeaderMobile.module.css";

const HeaderMobile = (): ReactElement => {

    const { menuState, setMenuState } = useContext(MenuStateContext);
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
                <span className={`${style["logo"]} ${style["link"]}`}>jivko-karakashev</span>
            </NavLink>
            <div className={style["menu-icon"]} onClick={toggleMenu}>
                <i className={`fa-solid fa-bars fa-xl ${style["link"]}`}></i>
            </div>
        </header>
    );
};

export default HeaderMobile