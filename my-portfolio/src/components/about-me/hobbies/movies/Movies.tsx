import type { ReactElement } from "react";

import style from './Movies.module.css';

const Movies = (): ReactElement => {
    return (
        <section className={style["content"]}>
            <p>Sci&#45;fi movies spark my imagination and fuel my interest in future tech&#46;</p>
            <p>I enjoy stories that explore big ideas &#8212; from AI and space to alternate realities&#46;</p>
        </section>
    );
};

export {
    Movies
}