import {Alert} from '../Alert';

import {fireEvent, render, screen} from '@testing-library/react';

const alertTestId = "alert-element"

describe('Alert component' , () => {

    let alertElement: HTMLDivElement;
    let alertText: string;
    const mockedCallback = jest.fn(() => console.log('Callback worked'))

    beforeEach(() => {
        alertText = "Alert Text"
        render(<Alert onAnimationEnd={() => mockedCallback()}>{alertText}</Alert>)
        alertElement = screen.getByTestId(alertTestId);
    })

    it('Should create alert component', () => {
        expect(alertElement).toBeInTheDocument();
    });

    it('should display Alert Text inside', () => {
        expect(alertElement).toHaveTextContent(alertText);
    })

    it('should execute function after animationend', () => {
        fireEvent.animationEnd(alertElement);

        expect(mockedCallback).toBeCalled();
    });
})