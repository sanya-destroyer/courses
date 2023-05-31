import {cleanup, render, screen} from '@testing-library/react';

import Header from '../Header';

import {getMockedStore} from '../../../tests/mocks/store';
import TestTemplate from '../../../tests/utils/TestTemplate';

const headerTestId = "header";
const headerLogoTestId = "header-logo";
const headerUsernameTestId = "header-username";


describe("Header component", () => {

    beforeEach(() => {
        const mockedStore = getMockedStore({});

        render(
            <TestTemplate store={mockedStore}>
                <Header />
            </TestTemplate>
        );
    })

    it('should render header', () => {
       expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
    });

    it('should render logo', () => {
        expect(screen.getByTestId(headerLogoTestId)).toBeInTheDocument();
    });

    it('should display greetings with username', () => {
        expect(screen.getByTestId(headerUsernameTestId)).toHaveTextContent("Username");
    });

    it('should not display greetings', () => {
        cleanup();

        const mockedStoreWithoutAuth = getMockedStore({ isAuth: false });

        render(
            <TestTemplate store={mockedStoreWithoutAuth}>
               <Header/>
            </TestTemplate>
        );

        expect(screen.queryByTestId(headerUsernameTestId)).not.toBeInTheDocument();
    });
});