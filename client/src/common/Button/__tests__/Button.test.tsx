import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Button from '../Button';
import userEvent from '@testing-library/user-event';

const buttonTestId = "common-button"
const buttonText = "Button text";
const buttonType = "button";
const mockedButtonClick = jest.fn(() => {});

describe('Button element', () => {
    let buttonElement: HTMLButtonElement;

    beforeEach(() => {
        render(
            <Button
                buttonText={buttonText}
                onClick={mockedButtonClick}
                type={buttonType}
            />
        );

        buttonElement = screen.getByTestId(buttonTestId);
    });

    it('should render button', () => {
       expect(buttonElement).toBeInTheDocument();
    });

    it('should add type property on button', () => {
        expect(buttonElement.type).toBe(buttonType);
    });

    it('should fire onclick event', () => {
        userEvent.click(buttonElement);
        expect(mockedButtonClick).toBeCalled();
    });

    it('should fire onsubmit event if button inside form', () => {
        cleanup();
        const mockedOnSubmit = jest.fn((event) => {event.preventDefault()});

        render(
            <form onSubmit={mockedOnSubmit}>
                <Button
                    buttonText={buttonText}
                    type='submit'
                >
                    {buttonText}
                </Button>
            </form>
        );

        const buttonElement = screen.getByTestId(buttonTestId);

        userEvent.click(buttonElement);

        expect(mockedOnSubmit).toBeCalled();
    });
});