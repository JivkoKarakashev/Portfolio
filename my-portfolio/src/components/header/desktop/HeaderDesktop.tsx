import { type ReactElement, useContext } from "react";
import { NavLink } from "react-router-dom";

import style from "./HeaderDesktop.module.css";
import { DesktopNavLinksStatesContext } from "../../../context/DesktopNavLinks.tsx";

const HeaderDesktop = (): ReactElement => {

    const { navLinksState, setNavLinksState } = useContext(DesktopNavLinksStatesContext);

    const toggleActive = (e: React.MouseEvent) => {
        // console.log(e.currentTarget.textContent);
        const activetedLink = e.currentTarget.textContent || '';
        // if (navLinksState[activetedLink] === 'active') {
        //     console.log(navLinksState[activetedLink]);
        //     return;
        // }
        // console.log('NOT HERE');
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

    return (
        <header className={style["desktop"]}>
            <div className={style["left-wrapper"]}>
                <section className={style["logo"]}>
                    <NavLink to="/">jivko-karakashev</NavLink>
                </section>
                <nav className={style["navbar"]}>
                    <ul>
                        <li className={navLinksState._hello === 'active' ? style['active'] : undefined}>
                            <NavLink to="/" onClick={(e) => toggleActive(e)}>&#95;hello</NavLink>
                        </li>
                        <li className={navLinksState['_about-me'] === 'active' ? style['active'] : undefined}>
                            <NavLink to="/about-me" onClick={(e) => toggleActive(e)}>&#95;about-me</NavLink>
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
                            <NavLink to="javascript:void(0)" onClick={(e) => toggleActive(e)}>&#95;contact-me</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderDesktop