import type { ReactElement } from "react";

import style from "./University.module.css";
import { Link } from "react-router-dom";

const University = (): ReactElement => {
    return (
        <section className={style["content"]}>
            <nav className={style["nav"]}>
                <ul>
                    <Link to="https://www.uni-svishtov.bg/en" target="new_blank">
                        <li className={style["link"]}>
                            <span className={style["link-icon"]}>Bachelor of Economics &#8212; D&#46; A&#46; Academy of Economics &#8210; Svishtov&#44; Bulgaria</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </section>
    );
};

export {
    University
}