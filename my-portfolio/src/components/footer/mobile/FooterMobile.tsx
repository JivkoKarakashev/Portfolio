import type { ReactElement } from "react";

import style from "./FooterMobile.module.css";
import { Link } from "react-router-dom";

const FooterMobile = (): ReactElement => {
    return (
        <footer className={style["mobile"]}>
            <section className={style["left-wrapper"]}>
                <p>find me in&#58;</p>
            </section>

            <nav className={style["right-wrapper"]}>
                <ul>
                    <li className={style["link"]}>
                        <Link to="https://x.com/JKarakashev" target="new_blank"><i className="fa-brands fa-x-twitter fa-xl"></i></Link>
                    </li>
                    <li className={style["link"]}>
                        <Link to="https://linkedin.com/in/jivko-karakashev-1811202b0" target="new_blank"><i className="fa-brands fa-linkedin-in fa-xl"></i></Link>
                    </li>
                    <li className={style["link"]}>
                        <Link to="https://github.com/JivkoKarakashev" target="new_blank"><i className="fa-brands fa-github fa-xl"></i></Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export {
    FooterMobile
} 