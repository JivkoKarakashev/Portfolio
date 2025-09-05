import type { ChangeEvent } from 'react';

import style from './Filters-expand.module.css';
import { useFilterProjectsStore } from '../../../store/filterProjectsStore.ts';
import { SvgIconProvider } from '../../svg-icon-provider/svg-icon-provider.tsx';

const ProjectsFilterExpand = () => {

    const { filterName, toggleCheckbox, toggleFilterState, setProjectsState } = useFilterProjectsStore();

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(field);
        const target = e.target;
        const fName = target.getAttribute('name');
        // console.log(fName);
        if (!fName) {
            return;
        }
        toggleCheckbox(fName);
        setProjectsState();
    };

    return (
        <>
            <section className={style["tech-filters"]}>
                <ul className={style["row-wrapper"]} onClick={toggleFilterState}>
                    <i className="fa-solid fa-caret-down" />
                    tech-stack-filter
                </ul>
                <ul className={style["column-wrapper"]}>
                    <li className={style['row']}>
                        <input id="all" name="all" type="checkbox" checked={filterName.all} onChange={(e) => onInputChange(e)} />
                        <label htmlFor="all" className={style['name']}>
                            <span className={`${style["checkbox-icon"]} ${style["all"]} ${filterName.all ? style["checked"] : style["unchecked"]}`}>All projects</span>
                        </label>
                    </li>
                    <li className={style['row']}>
                        <input id="react" name="react" type="checkbox" checked={filterName.react} onChange={(e) => onInputChange(e)} />
                        <label htmlFor="react" className={style['name']}>
                            <span className={`${style["checkbox-icon"]} ${filterName.react ? style["checked"] : style["unchecked"]}`} />
                            <SvgIconProvider iconName="react" textContent="React"></SvgIconProvider>
                        </label>
                    </li>
                    <li className={style['row']}>
                        <input id="angular" name="angular" type="checkbox" checked={filterName.angular} onChange={(e) => onInputChange(e)} />
                        <label htmlFor="angular" className={style['name']}>
                            <span className={`${style["checkbox-icon"]} ${filterName.angular ? style["checked"] : style["unchecked"]}`} />
                            <SvgIconProvider iconName="angular" textContent="Angular"></SvgIconProvider>
                        </label>
                    </li>
                    <li className={style['row']}>
                        <input id="expressjs" name="expressjs" type="checkbox" checked={filterName.expressjs} onChange={(e) => onInputChange(e)} />
                        <label htmlFor="expressjs" className={style['name']}>
                            <span className={`${style["checkbox-icon"]} ${filterName.expressjs ? style["checked"] : style["unchecked"]}`} />
                            <SvgIconProvider iconName="expressjs" textContent="Express"></SvgIconProvider>
                        </label>
                    </li>
                    <li className={style['row']}>
                        <input id="javascript" name="javascript" type="checkbox" checked={filterName.javascript} onChange={(e) => onInputChange(e)} />
                        <label htmlFor="javascript" className={style['name']}>
                            <span className={`${style["checkbox-icon"]} ${filterName.javascript ? style["checked"] : style["unchecked"]}`} />
                            <SvgIconProvider iconName="javascript" textContent="JavaScript"></SvgIconProvider>
                        </label>
                    </li>
                    <li className={style['row']}>
                        <input id="typescript" name="typescript" type="checkbox" checked={filterName.typescript} onChange={(e) => onInputChange(e)} />
                        <label htmlFor="typescript" className={style['name']}>
                            <span className={`${style["checkbox-icon"]} ${filterName.typescript ? style["checked"] : style["unchecked"]}`} />
                            <SvgIconProvider iconName="typescript" textContent="TypeScript"></SvgIconProvider>
                        </label>
                    </li>
                    <li className={style['row']}>
                        <input id="html" name="html" type="checkbox" checked={filterName.html} onChange={(e) => onInputChange(e)} />
                        <label htmlFor="html" className={style['name']}>
                            <span className={`${style["checkbox-icon"]} ${filterName.html ? style["checked"] : style["unchecked"]}`} />
                            <SvgIconProvider iconName="html" textContent="HTML"></SvgIconProvider>
                        </label>
                    </li>
                    <li className={style['row']}>
                        <input id="css" name="css" type="checkbox" checked={filterName.css} onChange={(e) => onInputChange(e)} />
                        <label htmlFor="css" className={style['name']}>
                            <span className={`${style["checkbox-icon"]} ${filterName.css ? style["checked"] : style["unchecked"]}`} />
                            <SvgIconProvider iconName="css" textContent="CSS"></SvgIconProvider>
                        </label>
                    </li>
                </ul>
            </section>
        </>
    );
};

export {
    ProjectsFilterExpand
}