import { useContext, type JSX } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import style from "./Home.module.css";
import { otherPagesMobileVariants, otherPagesDesktopVariants } from "../../animations/otherPages.tsx";
import { ViewModeStateContext } from "../../context/ViewMode.tsx";

const AnimatedHome = () => {
    const { viewModeState } = useContext(ViewModeStateContext);

    if (viewModeState === 'mobile') {
        return (
            <motion.div className={style["animation-wrapper"]}
                variants={otherPagesMobileVariants}
                initial="initial"
                animate="final"
                exit="exit"
            >
                <Home />
            </motion.div>
        );
    } else if (viewModeState === 'desktop') {
        return (
            <motion.div className={style["animation-wrapper"]}
                variants={otherPagesDesktopVariants}
                initial="initial"
                animate="final"
                exit="exit"
            >
                <Home />
            </motion.div>
        );
    }
};

const Home = (): JSX.Element => {
    return (
        <main className={style["content"]}>
            <div className={style["left-wrapper"]}>
                <section className={`${style["row"]} ${style["bio"]}`}>
                    <h2 className={style["intro"]}>Hello, I&#39;m</h2>
                    <h1 className={style["name"]}>Jivko</h1>
                    <ul className={style["row-wrapper"]}>
                        <li className={style["col"]}><span>&gt;</span></li>
                        <ul className={style["col"]}>
                            <li className={style["tech-skill"]}><span className={style["gradient"]}>Web</span></li>
                            <li className={style["tech-skill"]}><span className={style["gradient"]}>Vanila JS</span></li>
                            <li className={style["tech-skill"]}><span className={style["gradient"]}>TypeScript</span></li>
                            <li className={style["tech-skill"]}><span className={style["gradient"]}>React JS</span></li>
                            <li className={style["tech-skill"]}><span className={style["gradient"]}>Angular</span></li>
                            <li className={style["tech-skill"]}><span className={style["gradient"]}>Node JS</span></li>
                            <li className={style["tech-skill"]}><span className={style["gradient"]}>Express</span></li>
                        </ul>
                        <li className={style["col"]}><span>developer</span></li>
                    </ul>
                </section>
                <section className={`${style["row"]} ${style["github"]}`}>
                    <p>&#47;&#47; find my profile on Github&#58;</p>
                    <p>
                        <span className="keyword">const</span>&#160;
                        <span className="variable">githubLink</span>&#160;
                        <span className="equal">&#61;</span>&#160;
                        <Link to="https://github.com/JivkoKarakashev" target="new_blank">
                            <span className="string">&#34;https&#58;&#47;&#47;github&#46;com&#47;JivkoKarakashev&#34;</span>
                        </Link>
                    </p>
                </section>
            </div>

            <section className={style["right-wrapper"]}>
                <div className={style["media"]}>
                    <img src="https://cdn-bucket.jivkokarakashev.work/file/jivko-portfolio/public/images/profile/avatar.webp" alt="profile picture" />
                </div>
            </section>
        </main>
    )
}

export default AnimatedHome