import { useContext } from "react";

import style from "./personal-info-collapse.module.css";
import { AboutMeSectionsStateContext } from "../../../context/AboutMeSections.tsx";

const PersonalInfoCollapse = () => {

    const { toggleSectionState } = useContext(AboutMeSectionsStateContext);

    return (
        <>
            <ul className={style["row-wrapper"]} onClick={() => toggleSectionState('personal-info')}>
                <i className="fa-solid fa-caret-right"></i>
                personal&#8210;info
            </ul>
        </>
    );
};

export {
    PersonalInfoCollapse
}