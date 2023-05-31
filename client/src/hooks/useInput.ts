import React, {ChangeEvent, useCallback, useState} from 'react';

import {IValidatorKeys, useValidation} from './useValidation';


export function useInput(initialValue: string | number, validators: IValidatorKeys = {}) {
    const [value, setValue] = useState(initialValue);
    const [touched, setIsTouched] = useState(false);
    const { isValid, errors } = useValidation(value, validators);

    const onBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setIsTouched(true);
    }, [])

    const onChange = useCallback((event: ChangeEvent) => {
        setValue((event.target as HTMLInputElement).value);
    }, []);

    return {
        value,
        onBlur,
        onChange,
        touched,
        isValid,
        errors
    }
}