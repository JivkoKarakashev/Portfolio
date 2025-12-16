import { useContext, type JSX } from "react";
import { useNavigate } from "react-router-dom";

import style from "./navigate.module.css";

import { MobileNavMenuStatesContext } from "../../context/MobileNavMenu.tsx";

const Navigate = (): boolean | JSX.Element => {
    const { setMenuState } = useContext(MobileNavMenuStatesContext);
    const navigate = useNavigate();

    const onClose = (): void => {
        setMenuState('closed');
        navigate(-1);
    };

    const onNavigate = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const activetedLink = e.currentTarget.textContent || '';
        // console.log(activetedLink);
        setMenuState('closed');
        switch (activetedLink) {
            case 'jivko-karakashev': {
                navigate('/');
                break;
            }
            case '_about-me': {
                navigate('/about-me');
                break;
            }
            case '_hello': {
                navigate('/');
                break;
            }
            case '_projects': {
                navigate('/projects');
                break;
            }
            case '_contact-me': {
                navigate('/contact-me');
                break;
            }
        }
    };

    return (
        <nav className={style["navbar"]}>
            <ul>
                <li className={`${style["row"]} ${style["logo-wrapper"]}`}>
                    <ul>
                        <li className={style["logo"]}>
                            <span onClick={(e) => onNavigate(e)}>jivko&#45;karakashev</span>
                        </li>
                        <li className={style["close-button"]}>
                            <i className="fa-regular fa-circle-xmark fa-2xl" onClick={onClose}></i>
                        </li>
                    </ul>
                </li>
                <li className={style["heading"]}><i className="fa-solid fa-hashtag"></i> navigate&#58;</li>
                <li className={`${style["row"]} ${style['link']}`}>
                    <span onClick={(e) => onNavigate(e)}>&#95;hello</span>
                </li>
                <li className={`${style["row"]} ${style['link']}`}>
                    <span onClick={(e) => onNavigate(e)}>&#95;about&#45;me</span>
                </li>
                <li className={`${style["row"]} ${style['link']}`}>
                    <span onClick={(e) => onNavigate(e)}>&#95;projects</span>
                </li>
                <li className={`${style["row"]} ${style['link']}`}>
                    <span onClick={(e) => onNavigate(e)}>&#95;contact&#45;me</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navigate