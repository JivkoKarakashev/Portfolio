import { type ReactElement, useContext } from "react";
import { NavLink } from "react-router-dom";

import style from "./HeaderDesktop.module.css";
import { DesktopNavLinksStatesContext } from "../../../context/DesktopNavLinks.tsx";
import { useNavLinkState } from "../../../utils/useNavLinkState.tsx";

const HeaderDesktop = (): ReactElement => {

    const { navLinksState } = useContext(DesktopNavLinksStatesContext);
    const { toggleActive } = useNavLinkState();

    return (
        <header className={style["desktop"]}>
            <div className={style["left-wrapper"]}>
                <section className={style["logo"]}>
                    <NavLink to="/" onClick={(e) => toggleActive(e)}>jivko&#45;karakashev</NavLink>
                </section>
                <nav className={style["navbar"]}>
                    <ul>
                        <li className={navLinksState._hello === 'active' ? style['active'] : undefined}>
                            <NavLink to="/" onClick={(e) => toggleActive(e)}>&#95;hello</NavLink>
                        </li>
                        <li className={navLinksState['_about-me'] === 'active' ? style['active'] : undefined}>
                            <NavLink to="/about-me" onClick={(e) => toggleActive(e)}>&#95;about&#45;me</NavLink>
                        </li>
                        <li className={navLinksState['_projects'] === 'active' ? style['active'] : undefined}>
                            <NavLink to="javascript:void(0)" onClick={(e) => toggleActive(e)}>&#95;projects</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={style["right-wrapper"]}>
                <nav className={style["navbar"]}>
                    <ul>
                        <li className={navLinksState['_contact-me'] === 'active' ? style['active'] : undefined}>
                            <NavLink to="/contact-me" onClick={(e) => toggleActive(e)}>&#95;contact&#45;me</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export {
    HeaderDesktop
}