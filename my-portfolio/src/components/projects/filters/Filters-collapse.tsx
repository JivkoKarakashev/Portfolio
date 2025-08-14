import { useFilterProjectsStore } from "../../../store/filterProjectsStore.ts";
import style from "./Filters-collapse.module.css";

const ProjectsFilterCollapse = () => {

    const { toggleFilterState } = useFilterProjectsStore();

    return (
        <>
            <section className={style["tech-filters"]}>
                <ul className={style["row-wrapper"]} onClick={toggleFilterState}>
                    <i className="fa-solid fa-caret-right" />
                    tech-stack-filter
                </ul>
            </section>
        </>
    );
};

export {
    ProjectsFilterCollapse
}