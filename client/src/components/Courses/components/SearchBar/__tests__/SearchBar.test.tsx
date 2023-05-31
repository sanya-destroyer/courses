import {render, screen} from '@testing-library/react';

import {getMockedStore} from '../../../../../tests/mocks/store';

import TestTemplate from '../../../../../tests/utils/TestTemplate';

import SearchBar from '../SearchBar';

const searchBarTestId = "search-bar";
const searchBarAddButtonTestId = "search-bar-add";

describe("Search bar element", () => {

   beforeEach(() => {
       const mockedStore = getMockedStore({});

       render(
           <TestTemplate store={mockedStore}>
               <SearchBar />
           </TestTemplate>
       )
   });

    it('should render search bar', () => {
       expect(screen.getByTestId(searchBarTestId)).toBeInTheDocument();
    });

    it('should not render add course button', () => {
       expect(screen.queryByTestId(searchBarAddButtonTestId)).not.toBeInTheDocument();
    });

    it('should render add course button', () => {
        const mockedAdminStore = getMockedStore({isAdmin: true});

        render(
            <TestTemplate store={mockedAdminStore}>
                <SearchBar />
            </TestTemplate>
        );

        expect(screen.getByTestId(searchBarAddButtonTestId)).toBeInTheDocument();
    })
});