import React, {ChangeEvent, HTMLInputTypeAttribute, memo, useId} from 'react';

import './Input.css';

interface InputProps {
  labelText?: string;
  onChange?: (event: ChangeEvent) => any;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any;
  type?: HTMLInputTypeAttribute;
  value: string | number;
  autoComplete?: string;
  testId?: string;
}

function Input({
    labelText = '',
    type = 'text',
    value,
    onBlur,
    onChange,
    autoComplete,
    testId = "common-input"
}: InputProps) {

    const id = useId();

    return (
        <div className='input-container'>
            <input
                data-testid={testId}
                className="input"
                id={id}
                type={type}
                placeholder={' '}
                onChange={onChange}
                onBlur={onBlur}
                value={value.toString()}
                min={0}
                autoComplete={autoComplete}
            />
            <label className="input-label" data-testid="common-input-label" htmlFor={id}>{labelText}</label>
        </div>
    )
}

export default memo(Input);
