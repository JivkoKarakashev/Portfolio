import { useState, type ReactElement, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import * as emailjs from '@emailjs/browser';

import style from './Mail-me-mobile.module.css';
import type { Options } from "@emailjs/browser/es/types/Options";

type FieldType = 'name' | 'email' | 'message';

const MailMeMobile = (): ReactElement => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const isEmailValid = (email: string): boolean => {
        const validEmail = new RegExp('^[a-z0-9]+([._-]?[a-z0-9]+)+@[a-z0-9]+([._-]?[a-z0-9]+)+\\.[a-z]{2,3}$');
        return validEmail.test(email);
    };

    const handleInputChange = (field: FieldType, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log(field);
        const value = e.target.value;

        switch (field) {
            case 'name': {
                setName(value);
                if (!value) {
                    setNameError('Name is required!');
                } else {
                    setNameError('');
                }
                break;
            }
            case 'email': {
                setEmail(value);
                if (!isEmailValid(value)) {
                    setEmailError('Wrong email address!');
                } else {
                    setEmailError('');
                }
                break;
            }
            case 'message': {
                setMessage(value);
                if (!value) {
                    setMessageError('Message is required!');
                } else {
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
                    setNameError('Name is required!');
                }
                break;
            }
            case 'email': {
                if (!email) {
                    setEmailError('Email is required!');
                }
                break;
            }
            case 'message': {
                if (!message) {
                    setMessageError('Message is required!');
                }
                break;
            }
        }

    };

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid()) {
            alert('Invalid FORM!!');
            return;
        }
        console.log('Form is valid!');

        const templateParams = {
            subject: 'Mail-Me Form from my-portfolio-app',
            name,
            email,
            message
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

    const isFormValid = (): Boolean => Boolean(name && isEmailValid(email) && message);

    return (
        <section className={style["content"]}>
            <form className={style['form']} onSubmit={submitHandler}>
                <div className="name-wrapper">
                    <label htmlFor="name" className={style['name']}>_name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => handleInputChange('name', e)}
                        onBlur={(e) => handleOnFocusOut('name', e)}
                        id="name"
                        className={`${style['name']} ${nameError ? style["error-field"] : style["valid-field"]}`}
                    />
                    {nameError && (
                        <span className={style['error-text']}>{nameError}</span>
                    )}
                </div>

                <div className="email-wrapper">
                    <label htmlFor="email" className={style['email']}>_email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => handleInputChange('email', e)}
                        onBlur={(e) => handleOnFocusOut('email', e)}
                        id="email"
                        className={`email ${emailError ? style["error-field"] : style["valid-field"]}`}
                    />
                    {emailError && (
                        <span className={style['error-text']}>{emailError}</span>
                    )}
                </div>

                <div className="message-wrapper">
                    <label htmlFor="message" className={style['message']}>_message:</label>
                    <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => handleInputChange('message', e)}
                        onBlur={(e) => handleOnFocusOut('message', e)}
                        placeholder="your message here …"
                        className={`${style['message']} ${messageError ? style["error-field"] : style["valid-field"]}`} />
                    {messageError && (
                        <span className={style['error-text']}>{messageError}</span>
                    )}
                </div>

                <input
                    type="submit"
                    value='submit-message'
                    disabled={!isFormValid()}
                    className={`${style['button']} ${isFormValid() ? style['enabled'] : style['disabled']}`}
                />
            </form>
        </section>
    );
};

export {
    MailMeMobile
}