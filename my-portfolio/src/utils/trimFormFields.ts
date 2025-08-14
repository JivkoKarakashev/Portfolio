interface FormFields {
    [key: string]: string
}

const trimFormFields = (form: FormFields): FormFields => {
    const trimmedForm: FormFields = {};
    Object.keys(form).forEach(key => trimmedForm[key] = typeof form[key] === 'string' ? form[key].trim() : form[key]);
    return trimmedForm;
};

export {
    type FormFields,
    trimFormFields
}