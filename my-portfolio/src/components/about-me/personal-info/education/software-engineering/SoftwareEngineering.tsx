import type { ReactElement } from "react";
import { Link } from "react-router-dom";

import style from "./SoftwareEngineering.module.css";

const SoftwareEngineering = (): ReactElement => {
    return (
        <section className={style["content"]}>
            <nav className={style["nav"]}>
                <ul>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Programming-Basics-November-2022" target="new_blank">
                        <li className={style["link"]}>
                            <span className={style["link-icon"]}>Programming Basics with JavaScript</span>
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Programming-Fundamentals-January-2023" target="new_blank">
                        <li className={style["link"]}>
                            <span className={style["link-icon"]}>Programming Fundamentals with Javascript</span>
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Javascript-Advanced-May-2023" target="new_blank">
                        <li className={style["link"]}>
                            <span className={style["link-icon"]}>Javascript Advanced</span>
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Javascript-Applications-June-2023" target="new_blank">
                        <li className={style["link"]}>
                            <span className={style["link-icon"]}>Javascript Applications</span>
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Javascript-Back-End-September-2023" target="new_blank">
                        <li className={style["link"]}>
                            <span className={style["link-icon"]}>Javascript Back&#8209;End September</span>
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/React-JS-October-2023" target="new_blank">
                        <li className={style["link"]}>
                            <span className={style["link-icon"]}>React JS</span>
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/HTML-%26-CSS-January-2024" target="new_blank">
                        <li className={style["link"]}>
                            <span className={style["link-icon"]}>HTML &#38; CSS</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </section>
    );
};

export {
    SoftwareEngineering
}