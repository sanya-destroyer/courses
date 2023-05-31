import './Button.css';
import {memo} from 'react';

interface ButtonProps {
  buttonText?: string
  onClick?: () => void
  small?: boolean,
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children?: any;
  testId?: string;
}


function Button({ buttonText, onClick, small = false, type='button', children, disabled, testId="common-button" }: ButtonProps) {
  return (
    <button
        data-testid={testId}
        className={`button ${small ? 'small' : ''}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
    >
      {children ?? buttonText}
    </button>
  )
}

export default memo(Button)
