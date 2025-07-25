import { useContext } from 'react';
import { Link } from 'react-router-dom';

import style from './Contacts-expand.module.css';
import { ContactMeSectionsStateContext } from '../../../context/ContactMeSections.tsx';
import { SvgIconProvider } from '../../svg-icon-provider/svg-icon-provider.tsx';

const ContactsExpand = () => {

    const { toggleSectionState } = useContext(ContactMeSectionsStateContext);

    return (
        <>
            <nav className={style["nav"]}>
                <ul className={style["row-wrapper"]} onClick={() => toggleSectionState('contacts')}>
                    <i className="fa-solid fa-caret-down"></i>
                    <span>contacts</span>
                </ul>
                <ul className={style["column-wrapper"]}>
                    <li className={`${style["row"]} ${style["gmail"]}`}>
                        <Link className={style["link"]} to="/contact-me/mail-me">
                            <SvgIconProvider iconName='gmail' tooltipProps={{ key: 'gmail', "data-tooltip-id": 'gmail' }} />
                            <span className={`${style["icon"]} ${style["gmail"]}`}>jivko&#46;karakashev&#64;gmail&#46;com</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export {
    ContactsExpand
}