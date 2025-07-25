import type { ReactElement } from "react";

import style from './Lifehacks.module.css';

const Lifehacks = (): ReactElement => {
    return (
        <section className={style["content"]}>
            <p>I&#39;m passionate about reading science and tech articles that offer fresh insights or practical advices&#46;</p>
            <p>I&#39;m always on the lookout for ideas that can simplify everyday tasks or inspire new projects&#46;</p>
        </section>
    );
};

export {
    Lifehacks
}