import {render, screen} from '@testing-library/react';

import getLoader from '../utils/getLoader';

const loaderTestId = "loader-element"

describe('getLoader function', () => {

    it('should render loader', () => {
        const show = true;

        const loader = getLoader(show);

        render(loader as JSX.Element);

        expect(screen.getByTestId(loaderTestId)).toBeInTheDocument();
    });

    it('should not render loader', () => {
        const show = false;

        const loader = getLoader(show);

        expect(loader).toBeUndefined();
    });
})