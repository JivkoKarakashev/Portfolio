import type { ReactElement } from "react";

import style from "./Interests.module.css";

const Interests = ():ReactElement => {
    return (
        <section className={style["content"]}>
            <p>
                I&#39;m a full stack web developer with a strong focus on the front end. I love working with Angular, React, and vanilla JavaScript to build clean, responsive UIs. While front-end work is my sweet spot, I&#39;m also comfortable on the back end with Node.js, Express, MongoDB, Mongoose, Handlebars, and JWT.
            </p>
            <p>
                I&#39;ve worked with Firebase and Google Cloud Console for hosting, deploying functions, setting up custom domains, and managing file buckets for static content. I enjoy taking projects from scratch to production and always look for better ways to build and ship web apps.
            </p>
        </section>
    );
};

export {
    Interests
}