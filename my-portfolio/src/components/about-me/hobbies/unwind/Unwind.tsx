import type { ReactElement } from "react";

import style from './Unwind.module.css';

const Unwind = (): ReactElement => {
    return (
        <section className={style["content"]}>
            <p>Going for walks or bike rides is my way of clearing my mind&#44; staying active&#44; and sometimes coming up with solutions to coding problems when I least expect it&#46;</p>
        </section>
    );
};

export {
    Unwind
}