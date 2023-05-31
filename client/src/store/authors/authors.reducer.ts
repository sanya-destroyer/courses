import {AuthorsAction, AuthorsActions, AuthorsLoadingType, IAuthorsInitialState} from './authors.types';


const initialState: IAuthorsInitialState = {
    loading: AuthorsLoadingType.NONE,
    authors: [],
    error: ''
}

export const authorsReducer = (state = initialState, action: AuthorsAction) => {
    switch (action.type) {
        case AuthorsActions.GET_AUTHORS:
            return {
                ...state,
                loading: AuthorsLoadingType.LOADING_AUTHORS
            }

        case AuthorsActions.GET_AUTHORS_SUCCESS:
            return {
                ...state,
                loading: AuthorsLoadingType.NONE,
                authors: action.payload
            }

        case AuthorsActions.GET_AUTHORS_FAILURE:
            return {
                ...state,
                loading: AuthorsLoadingType.NONE,
                error: action.payload
            }

        case AuthorsActions.CREATE_AUTHOR:
            return {
                ...state,
                loading: AuthorsLoadingType.AUTHORS_ACTION
            }

        case AuthorsActions.CREATE_AUTHOR_SUCCESS:
            return {
                ...state,
                loading: AuthorsLoadingType.NONE,
                authors: [...state.authors, action.payload]
            }

        case AuthorsActions.CREATE_AUTHOR_FAILURE:
            return {
                ...state,
                loading: AuthorsLoadingType.NONE,
                error: action.payload
            }

        case AuthorsActions.CLEAR_STATE:
            return initialState;

        default:
            return state;
    }
}