import type { FieldType } from "../store/mailFormStore.ts";

interface ValidatorRegExpType {
    name: RegExp,
    email: RegExp,
    message: RegExp
}

interface ValidatedFormField {
    valid: boolean,
    errorMessage: string
}

const validatorRegExpType: ValidatorRegExpType = {
    name: /(?=.*\S).{3,}/,
    // email: /^[a-z0-9]+([._-]?[a-z0-9]+)+@[a-z0-9]+([._-]?[a-z0-9]+)+\\.[a-z]{2,3}$/g,
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
    message: /(?=.*\S).{10,}/
}

const formFieldValidator = (filedType: FieldType, value: string): ValidatedFormField => {
    // console.log('Field:' + filedType);
    // console.log('Value:' + value);
    // console.log(validatorRegExpType[filedType]);
    const valid = validatorRegExpType[filedType].test(value);
    const errorMessage = getErrorMessage(filedType, value, valid);
    return {
        valid,
        errorMessage
    }
};

const getErrorMessage = (field: FieldType, value: string, valid: boolean) => {
    switch (field) {
        case 'name': {
            return !value ? 'Name is required!' : value && !valid ? 'Name must be at least 3 characters long!' : value && valid ? '' : 'Unhandled error';
        }
        case 'email': {
            return !value ? 'Email is required!' : value && !valid ? 'A valid email address is required!' : value && valid ? '' : 'Unhandled error';
        }
        case 'message': {
            return !value ? 'Message is required!' : value && !valid ? 'Message must be at least 10 characters long!' : value && valid ? '' : 'Unhandled error';
        }
    }
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
    formFieldValidator,
    getFormatedDate
}