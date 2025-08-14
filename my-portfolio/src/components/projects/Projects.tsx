import { useEffect, type ReactElement, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import style from "./Projects.module.css";
import { otherPagesDesktopVariants, otherPagesMobileVariants } from "../../animations/otherPages.tsx";
import { ViewModeStateContext } from "../../context/ViewMode.tsx";
import { useNavLinkState } from "../../custom-hooks/useNavLinkState.tsx";
import { useFilterProjectsStore } from "../../store/filterProjectsStore.ts";
import { ProjectsFilterCollapse } from "./filters/Filters-collapse.tsx";
import { ProjectsFilterExpand } from "./filters/Filters-expand.tsx";
import { ProjectsList } from "./partials/ProjectsList.tsx";
import { filterDropdownMenuVariants } from "../../animations/dropdownMenu.tsx";

const AnimatedProjects = () => {
    // console.log('Inital Render');
    const { viewModeState } = useContext(ViewModeStateContext);
    // console.log('----------------------------');
    // console.log(`locationPathName: ${location.pathname}`);
    // console.log(`prev: ${prevPath}`);
    // console.log(`curr: ${currPath}`);
    // console.log(isSamePath);
    // console.log('----------------------------');

    if (viewModeState === 'mobile') {
        return (
            <motion.div
                className="animation-wrapper"
                variants={otherPagesMobileVariants}
                initial={"initial"}
                animate={"final"}
                exit={"exit"}
                layout
            >
                <Projects />
            </motion.div>
        );
    } else if (viewModeState === 'desktop') {
        return (
            <motion.div
                className="animation-wrapper"
                variants={otherPagesDesktopVariants}
                initial={"initial"}
                animate={"final"}
                exit={"exit"}
                layout
            >
                <Projects />
            </motion.div>
        );
    }
};

const Projects = (): ReactElement => {
    const { toggleActive } = useNavLinkState();
    const { filterState } = useFilterProjectsStore();

    useEffect(() => {
        toggleActive(undefined, '_projects');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
    AnimatedProjects
}