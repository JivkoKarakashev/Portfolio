import { useContext } from 'react';
import { Link } from 'react-router-dom';

import style from './Find-me-also-in-expand.module.css';
import { ContactMeSectionsStateContext } from '../../../context/ContactMeSections.tsx';
import { SvgIconProvider } from '../../svg-icon-provider/svg-icon-provider.tsx';

const FindMeAlsoInExpand = () => {

    const { toggleSectionState } = useContext(ContactMeSectionsStateContext);

    return (
        <>
            <nav className={style["nav"]}>
                <ul className={style["row-wrapper"]} onClick={() => toggleSectionState('find-me-also-in')}>
                    <i className="fa-solid fa-caret-down"></i>
                    <span>find&#45;me&#45;also&#45;in</span>
                </ul>
                <ul className={style["column-wrapper"]}>
                    <li className={`${style["row"]} ${style["discord"]}`}>
                        <Link className={style['link']} to="https://discordapp.com/users/446352307106349057" target='new_blank'>
                            <SvgIconProvider iconName='discord' tooltipProps={{ key: 'discord', "data-tooltip-id": 'discord' }} />
                            <span className={`${style["icon"]} ${style["discord"]}`}>Discord</span>
                        </Link>
                    </li>
                    <li className={`${style["row"]} ${style["instagram"]}`}>
                        <Link className={style["link"]} to="https://ig.me/m/jivko.karakashev" target='new_blank'>
                            <SvgIconProvider iconName='instagram' tooltipProps={{ key: 'instagram', "data-tooltip-id": 'instagram' }} />
                            <span className={`${style["icon"]} ${style["Instagram"]}`}>Instagram</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export {
    FindMeAlsoInExpand
}