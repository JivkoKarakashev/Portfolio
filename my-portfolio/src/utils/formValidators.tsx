import type { FieldType } from "../components/contact-me/contacts/mail-me/desktop/Mail-me-desktop.tsx";

interface ValidatorRegExpType {
    name: RegExp,
    email: RegExp,
    message: RegExp
}

const validatorRegExpType: ValidatorRegExpType = {
    name: /(?=.*\S).{3,}/,
    // email: /^[a-z0-9]+([._-]?[a-z0-9]+)+@[a-z0-9]+([._-]?[a-z0-9]+)+\\.[a-z]{2,3}$/g,
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
    message: /(?=.*\S).{10,}/
}

const isFormFieldValid = (filedType: FieldType, value: string): boolean => {
    // console.log('Field:' + filedType);
    // console.log('Value:' + value);
    // console.log(validatorRegExpType[filedType]);
    return validatorRegExpType[filedType].test(value);
};


const dateTimeFormatOpts: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
}

const getFormatedDate = (): string => {
    const today = new Date();
    return today.toLocaleDateString('en-GB', dateTimeFormatOpts);
};

export {
    isFormFieldValid,
    getFormatedDate
}