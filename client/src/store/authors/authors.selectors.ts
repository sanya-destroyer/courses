import {RootState} from '../index';

export const selectAuthors = (state: RootState) => state.authors.authors;
export const selectAuthorsLoading = (state: RootState) => state.authors.loading;
export const selectAuthorsError = (state: RootState) => state.authors.error;