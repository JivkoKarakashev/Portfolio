import { type ReactElement, type ChangeEvent, useState } from "react";
import { useNavigate, type ErrorResponse } from "react-router-dom";

import style from './Mail-me-desktop.module.css';

import { useMailFormStore, type FieldType } from "../../../../../store/mailFormStore.ts";
import { TurnstileWidget } from "../turnstile/TurnstileWidget.tsx";

const MailMeDesktop = (): ReactElement => {
    const [, setToken] = useState('');
    const [verified, setVerified] = useState(false);

    const navigate = useNavigate();
    const onSuccess = () => navigate('/contact-me/thank-you');
    const onError = (err: ErrorResponse) => alert(`Email send failed: ${err}`);

    const { fieldsValue, fieldsState, errors, date } = useMailFormStore();
    const { setFieldValue, validateFieldOnBlur, submitForm } = useMailFormStore();

    const onInputChange = (field: FieldType, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log(field);
        const value = e.target.value;
        setFieldValue(field, value);
    };

    const onBlur = (field: FieldType): void => {
        // console.log(e.currentTarget);
        validateFieldOnBlur(field);
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitForm(onSuccess, onError);
    };

    const onToken = (t: string) => setToken(t);

    const onVerified = (v: boolean) => setVerified(v);

    return (
        <section className={style["content"]}>

            {/* <---------- Form Layout ----------> */}
            <section className={style["left-wrapper"]}>
                <form className={style['form']} onSubmit={onFormSubmit}>
                    <div className="name-wrapper">
                        <label htmlFor="name" className={style['name']}>_name:</label>
                        <div className={style["input-wrapper"]}>
                            <input
                                type="text"
                                value={fieldsValue.name}
                                onChange={(e) => onInputChange('name', e)}
                                onBlur={() => onBlur('name')}
                                id="name"
                                name="name"
                                className={`${style['name']} ${fieldsState.name === 'invalid' ? style["error-field"] : fieldsState.name === 'valid' ? style["valid-field"] : ''}`}
                            />
                            <span className={`${style["icon"]} ${fieldsState.name === 'invalid' ? style["exclamation"] : fieldsState.name === 'valid' ? style["check"] : ''}`} />
                        </div>
                        {errors.name && (
                            <span className={style['error-text']}>{errors.name}</span>
                        )}
                    </div>

                    <div className="email-wrapper">
                        <label htmlFor="email" className={style['email']}>_email:</label>
                        <div className={style["input-wrapper"]}>
                            <input
                                type="text"
                                value={fieldsValue.email}
                                onChange={(e) => onInputChange('email', e)}
                                onBlur={() => onBlur('email')}
                                id="email"
                                name="name"
                                className={`email ${fieldsState.email === 'invalid' ? style["error-field"] : fieldsState.email === 'valid' ? style["valid-field"] : ''}`}
                            />
                            <span className={`${style["icon"]} ${fieldsState.email === 'invalid' ? style["exclamation"] : fieldsState.email === 'valid' ? style["check"] : ''}`} />
                        </div>
                        {errors.email && (
                            <span className={style['error-text']}>{errors.email}</span>
                        )}
                    </div>

                    <div className="message-wrapper">
                        <label htmlFor="message" className={style['message']}>_message:</label>
                        <div className={style["input-wrapper"]}>
                            <textarea
                                rows={4}
                                value={fieldsValue.message}
                                onChange={(e) => onInputChange('message', e)}
                                onBlur={() => onBlur('message')}
                                placeholder="your message here …"
                                id="message"
                                name="message"
                                className={`${style['message']} ${fieldsState.message === 'invalid' ? style["error-field"] : fieldsState.message === 'valid' ? style["valid-field"] : ''}`}
                            />
                            <span className={`${style["icon"]} ${fieldsState.message === 'invalid' ? style["exclamation"] : fieldsState.message === 'valid' ? style["check"] : ''}`} />
                        </div>
                        {errors.message && (
                            <span className={style['error-text']}>{errors.message}</span>
                        )}
                    </div>

                    <TurnstileWidget onToken={onToken} onVerified={onVerified} />

                    <input
                        type="submit"
                        value='submit-message'
                        disabled={fieldsState.name === 'invalid' || fieldsState.email === 'invalid' || fieldsState.message === 'invalid' || !verified}
                        className={`${style['button']} ${fieldsState.name === 'valid' && fieldsState.email === 'valid' && fieldsState.message === 'valid' && verified ? style['enabled'] : style['disabled']}`}
                    />
                </form>
            </section>

            {/* <---------- Code block snippet ----------> */}
            <section className={style["right-wrapper"]}>
                <section className={style["code-section"]}>
                    <pre>
                        <code>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>1</span><span className={style["keyword"]}>const</span> <span className={style["variable"]}>button</span> <span className={style["equal"]}>&#61;</span> <span className={style["variable"]}>document</span><span className={style["method"]}>&#46;querySelector</span><span className={style["parenthesis"]}>&#40;</span><span className={style["string"]}>'#sendBtn'</span><span className={style["parenthesis"]}>&#41;</span><span className={style["semicolon"]}>&#59;</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>2</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>3</span><span className={style["keyword"]}>const</span> <span className={style["variable"]}>message</span> <span className={style["equal"]}>&#61;</span> <span className={style["bracket"]}>&#123;</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>4</span><span className={style["prop"]}>name</span><span className={style["colon"]}>&#58;</span> <span className={style["string"]}>{`"${fieldsValue.name}"`}</span><span className={style["comma"]}>&#44;</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>5</span><span className={style["prop"]}>email</span><span className={style["colon"]}>&#58;</span> <span className={style["string"]}>{`"${fieldsValue.email}"`}</span><span className={style["comma"]}>&#44;</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>6</span><span className={style["prop"]}>message</span><span className={style["colon"]}>&#58;</span> <span className={style["string"]}>{`"${fieldsValue.message}"`}</span><span className={style["comma"]}>&#44;</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>7</span><span className={style["prop"]}>date</span><span className={style["colon"]}>&#58;</span> <span className={style["string"]}>{`"${date}"`}</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>8</span><span className={style["bracket"]}>&#125;</span><span className={style["semicolon"]}>&#59;</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>9</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>10</span><span className={style["variable"]}>button</span><span className={style["method"]}>&#46;addEventListener</span><span className={style["parenthesis"]}>&#40;</span><span className={style["string"]}>'click'</span><span className={style["comma"]}>&#44;</span> <span className={style["parenthesis"]}>&#40;</span><span className={style["parenthesis"]}>&#41;</span> <span className={style["equal"]}>&#61;</span><span className={style["greater-than"]}>&#62;</span> <span className={style["bracket"]}>&#123;</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>11</span><span className={`${style["variable"]} ${style["padding"]}`}>form</span><span className={style["method"]}>&#46;send</span><span className={style["parenthesis"]}>&#40;</span><span className={style["variable"]}>message</span><span className={style["parenthesis"]}>&#41;</span><span className={style["semicolon"]}>&#59;</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>12</span><span className={style["bracket"]}>&#125;</span><span className={style["parenthesis"]}>&#41;</span><span className={style["semicolon"]}>&#59;</span>
                            </div>
                        </code>
                    </pre>
                </section>
            </section>
        </section>
    );
};

export {
    type FieldType,
    MailMeDesktop
}