import { useContext } from 'react';

import style from './personal-info-expand.module.css';
import { AboutMeSectionsStateContext } from '../../../../context/AboutMeSections';
import { Link } from 'react-router-dom';


const PersonalInfoExpand = () => {

    const { toggleSectionState } = useContext(AboutMeSectionsStateContext);

    return (
        <>
            <ul className={style["row-wrapper"]}>
                <i className="fa-solid fa-caret-down" onClick={() => toggleSectionState('personal-info')}></i>
                <span>personal&#8210;info</span>
            </ul>
            <ul className={style["column-wrapper"]}>
                <li className={`${style["row"]} ${style["bio"]}`}>
                    <Link className={style['link']} to="/about-me/bio">
                        <i className="fa-solid fa-folder"></i>
                        <span>bio</span>
                    </Link>
                </li>
                <li className={`${style["row"]} ${style["interests"]}`}>
                    <Link className={style["link"]} to="/about-me/interests">
                        <i className="fa-solid fa-folder"></i>
                        <span>interests</span>
                    </Link>
                </li>
                <li className={`${style["row"]} ${style["education"]}`}>
                    <i className="fa-solid fa-folder"></i>
                    <span>education</span>
                    <ul>
                        <li className={style["school"]}>
                            <i className="fa-solid fa-graduation-cap"></i>
                            <span>high-school</span>
                        </li>
                        <li className={style["school"]}>
                            <i className="fa-solid fa-graduation-cap"></i>
                            <span>university</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export {
    PersonalInfoExpand
}