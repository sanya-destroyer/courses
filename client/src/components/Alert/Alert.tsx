import {ReactNode} from "react";

import './Alert.css';

interface AlertProps {
    children: ReactNode;
    onAnimationEnd: () => void;
}

export const Alert = ({ children, onAnimationEnd }: AlertProps) =>
    <div
        data-testid="alert-element"
        className='alert'
        onAnimationEnd={onAnimationEnd}
    >
        {children}
    </div>

