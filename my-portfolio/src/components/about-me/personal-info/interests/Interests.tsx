import type { ReactElement } from "react";

import style from "./Interests.module.css";

const Interests = (): ReactElement => {
    return (
        <section className={style["content"]}>
            <p>
                I&#39;m a web developer with a strong focus on the front end&#46; I love working with Angular&#44; React&#44; and vanilla JavaScript to build clean&#44; responsive UIs&#46; While front&#45;end work is my sweet spot&#44; I&#39;m also comfortable on the back end with Node.js&#44; Express&#44; MongoDB&#44; Mongoose&#44; Handlebars&#44; and JWT&#46;
            </p>
            <p>
                I have experience with Firebase Console &#47;BaaS platform developed by Google&#47; and Google Cloud Console&#46;
            </p>
            <p>
                I have a background in deploying the front&#45;end part of the application via Firebase Hosting&#44; as well as deploying back&#45;end services &#47;IIFE &#8212; Immediately Invoked Function Expression&#47; via Firebase Functions&#46;
            </p>
            <p>
                I also possess setting up and managing custom domains and static file buckets to serve the web application&#46;
            </p>
            <p>
                I enjoy taking projects from scratch to production and always look for better ways to build and ship web apps&#46;
            </p>
        </section>
    );
};

export {
    Interests
}