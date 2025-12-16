import { type ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";

import style from "./Projects.module.css";

import { useFilterProjectsStore } from "../../store/filterProjectsStore.ts";
import { ProjectsFilterCollapse } from "./filters/Filters-collapse.tsx";
import { ProjectsFilterExpand } from "./filters/Filters-expand.tsx";
import { ProjectsList } from "./partials/ProjectsList.tsx";
import { filterDropdownMenuVariants } from "../../animations/dropdownMenu.ts";

const Projects = (): ReactElement => {
    const { filterState } = useFilterProjectsStore();

    return (
        <div className={style["projects"]}>
            {/* <!-- Nav Title --> */}
            <span className={style["nav-title"]}>_projects</span>
            {/* <!-- Filter --> */}
            <AnimatePresence initial={false} mode="wait">
                {filterState === 'collapse' && (
                    <motion.div
                        key="collapse"
                        variants={filterDropdownMenuVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        layout
                    >
                        <ProjectsFilterCollapse />
                    </motion.div>)}
                {filterState === 'expand' && (
                    <motion.div
                        key="expand"
                        variants={filterDropdownMenuVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        layout
                    >

                        <ProjectsFilterExpand />
                    </motion.div>
                )}
            </AnimatePresence>
            {/* <!-- Projects --> */}
            <ProjectsList />
        </div>
    );
};

export {
    Projects
}