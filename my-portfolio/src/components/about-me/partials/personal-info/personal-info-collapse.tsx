import { useContext } from "react";

import style from "./personal-info-collapse.module.css";
import { AboutMeSectionsStateContext } from "../../../../context/AboutMeSections";

const PersonalInfoCollapse = () => {

    const { toggleSectionState } = useContext(AboutMeSectionsStateContext);

    return (
        <>
            <ul className={style["row-wrapper"]}>
                <i className="fa-solid fa-caret-right" onClick={() => toggleSectionState('personal-info')}></i>
                personal&#8210;info
            </ul>
        </>
    );
};

export {
    PersonalInfoCollapse
}