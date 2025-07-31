import { useState, type ReactElement, type ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as emailjs from '@emailjs/browser';
import type { Options } from "@emailjs/browser/es/types/Options";

import style from './Mail-me-desktop.module.css';
import { trimFormFields, type FormFields } from "../../../../../utils/trimFormFields.tsx";

type FieldType = 'name' | 'email' | 'message';
type FieldState = 'initial' | 'valid' | 'invalid';

const MailMeDesktop = (): ReactElement => {

    const navigate = useNavigate();

    let trimmedForm: FormFields = {};

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');

    const [nameFieldState, setNameFieldState] = useState<FieldState>('initial');
    const [emailFieldState, setEmailFieldState] = useState<FieldState>('initial');
    const [messageFieldState, setMessageFieldState] = useState<FieldState>('initial');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    useEffect(() => {
        const fdate = getFormatedDate();
        setDate(fdate);
        return () => { };
    }, []);

    const getFormatedDate = (): string => {
        const today = new Date();
        return today.toLocaleDateString('en-GB', {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
        });
    };


    const isEmailValid = (email: string): boolean => {
        // const validEmail = new RegExp('^[a-z0-9]+([._-]?[a-z0-9]+)+@[a-z0-9]+([._-]?[a-z0-9]+)+\\.[a-z]{2,3}$');
        const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
        return validEmail.test(email);
    };

    const handleInputChange = (field: FieldType, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log(field);
        const value = e.target.value;

        switch (field) {
            case 'name': {
                setName(value);
                if (!value) {
                    setNameFieldState('invalid');
                    setNameError('Name is required!');
                } else {
                    setNameFieldState('valid');
                    setNameError('');
                }
                break;
            }
            case 'email': {
                setEmail(value);
                console.log(value);
                if (!isEmailValid(value)) {
                    setEmailFieldState('invalid');
                    setEmailError('Wrong email address!');
                } else {
                    setEmailFieldState('valid');
                    setEmailError('');
                }
                break;
            }
            case 'message': {
                setMessage(value);
                if (!value) {
                    setMessageFieldState('invalid');
                    setMessageError('Message is required!');
                } else {
                    setMessageFieldState('valid');
                    setMessageError('');
                }
                break;
            }
        }
    };

    const handleOnFocusOut = (field: FieldType, e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>): void => {
        // console.log(e.currentTarget);
        switch (field) {
            case 'name': {
                if (!name) {
                    setNameFieldState('invalid');
                    setNameError('Name is required!');
                }
                break;
            }
            case 'email': {
                if (!email) {
                    setEmailFieldState('invalid');
                    setEmailError('Email is required!');
                }
                break;
            }
            case 'message': {
                if (!message) {
                    setMessageFieldState('invalid');
                    setMessageError('Message is required!');
                }
                break;
            }
        }

    };

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        trimmedForm = trimFormFields({ name, email, message });
        if (isFormValid() === false) {
            alert('Invalid FORM!!');
            return;
        }
        console.log('Form is valid!');

        console.log({ name, email, message });
        return (console.log(trimmedForm));

        const templateParams = {
            subject: 'Mail-Me Form from my-portfolio-app',
            name: trimmedForm.name,
            email: trimmedForm.email,
            message: trimmedForm.message
        };

        const options: Options = {
            blockHeadless: true,
            limitRate: {
                throttle: 10000
            },
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
        // return console.log(options);
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            options)
            .then(res => {
                if (res.status === 200 && res.text === 'OK') {
                    navigate('/contact-me/thank-you');
                }
            })
            .catch(err => {
                console.log(err);
                alert(`Email send failed: ${err}`);
            });
    };

    const isFormValid = (): Boolean => {
        console.log('isFormValid is Invoked!');
        return Object.values({ ...trimmedForm }).some(v => Boolean(v) === false ? false : true);
    };

    return (
        <section className={style["content"]}>

            {/* <---------- Form Layout ----------> */}
            <section className={style["left-wrapper"]}>
                <form className={style['form']} onSubmit={submitHandler}>
                    <div className="name-wrapper">
                        <label htmlFor="name" className={style['name']}>_name:</label>
                        <div className={style["input-wrapper"]}>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => handleInputChange('name', e)}
                                onBlur={(e) => handleOnFocusOut('name', e)}
                                id="name"
                                name="name"
                                className={`${style['name']} ${nameFieldState === 'invalid' ? style["error-field"] : nameFieldState === 'valid' ? style["valid-field"] : ''}`}
                            />
                            <span className={`${style["icon"]} ${nameFieldState === 'invalid' ? style["exclamation"] : nameFieldState === 'valid' ? style["check"] : ''}`} />
                        </div>
                        {nameError && (
                            <span className={style['error-text']}>{nameError}</span>
                        )}
                    </div>

                    <div className="email-wrapper">
                        <label htmlFor="email" className={style['email']}>_email:</label>
                        <div className={style["input-wrapper"]}>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => handleInputChange('email', e)}
                                onBlur={(e) => handleOnFocusOut('email', e)}
                                id="email"
                                name="name"
                                className={`email ${emailFieldState === 'invalid' ? style["error-field"] : emailFieldState === 'valid' ? style["valid-field"] : ''}`}
                            />
                            <span className={`${style["icon"]} ${emailFieldState === 'invalid' ? style["exclamation"] : emailFieldState === 'valid' ? style["check"] : ''}`} />
                        </div>
                        {emailError && (
                            <span className={style['error-text']}>{emailError}</span>
                        )}
                    </div>

                    <div className="message-wrapper">
                        <label htmlFor="message" className={style['message']}>_message:</label>
                        <div className={style["input-wrapper"]}>
                            <textarea
                                rows={4}
                                value={message}
                                onChange={(e) => handleInputChange('message', e)}
                                onBlur={(e) => handleOnFocusOut('message', e)}
                                placeholder="your message here …"
                                id="message"
                                name="message"
                                className={`${style['message']} ${messageFieldState === 'invalid' ? style["error-field"] : messageFieldState === 'valid' ? style["valid-field"] : ''}`}
                            />
                            <span className={`${style["icon"]} ${messageFieldState === 'invalid' ? style["exclamation"] : messageFieldState === 'valid' ? style["check"] : ''}`} />
                        </div>
                        {messageError && (
                            <span className={style['error-text']}>{messageError}</span>
                        )}
                    </div>

                    <input
                        type="submit"
                        value='submit-message'
                        disabled={Boolean(nameFieldState === 'invalid' && emailFieldState === 'invalid' && messageFieldState === 'invalid')}
                        className={`${style['button']} ${Boolean(nameFieldState === 'valid' && emailFieldState === 'valid' && messageFieldState === 'valid') ? style['enabled'] : style['disabled']}`}
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
                                <span className={style["row-number"]}>4</span><span className={style["prop"]}>name</span><span className={style["colon"]}>&#58;</span> <span className={style["string"]}>{`"${name}"`}</span><span className={style["comma"]}>&#44;</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>5</span><span className={style["prop"]}>email</span><span className={style["colon"]}>&#58;</span> <span className={style["string"]}>{`"${email}"`}</span><span className={style["comma"]}>&#44;</span>
                            </div>
                            <div className={style["row-snippet"]}>
                                <span className={style["row-number"]}>6</span><span className={style["prop"]}>message</span><span className={style["colon"]}>&#58;</span> <span className={style["string"]}>{`"${message}"`}</span><span className={style["comma"]}>&#44;</span>
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
    MailMeDesktop
}