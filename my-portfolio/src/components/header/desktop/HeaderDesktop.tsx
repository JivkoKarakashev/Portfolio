import { type ReactElement } from "react";
import { NavLink } from "react-router-dom";

import style from "./HeaderDesktop.module.css";

import { useTransitionStore } from "../../../store/pageTransitionStore.ts";

const HeaderDesktop = (): ReactElement => {

    const { displayLocation } = useTransitionStore();

    return (
        <header className={style["desktop"]}>
            <div className={style["left-wrapper"]}>
                <section className={style["logo"]}>
                    <NavLink to="/">jivko&#45;karakashev</NavLink>
                </section>
                <nav className={style["navbar"]}>
                    <ul>
                        <li className={displayLocation.endsWith('/') ? style['active'] : undefined}>
                            <NavLink to="/">&#95;hello</NavLink>
                        </li>
                        <li className={displayLocation.endsWith('/about-me') ? style['active'] : undefined}>
                            <NavLink to="/about-me">&#95;about&#45;me</NavLink>
                        </li>
                        <li className={displayLocation.endsWith('/projects') ? style['active'] : undefined}>
                            <NavLink to="/projects">&#95;projects</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={style["right-wrapper"]}>
                <nav className={style["navbar"]}>
                    <ul>
                        <li className={displayLocation.endsWith('/contact-me') ? style['active'] : undefined}>
                            <NavLink to="/contact-me">&#95;contact&#45;me</NavLink>
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