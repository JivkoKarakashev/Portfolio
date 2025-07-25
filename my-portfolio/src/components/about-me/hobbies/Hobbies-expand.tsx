import { useContext } from "react";
import { Link } from "react-router-dom";

import style from './hobbies-expand.module.css';
import { AboutMeSectionsStateContext } from "../../../context/AboutMeSections.tsx";

const HobbiesExpand = () => {

    const { toggleSectionState } = useContext(AboutMeSectionsStateContext);

    return (
        <>
            <ul className={style["row-wrapper"]} onClick={() => toggleSectionState('hobbies')}>
                <i className="fa-solid fa-caret-down"></i>
                <span>hobbies</span>
            </ul>
            <ul className={style["column-wrapper"]}>
                <li className={`${style["row"]} ${style["tech"]}`}>
                    <Link className={style['link']} to="/about-me/hobbies/tech">
                        <span className={`${style["hobbie"]} ${style["tech"]}`}>tinkering &#38;&#38; exploring Tech</span>
                    </Link>
                </li>
                <li className={`${style["row"]} ${style["lifehacks"]}`}>
                    <Link className={style["link"]} to="/about-me/hobbies/lifehacks">
                        <span className={`${style["hobbie"]} ${style["lifehacks"]}`}>lifelong learning &#38;&#38; Science curiosity</span>
                    </Link>
                </li>
                <li className={`${style["row"]} ${style["unwind"]}`}>
                    <Link className={style["link"]} to="/about-me/hobbies/unwind">
                        <span className={`${style["hobbie"]} ${style["unwind"]}`}>walking &#124;&#124; cycling for Clarity</span>
                    </Link>
                </li>
                <li className={`${style["row"]} ${style["movies"]}`}>
                    <Link className={style["link"]} to="/about-me/hobbies/movies">
                        <span className={`${style["hobbie"]} ${style["movies"]}`}>Sci&#45;Fi &#38;&#38; imaginative Worlds</span>
                    </Link>
                </li>
                <li className={`${style["row"]} ${style["conversations"]}`}>
                    <Link className={style["link"]} to="/about-me/hobbies/conversations">
                        <span className={`${style["hobbie"]} ${style["conversations"]}`}>conversations</span>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export {
    HobbiesExpand
}