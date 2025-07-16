import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './personal-info-expand.module.css';
import { AboutMeSectionsStateContext, type sectionState } from '../../../context/AboutMeSections.tsx';
import { EducationExpand } from './education/Education-expand.tsx';
import { EducationCollapse } from './education/Education-collapse.tsx';

interface SectionToggle {
    onSectionToggle: () => void
}


const PersonalInfoExpand = () => {

    const { toggleSectionState } = useContext(AboutMeSectionsStateContext);
    const [educationSectionState, setEducationSectionState] = useState<sectionState>('collapse');
    const onEducationSectionToggle = (): void => {
        if (educationSectionState === 'collapse') {
            setEducationSectionState('expand');
        } else {
            setEducationSectionState('collapse');
        }
    };

    return (
        <>
            <ul className={style["row-wrapper"]} onClick={() => toggleSectionState('personal-info')}>
                <i className="fa-solid fa-caret-down"></i>
                <span>personal&#8210;info</span>
            </ul>
            <ul className={style["column-wrapper"]}>
                <li className={`${style["row"]} ${style["bio"]}`}>
                    <Link className={style['link']} to="/about-me/bio">
                        {/* <i className="fa-solid fa-folder"></i> */}
                        <span className={`${style["folder"]} ${style["bio"]}`}>bio</span>
                    </Link>
                </li>
                <li className={`${style["row"]} ${style["interests"]}`}>
                    <Link className={style["link"]} to="/about-me/interests">
                        {/* <i className="fa-solid fa-folder"></i> */}
                        <span className={`${style["folder"]} ${style["interests"]}`}>interests</span>
                    </Link>
                </li>
                {educationSectionState === 'expand' && <EducationExpand onSectionToggle={onEducationSectionToggle} />}
                {educationSectionState === 'collapse' && <EducationCollapse onSectionToggle={onEducationSectionToggle} />}
            </ul>
        </>
    );
};

export {
    type SectionToggle,
    PersonalInfoExpand
}