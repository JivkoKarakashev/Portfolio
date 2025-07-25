import type { ReactElement } from "react";

import style from './Tech.module.css';

const Tech = (): ReactElement => {
    return (
        <section className={style["content"]}>
            <p>I love experimenting with new tools&#44; frameworks&#44; and libraries &#8212; especially in web development&#46;</p>
            <p>I enjoy digging into how things work and finding smarter ways to build&#46;</p>
        </section>
    );
};

export {
    Tech
}