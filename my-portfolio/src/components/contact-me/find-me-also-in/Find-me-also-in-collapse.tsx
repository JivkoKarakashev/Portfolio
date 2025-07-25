import { useContext } from "react";

import style from "./Find-me-also-in-collapse.module.css";
import { ContactMeSectionsStateContext } from "../../../context/ContactMeSections";

const FindMeAlsoInCollapse = () => {

    const { toggleSectionState } = useContext(ContactMeSectionsStateContext);

    return (
        <>
            <ul className={style["row-wrapper"]} onClick={() => toggleSectionState('find-me-also-in')}>
                <i className="fa-solid fa-caret-right"></i>
                find&#45;me&#45;also&#45;in
            </ul>
        </>
    );
};

export {
    FindMeAlsoInCollapse
}