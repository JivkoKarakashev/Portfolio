import type { ErrorResponse } from "react-router-dom";

import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

import * as emailjs from '@emailjs/browser';
import type { Options } from "@emailjs/browser/es/types/Options";

import { formFieldValidator, getFormatedDate } from "../utils/formValidators.ts";
import { trimFormFields } from "../utils/trimFormFields.ts";

type FieldType = 'name' | 'email' | 'message';
type FieldState = 'initial' | 'valid' | 'invalid';

// type FormFieldsValue = {
//     [Key in FieldType]: string
// }
// type FormFieldsState = {
//     [Key in FieldType]: FieldState
// }
// type FormFieldsError = {
//     [Key in FieldType]: string
// }

interface MailFormStore {
    fieldsValue: Record<FieldType, string>,
    fieldsState: Record<FieldType, FieldState>,
    errors: Record<FieldType, string>,
    date: string,

    setFieldValue: (field: FieldType, value: string) => void,
    validateFieldOnBlur: (field: FieldType) => void,
    submitForm: (onSuccess: () => void, onError: (err: ErrorResponse) => void) => void,
    resetForm: () => void
}

const store: StateCreator<MailFormStore> = (set, get) => ({
    fieldsValue: {
        name: '',
        email: '',
        message: ''
    },
    fieldsState: {
        name: 'initial',
        email: 'initial',
        message: 'initial'
    },
    errors: {
        name: '',
        email: '',
        message: ''
    },
    date: getFormatedDate(),

    setFieldValue: (field, value) => {
        const { valid, errorMessage } = formFieldValidator(field, value);
        const fieldState: FieldState = value && valid ? 'valid' : 'invalid';

        set((state) => ({
            fieldsValue: { ...state.fieldsValue, [field]: value },
            fieldsState: { ...state.fieldsState, [field]: fieldState },
            errors: { ...state.errors, [field]: errorMessage }
        }));
    },

    validateFieldOnBlur: (field) => {
        const value = get().fieldsValue[field];
        if (!value) {
            set((state) => ({
                fieldsState: { ...state.fieldsState, [field]: 'invalid' },
                errors: { ...state.errors, [field]: `${capitalize(field)} is required!` }
            }));
        }
    },

    submitForm: async (onSuccess, onError) => {
        const { name, email, message } = get().fieldsValue;
        const time = get().date;
        const trimmedForm = trimFormFields({ name, email, message });

        const isFormValid = Object.values(trimmedForm).every((v) => Boolean(v));
        if (!isFormValid) {
            alert('Invalid form!');
            return;
        }

        // console.log('Form is valid!');
        // console.log({ name, email, message, time });
        // return (console.log(trimmedForm));

        const templateParams = {
            subject: "Jivko Karakashev's portfolio-app",
            name: trimmedForm.name,
            email: trimmedForm.email,
            message: trimmedForm.message,
            time
        };

        const options: Options = {
            blockHeadless: true,
            limitRate: { throttle: 10000 },
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        };
        // return console.log(options);
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            options)
            .then(res => {
                if (res.status === 200 && res.text === 'OK') {
                    onSuccess();
                }
            })
            .catch((err: ErrorResponse) => {
                onError(err);
            });
    },

    resetForm: () => {
        set({
            fieldsValue: { name: '', email: '', message: '' },
            fieldsState: { name: 'initial', email: 'initial', message: 'initial' },
            errors: { name: '', email: '', message: '' },
            date: getFormatedDate()
        });
    }
})

const useMailFormStore =
    import.meta.env.DEV
        ? create(devtools(store, { name: 'MailFormStore' }))
        : create(store);

function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export {
    type FieldType,
    useMailFormStore
}