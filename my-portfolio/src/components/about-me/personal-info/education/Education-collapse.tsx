import type { SectionToggle } from '../personal-info-expand.tsx';
import style from './education-collapse.module.css';

const EducationCollapse = ({ onSectionToggle }: SectionToggle) => {

    return (
        <>
            <li className={`${style["row"]} ${style["education"]}`} onClick={onSectionToggle}>
                {/* <i className="fa-solid fa-angle-right"></i> */}
                <span className={`${style["icon"]} ${style["angle-right"]}`}></span>
                <span className={`${style["icon"]} ${style["folder"]}`}>education</span>
            </li>
        </>
    );
};

export {
    EducationCollapse
}