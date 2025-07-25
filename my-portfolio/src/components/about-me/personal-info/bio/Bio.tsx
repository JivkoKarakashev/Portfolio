import type { ReactElement } from "react";

import style from "./Bio.module.css";

const Bio = (): ReactElement => {

    return (
        <section className={style["content"]}>
            <p>
                Hi&#44; I&#8242;m Jivko &#8212; a former accountant turned web developer&#46; Since 2022&#44; I&#8242;ve been diving into JavaScript&#44; building single page applications for personal projects like ecommerce app&#46; I&#8242;m also exploring full&#45;stack development and cloud tools like container services&#46; Always curious&#44; always learning&#44; and excited to take on new challenges&#46;
            </p>
        </section>
    );
};

export {
    Bio
}