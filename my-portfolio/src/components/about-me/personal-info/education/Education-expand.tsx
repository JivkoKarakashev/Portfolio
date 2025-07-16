import { Link } from 'react-router-dom';

import type { SectionToggle } from '../personal-info-expand.tsx';
import style from './education-expand.module.css';

const EducationExpand = ({ onSectionToggle }: SectionToggle) => {

    return (
        <>
            <li className={`${style["row"]} ${style["education"]}`}>
                <ul className={style["row-wrapper"]} onClick={onSectionToggle}>
                    {/* <i className="fa-solid fa-angle-down"></i> */}
                    <span className={`${style["icon"]} ${style["angle-down"]}`}></span>
                    <span className={`${style["icon"]} ${style["folder"]}`}>education</span>
                </ul>
                <ul className={style["column-wrapper"]}>
                    <li className={style["school"]}>
                        <Link className={style["link"]} to="/about-me/education/software-engineering">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <span>education progress in the &#8220;Software Engineering&#8221; program &#x2011; SoftUni</span>
                        </Link>
                    </li>
                    <li className={style["school"]}>
                        <Link className={style["link"]} to="/about-me/education/university">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <span>university</span>
                        </Link>
                    </li>
                </ul>
            </li>
        </>
    );
};

export {
    EducationExpand
}