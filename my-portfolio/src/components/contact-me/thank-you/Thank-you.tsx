import type { ReactElement } from "react";

import style from './Thank-you.module.css';

const ThankYou = (): ReactElement => {
    return (
        <section className={style["content"]}>
            <h1>Thank You!!</h1>
        </section>
    );
};

export {
    ThankYou
}