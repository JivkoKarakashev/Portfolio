import { useState, type ReactElement, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import * as emailjs from '@emailjs/browser';

import style from './Mail-me-mobile.module.css';
import type { Options } from "@emailjs/browser/es/types/Options";
import { trimFormFields, type FormFields } from "../../../../../utils/trimFormFields";

type FieldType = 'name' | 'email' | 'message';
type FieldState = 'initial' | 'valid' | 'invalid';

const MailMeMobile = (): ReactElement => {

    const navigate = useNavigate();

    let trimmedForm: FormFields = {};

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [nameFieldState, setNameFieldState] = useState<FieldState>('initial');
    const [emailFieldState, setEmailFieldState] = useState<FieldState>('initial');
    const [messageFieldState, setMessageFieldState] = useState<FieldState>('initial');

    const [nameError, setNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [messageError, setMessageError] = useState<string>('');

    const isEmailValid = (email: string): boolean => {
        console.log(email);
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
        return Object.values({...trimmedForm}).some(v => Boolean(v) === false ? false : true);
    };

    return (
        <section className={style["content"]}>
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
                            name="email"
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
    );
};

export {
    MailMeMobile
}