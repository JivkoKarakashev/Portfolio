import { type ReactElement, useContext } from "react";
import { useOutlet } from "react-router-dom";

import style from "./About-me.module.css";

import { AboutMeSectionsStateContext } from "../../context/AboutMeSections.tsx";
import { PersonalInfoExpand } from "./personal-info/personal-info-expand.tsx";
import { PersonalInfoCollapse } from "./personal-info/personal-info-collapse.tsx";
import { HobbiesExpand } from "./hobbies/Hobbies-expand.tsx";
import { HobbiesCollapse } from "./hobbies/Hobbies-collapse.tsx";

const AboutMe = (): ReactElement => {

    const { aboutMeSectionsState } = useContext(AboutMeSectionsStateContext);
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
            {outlet}
        </nav>
    );
};

export default AboutMe;