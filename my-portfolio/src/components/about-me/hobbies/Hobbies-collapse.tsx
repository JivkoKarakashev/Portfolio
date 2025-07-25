import { useContext } from "react";

import style from './hobbies-collapse.module.css';
import { AboutMeSectionsStateContext } from "../../../context/AboutMeSections";

const HobbiesCollapse = () => {

    const { toggleSectionState } = useContext(AboutMeSectionsStateContext);

    return (
        <>
            <ul className={style["row-wrapper"]} onClick={() => toggleSectionState('hobbies')}>
                <i className="fa-solid fa-caret-right"></i>
                hobbies
            </ul>
        </>
    );
};

export {
    HobbiesCollapse
}