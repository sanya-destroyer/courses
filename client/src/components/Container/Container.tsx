import {ReactNode} from "react";

import './Container.css';

interface ContainerProps {
    children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => <div className='app-container'>{children}</div>

export const FlexContainer = ({ children }: ContainerProps) => <div className='app-container app-flex-container'>{children}</div>
