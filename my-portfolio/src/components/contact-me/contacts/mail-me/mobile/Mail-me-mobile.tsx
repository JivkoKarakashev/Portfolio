import { type ReactElement, type ChangeEvent } from "react";
import { useNavigate, type ErrorResponse } from "react-router-dom";

import style from './Mail-me-mobile.module.css';
import { useMailFormStore, type FieldType } from "../../../../../store/mailFormStore.ts";

const MailMeMobile = (): ReactElement => {

    const navigate = useNavigate();
    const onSuccess = () => navigate('/contact-me/thank-you');
    const onError = (err: ErrorResponse) => alert(`Email send failed: ${err}`);

    const { fieldsValue, fieldsState, errors } = useMailFormStore();
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
        submitForm(onSuccess, onError)
    };

    return (
        <section className={style["content"]}>
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
                            name="email"
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

                <input
                    type="submit"
                    value='submit-message'
                    disabled={fieldsState.name === 'invalid' || fieldsState.email === 'invalid' || fieldsState.message === 'invalid'}
                    className={`${style['button']} ${fieldsState.name === 'valid' && fieldsState.email === 'valid' && fieldsState.message === 'valid' ? style['enabled'] : style['disabled']}`}
                />
            </form>
        </section>
    );
};

export {
    MailMeMobile
}