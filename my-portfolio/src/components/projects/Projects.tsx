import { useEffect, type ReactElement, useContext, type ChangeEvent } from "react";
import { motion } from "framer-motion";

import style from "./Projects.module.css";
import { otherPagesDesktopVariants, otherPagesMobileVariants } from "../../animations/otherPages.tsx";
import { ViewModeStateContext } from "../../context/ViewMode.tsx";
import { useNavLinkState } from "../../utils/useNavLinkState.tsx";
import { useFilterProjectsStore } from "../../store/filterProjectsStore.tsx";
// import { SvgIconProvider } from "../svg-icon-provider/svg-icon-provider.tsx";
// import { useProjectsSectionStore } from "../../store/projectsSectionStore.tsx";
import { ProjectsFilterCollapse } from "./filters/Filters-collapse.tsx";
import { ProjectsFilterExpand } from "./filters/Filters-expand.tsx";

const AnimatedProjects = () => {
    // console.log('Inital Render');
    const { viewModeState } = useContext(ViewModeStateContext);
    // const { sectionState, toggleSectionState } = useProjectsSectionStore();
    // const { currPath, prevPath } = useContext(LocationPathStateContext);
    // const isSamePath = currPath === prevPath;

    // console.log('----------------------------');
    // console.log(`locationPathName: ${location.pathname}`);
    // console.log(`prev: ${prevPath}`);
    // console.log(`curr: ${currPath}`);
    // console.log(isSamePath);
    // console.log('----------------------------');

    if (viewModeState === 'mobile') {
        return (
            <motion.div className={style["animation-wrapper"]}
                variants={otherPagesMobileVariants}
                initial={"initial"}
                animate={"final"}
                exit={"exit"}
            >
                <Projects />
            </motion.div>
        );
    } else if (viewModeState === 'desktop') {
        return (
            <motion.div className={style["animation-wrapper"]}
                variants={otherPagesDesktopVariants}
                initial={"initial"}
                animate={"final"}
                exit={"exit"}
            >
                <Projects />
            </motion.div>
        );
    }
};

const Projects = (): ReactElement => {
    const { toggleActive } = useNavLinkState();
    // const { filterName, toggleCheckbox } = useFilterProjectsStore();
    const { filterState, toggleFilterState } = useFilterProjectsStore();

    // const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     // console.log(field);
    //     const target = e.target;
    //     const fName = target.getAttribute('name');
    //     console.log(fName);
    //     if (!fName) {
    //         return;
    //     }
    //     toggleCheckbox(fName);
    // };

    useEffect(() => {
        toggleActive(undefined, '_projects');
    }, []);

    return (
        <div className="projects">

            {/* <!-- Nav Title --> */}
            <h2 className="nav-title">_projects</h2>

            {/* <!-- Filter --> */}
            {filterState === 'collapse' && <ProjectsFilterCollapse />}
            {filterState === 'expand' && <ProjectsFilterExpand />}

            {/* <!-- Projects --> */}
            <section className="projects">
                {/* <!-- Project 1 --> */}
                <div className="project">
                    <h3><span className="highlight">Project 1</span> // _ui-animations</h3>
                    <div className="project-card">
                        <img src="project1.png" alt="UI Animations" />
                        <div className="badge">⚙️</div>
                        <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                        <button>view-project</button>
                    </div>
                </div>

                {/* <!-- Project 2 --> */}
                <div className="project">
                    <h3><span className="highlight">Project 2</span> // _tetris-game</h3>
                    <div className="project-card">
                        <img src="project2.png" alt="Tetris Game" />
                        <div className="badge">⚙️</div>
                        <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                        <button>view-project</button>
                    </div>
                </div>

                {/* <!-- Project 3 --> */}
                <div className="project">
                    <h3><span className="highlight">Project 3</span> // _nimbus</h3>
                    <div className="project-card">
                        <img src="project3.png" alt="Nimbus Project" />
                        <div className="badge">🔻</div>
                        <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                        <button>view-project</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export {
    AnimatedProjects
}