import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import style from './Thank-you.module.css';
import { SvgIconProvider } from "../../svg-icon-provider/svg-icon-provider";

const ThankYou = (): ReactElement => {
    const navigate = useNavigate();

    const onSendNewMessage = () => navigate('/contact-me/mail-me');

    return (
        <section className={style["content"]}>
            <div className={style["row-wrapper"]}>
                <span>Thank you&#33;</span>
                <SvgIconProvider iconName='rock-on' />
            </div>
            <div className={style["row-wrapper"]}>
                <span>Your message has been accepted&#46;</span>
            </div>
            <div className={style["row-wrapper"]}>
                <span>You will receive answer soon&#46;</span>
            </div>

            <div className="row-wrapper">
                <input
                    type="button"
                    value='send-new-message'
                    className={style['button']}
                    onClick={onSendNewMessage}
                />
            </div>
        </section>
    );
};

export {
    ThankYou
}