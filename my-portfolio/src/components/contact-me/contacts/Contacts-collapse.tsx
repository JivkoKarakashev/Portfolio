import { useContext } from "react";

import style from "./Contacts-collapse.module.css";
import { ContactMeSectionsStateContext } from "../../../context/ContactMeSections";

const ContactsCollapse = () => {

    const { toggleSectionState } = useContext(ContactMeSectionsStateContext);

    return (
        <>
            <ul className={style["row-wrapper"]} onClick={() => toggleSectionState('contacts')}>
                <i className="fa-solid fa-caret-right"></i>
                contacts
            </ul>
        </>
    );
};

export {
    ContactsCollapse
}