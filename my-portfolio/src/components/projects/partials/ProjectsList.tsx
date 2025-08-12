import { type ReactElement } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import style from "./ProjectsList.module.css";
import { SvgIconProvider } from "../../svg-icon-provider/svg-icon-provider.tsx";
import { useFilterProjectsStore } from "../../../store/filterProjectsStore.tsx";
import { filterProjectsContainerVariants, filterProjectsVariants } from "../../../animations/filterProjects.tsx";

const ProjectsList = (): ReactElement => {

    const { projectsState } = useFilterProjectsStore();
    // Filter visible projects first so AnimatePresence can track removals
    const visibleProjects = projectsState.filter((project) => project.show);

    return (
        <>
            <motion.section
                className={style["projects"]}
                key="projects-section"
                variants={filterProjectsContainerVariants}
                initial="initial"
                animate="final"
                exit="exit"
            >
                <AnimatePresence mode="sync">
                    {visibleProjects.map(({ key, title, img, icon, desc, link }, idx, arr) => (
                        <motion.div
                            key={key}
                            className={style["project"]}
                            variants={filterProjectsVariants}
                            custom={{ index: idx, total: arr.length }}
                            initial="initial"
                            animate="final"
                            exit="exit"
                            layout
                        >
                            <h3><span className={style["highlight"]}>{title[0]}</span> {title[1]}</h3>
                            <div className={style["project-card"]}>
                                <div className={style["top-row"]}>
                                    <div className={style["img-wrapper"]}>
                                        <img src={img} alt={title[1]} />
                                        <div className={style["badge"]}>
                                            <SvgIconProvider iconName={icon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={style["bottom-row"]}>
                                    <p>{desc}</p>
                                    <Link to={link} target="new_blank">
                                        <input className={style["button"]} type="button" value="view-project" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.section>
        </>
    )
};

export {
    ProjectsList
}