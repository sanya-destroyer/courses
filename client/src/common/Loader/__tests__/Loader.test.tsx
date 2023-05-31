import {render, screen} from '@testing-library/react';

import Loader from '../Loader';

const loaderTestId = "loader-element"

describe('Loader element', () => {

    it('should render component', () => {
        render(<Loader />);

        expect(screen.getByTestId(loaderTestId)).toBeInTheDocument();
    });

    it('should change fontsize of loader based on props', () => {
        const defaultFontSize = 20;
        const loaderSize = 1.5;
        const expectedFontSize = defaultFontSize * loaderSize + "px"

        render(<Loader size={1.5}/>)

        const loaderElement = screen.getByTestId(loaderTestId);

        expect(loaderElement.style.fontSize).toBe(expectedFontSize);
    })
})