import {AuthorsActions} from './authors.types';
import * as ActionTypes from './authors.types';
import {IAuthor} from '../../models/author';


export const getAuthorsAction = (): ActionTypes.GetAuthors => ({ type: AuthorsActions.GET_AUTHORS });
export const getAuthorsSuccessAction = (payload: IAuthor[]): ActionTypes.GetAuthorsSuccess => ({ type: AuthorsActions.GET_AUTHORS_SUCCESS, payload });
export const getAuthorsFailureAction = (payload: string): ActionTypes.GetAuthorsFailure => ({ type: AuthorsActions.GET_AUTHORS_FAILURE, payload });

export const addAuthorAction = (): ActionTypes.CreateAuthor => ({ type: AuthorsActions.CREATE_AUTHOR });
export const addAuthorSuccessAction = (payload: IAuthor): ActionTypes.CreateAuthorSuccess => ({ type: AuthorsActions.CREATE_AUTHOR_SUCCESS, payload });
export const addAuthorFailureAction = (payload: string): ActionTypes.CreateAuthorFailure => ({ type: AuthorsActions.CREATE_AUTHOR_FAILURE, payload });

export const clearAuthorStateAction = (): ActionTypes.ClearAuthorState => ({ type: AuthorsActions.CLEAR_STATE });
