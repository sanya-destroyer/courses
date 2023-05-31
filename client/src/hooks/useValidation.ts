import {useEffect, useState} from 'react';

export interface IValidatorKeys {
    maxLength?: number;
    minLength?: number;
    email?: boolean;
    required?: boolean;
}

export function useValidation(value: string | number, validators: IValidatorKeys) {
    const [errors, setErrors] = useState<string[]>([]);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        const errors: string[] = [];

        for (let key in validators) {
            switch (key) {
                case 'maxLength':
                    const maxLength = validators[key] ?? Number.MAX_SAFE_INTEGER;
                    if(value.toString().length >= maxLength)
                        errors.push(`Length should be less than: ${maxLength}`)

                    break

                case 'minLength':
                    let minLength = 0;

                    if (validators[key] == undefined) {
                        minLength = 0;
                    } else if (validators['minLength'] && validators['minLength'] < 0) {
                        minLength = 0;
                    } else {
                        minLength = <number>validators['minLength'];
                    }

                    if (value.toString().length <= minLength)
                        errors.push(`Length should be more than: ${minLength}`)

                    break;

                case 'email':
                    const regexp = /^\S+@\S+\.\S+$/;
                    if (!regexp.test(value.toString()))
                        errors.push('It should be valid email');

                    break;

                case 'required':
                    if ( !value.toString().length)
                        errors.push('This field is required');

                    break;
            }
        }

        setErrors(errors);
        setIsValid(!!!errors.length);

    }, [value]);


    return {
        errors,
        isValid
    }
}