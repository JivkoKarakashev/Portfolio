import { useState, type ReactElement } from "react";

import style from "./about-me.module.css";
// import { Link } from "react-router-dom";

type sectionState = 'collapse' | 'expand';

const AboutMeMobile = (): ReactElement => {

    const [personalInfoState, setPersonalInfoState] = useState<sectionState>('collapse');

    const toggleSectionState = (section: string) => {
        console.log(section);
        switch (section) {
            case 'personal-info': {
                setPersonalInfoState(personalInfoState === 'collapse' ? 'expand' : 'collapse');
                break;
            }
        }
    };

    return (
        <nav className={style["nav"]}>
            <ul>
                <li className={style["about-me"]}>&#95;about&#8210;me</li>
                <li className={style["personal-info"]} onClick={toggleSectionState.bind(null,'personal-info')}>
                    {
                        personalInfoState === 'expand' &&
                        <>
                            <i className="fa-solid fa-caret-right"></i>
                            <ul>
                                <li className={`${style["row"]} ${style["bio"]}`}>
                                    <i className="fa-solid fa-folder"></i>
                                    <span>bio</span>
                                </li>
                                <li className={`${style["row"]} ${style["interests"]}`}>
                                    <i className="fa-solid fa-folder"></i>
                                    <span>interests</span>
                                </li>
                                <li>
                                    <ul>
                                        <li className="icon education">education
                                            <ul>
                                                <li className="icon school">high-school</li>
                                                <li className="icon school">university</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </>
                    }
                    {
                        personalInfoState === 'collapse' &&
                        <>
                            <i className="fa-solid fa-caret-down"></i>
                        </>
                    }
                    personal&#8210;info
                </li>

            </ul>
        </nav>
    );
};

export default AboutMeMobile