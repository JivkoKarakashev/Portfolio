import { useState, type ReactElement } from "react";
import { NavLink } from "react-router-dom";

import style from "./HeaderDesktop.module.css";

type LinkState = 'active' | 'inactive';

interface NavigationLinksState {
    [key: string]: LinkState
}

const navLinksInitState: NavigationLinksState = {
    _hello: 'active',
    ['_about-me']: "inactive",
    _projects: "inactive",
    ['_contact-me']: "inactive"
};


const HeaderDesktop = (): ReactElement => {

    const [navLinksState, setNavLinksState] = useState({ ...navLinksInitState });

    const toggleActive = (e: React.MouseEvent) => {
        console.log(e.currentTarget.textContent);
        const activetedLink = e.currentTarget.textContent || '';
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

        console.log(currState);

        setNavLinksState((state) => ({
            ...state,
            ...currState
        }));
    };

    return (
        <header className={style["desktop"]}>
            <div className={style["left-wrapper"]}>
                <section className={style["logo"]}>
                    <NavLink to="/">jivko-karakashev</NavLink>
                </section>
                <nav className={style["navbar"]}>
                    <ul>
                        <li className={navLinksState._hello === 'active' ? style['active'] : undefined}>
                            <NavLink to="/" onClick={(e) => toggleActive(e)}>_hello</NavLink>
                        </li>
                        <li className={navLinksState['_about-me'] === 'active' ? style['active'] : undefined}>
                            <NavLink to="/about-me" onClick={(e) => toggleActive(e)}>_about-me</NavLink>
                        </li>
                        <li className={navLinksState['_projects'] === 'active' ? style['active'] : undefined}>
                            <NavLink to="javascript:void(0)" onClick={(e) => toggleActive(e)}>_projects</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={style["right-wrapper"]}>
                <nav className={style["navbar"]}>
                    <ul>
                        <li className={navLinksState['_contact-me'] === 'active' ? style['active'] : undefined}>
                            <NavLink to="javascript:void(0)" onClick={(e) => toggleActive(e)}>_contact-me</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderDesktop