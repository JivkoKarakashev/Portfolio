import type { ReactElement } from "react";

import style from "./Bio.module.css";

const Bio = (): ReactElement => {

    return (
        <section className={style["content"]}>
            <p>
                Hi, I&#8242;m Jivko &#8212; a former accountant turned front&#8211;end developer. Since 2022, I&#8242;ve been diving into JavaScript, building single page applications for personal projects like ecommerce app. I&#8242;m also exploring full-stack development and cloud tools like container services. Always curious, always learning, and excited to take on new challenges.
            </p>
        </section>
    );
};

export {
    Bio
}