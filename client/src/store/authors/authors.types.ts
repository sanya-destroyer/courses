import {IAuthor} from '../../models/author';


export interface IAuthorsInitialState {
    loading: AuthorsLoadingType;
    authors: IAuthor[];
    error: string;
}

export enum AuthorsLoadingType {
    NONE="NONE",
    LOADING_AUTHORS="LOADING_COURSES",
    AUTHORS_ACTION="COURSE_ACTION"
}

export enum AuthorsActions {
    GET_AUTHORS="GET_AUTHORS",
    GET_AUTHORS_SUCCESS="GET_AUTHORS_SUCCESS",
    GET_AUTHORS_FAILURE="GET_AUTHORS_FAILURE",

    CREATE_AUTHOR="CREATE_AUTHOR",
    CREATE_AUTHOR_SUCCESS="CREATE_AUTHOR_SUCCESS",
    CREATE_AUTHOR_FAILURE="CREATE_AUTHOR_FAILURE",

    CLEAR_STATE="CLEAR_STATE",
}

// **********************
// **********************

export interface GetAuthors {
    type: AuthorsActions.GET_AUTHORS
}

export interface GetAuthorsSuccess {
    type: AuthorsActions.GET_AUTHORS_SUCCESS;
    payload: IAuthor[];
}

export interface GetAuthorsFailure {
    type: AuthorsActions.GET_AUTHORS_FAILURE;
    payload: string;
}

// **********************
// **********************

export interface CreateAuthor {
    type: AuthorsActions.CREATE_AUTHOR;
}

export interface CreateAuthorSuccess {
    type: AuthorsActions.CREATE_AUTHOR_SUCCESS
    payload: IAuthor;
}

export interface CreateAuthorFailure {
    type: AuthorsActions.CREATE_AUTHOR_FAILURE
    payload: string;
}

// **********************
// **********************

export interface ClearAuthorState {
    type: AuthorsActions.CLEAR_STATE;
}

// **********************
// **********************

export type AuthorsAction = GetAuthors
                        | GetAuthorsSuccess
                        | GetAuthorsFailure
                        | CreateAuthor
                        | CreateAuthorSuccess
                        | CreateAuthorFailure
                        | ClearAuthorState
