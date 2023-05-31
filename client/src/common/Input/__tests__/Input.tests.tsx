import {fireEvent, render, screen} from '@testing-library/react';

import Input from '../Input';

const inputTestId = "common-input";
const inputLabelTestId = "common-input-label";

const blurFunctionMock = jest.fn(() => console.log('blur'));
const changeFunctionMock = jest.fn(() => console.log('change'));
const value = "value";
const type = "text";
const labelText = "label text";

describe('Common input element', () => {

    let inputElement: HTMLInputElement;

    beforeEach(() => {
        render(
            <Input
                onBlur={blurFunctionMock}
                onChange={changeFunctionMock}
                value={value}
                type={type}
                labelText={labelText}
            />
        )
        inputElement = screen.getByTestId(inputTestId);
    });

    it('should render element', () => {
        expect(inputElement).toBeInTheDocument();
    });

    it('should add attributes correctly', () => {
        expect(inputElement.type).toBe(type);

        expect(inputElement.value).toBe(value);
    });

    it('should fire change event correctly', () => {
        fireEvent.change(inputElement, { target: { value: "Changed value" }});

        expect(changeFunctionMock).toBeCalled();

    });

    it('should fire blur event correctly', () => {
        fireEvent.blur(inputElement);

        expect(blurFunctionMock).toBeCalled();
    });

    it('should display label', () => {
        const labelElement: HTMLLabelElement = screen.getByTestId(inputLabelTestId);

        expect(labelElement).toBeInTheDocument();
        expect(labelElement).toHaveTextContent(labelText);
    });
})