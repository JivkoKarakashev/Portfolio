import { type ReactElement, useContext } from "react";
import { useOutlet } from "react-router-dom";

import style from "./Contact-me.module.css";

import { ContactMeSectionsStateContext } from "../../context/ContactMeSections.tsx";
import { ContactsExpand } from "./contacts/Contacts-expand.tsx";
import { ContactsCollapse } from "./contacts/Contacts-collapse.tsx";
import { FindMeAlsoInExpand } from "./find-me-also-in/Find-me-also-in-expand.tsx";
import { FindMeAlsoInCollapse } from "./find-me-also-in/Find-me-also-in-collapse.tsx";

const ContactMe = (): ReactElement => {

    const { contactMeSectionsState } = useContext(ContactMeSectionsStateContext);
    const outlet = useOutlet();

    return (
        <nav className={`${style["nav"]} ${style["contact-me"]}`}>
            <ul>
                <li className={`${style["contact-me"]} ${style["nav-row"]}`}>&#95;contact&#8210;me</li>
                <li className={`${style["contacts"]} ${style["nav-row"]}`}>
                    {contactMeSectionsState.contacts === 'expand' && <ContactsExpand />}
                    {contactMeSectionsState.contacts === 'collapse' && <ContactsCollapse />}
                </li>
                <li className={`${style["find-me-also-in"]} ${style["nav-row"]}`}>
                    {contactMeSectionsState['find-me-also-in'] === 'expand' && <FindMeAlsoInExpand />}
                    {contactMeSectionsState['find-me-also-in'] === 'collapse' && <FindMeAlsoInCollapse />}
                </li>

            </ul>
            {outlet}
        </nav>
    );
};

export default ContactMe;