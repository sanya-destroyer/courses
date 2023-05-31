import {AuthActions, IUserInitialState, UserAction, UserActions, UserLoadingType} from './user.types';


const initialState: IUserInitialState = {
    user: null,
    token: '',
    loading: UserLoadingType.NONE,
    error: '',
    success: false
}

export const userReducer = (state: IUserInitialState = initialState, action: UserAction) => {
    switch (action.type) {
        case AuthActions.LOGIN_USER:
            return {
                ...state,
                loading: UserLoadingType.LOADING_AUTH
            }
        case AuthActions.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: UserLoadingType.NONE,
                error: '',
                user: action.payload.user,
                token: action.payload.token
            }
        case AuthActions.LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: UserLoadingType.NONE,
                error: action.payload,
            }
        case AuthActions.REGISTER_USER:
            return {
                ...state,
                loading: UserLoadingType.LOADING_AUTH,
                error: ''
            }

        case AuthActions.REGISTER_USER_FAILURE:
            return  {
                ...state,
                loading: UserLoadingType.NONE,
                error: action.payload
            }

        case AuthActions.REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: UserLoadingType.NONE,
                error: '',
                success: true
            }

        case UserActions.GET_USER:
            return {
                ...state,
                loading: UserLoadingType.LOADING_USER,
            }

        case UserActions.GET_USER_SUCCESS:
            return {
                ...state,
                loading: UserLoadingType.NONE,
                user: action.payload.user,
                token: action.payload.token
            }

        case UserActions.GET_USER_FAILURE:
            return {
                ...state,
                loading: UserLoadingType.NONE,
            }

        case AuthActions.LOGOUT:
            return {
                ...state,
                loading: UserLoadingType.LOADING_AUTH
            }

        case AuthActions.LOGOUT_DONE:
            return  initialState

        case UserActions.CLEAR_STATE:
            return initialState

        case UserActions.CLEAR_ERROR:
            return {
                ...state,
                error: ''
            }

        default:
            return state;
    }
}
