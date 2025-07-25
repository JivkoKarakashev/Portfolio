import type { ReactElement } from "react";

import style from './Conversations.module.css';

const Conversations = (): ReactElement => {
    return (
        <section className={style["content"]}>
            <p>I enjoy spending time with friendly people and having conversations about anything from philosophy and psychology to tech and daily life&#46;</p>
            <p>A good chat in good company is always time well spent&#46;</p>
        </section>
    );
};

export {
    Conversations
}