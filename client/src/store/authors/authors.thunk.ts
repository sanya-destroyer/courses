import {Dispatch} from "redux";

import {
    addAuthorAction,
    addAuthorFailureAction,
    addAuthorSuccessAction,
    getAuthorsAction,
    getAuthorsFailureAction,
    getAuthorsSuccessAction
} from './authors.action.creators';

import {addAuthor, getAuthors} from '../../services/authors.service';

import {IAuthorAction} from '../../models/author';

import {AppThunk} from "../index";


export const getAuthorsThunkAction = (): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(getAuthorsAction());

        try {
            const authors = await getAuthors();

            dispatch(getAuthorsSuccessAction(authors));
        } catch (error) {
            dispatch(getAuthorsFailureAction(error as string));

        }
    }
}

export const addAuthorThunkAction = (author: IAuthorAction): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(addAuthorAction());

        try {
            const newAuthor = await addAuthor(author);

            dispatch(addAuthorSuccessAction(newAuthor));
        } catch (error) {
            dispatch(addAuthorFailureAction(error as string));

        }
    }
}
