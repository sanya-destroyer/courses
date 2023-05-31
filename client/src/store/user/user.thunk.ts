import {Dispatch} from "redux";

import {
    getUserAction,
    getUserSuccessAction,
    getUserFailureAction,
    loginUserAction,
    loginUserSuccessAction,
    loginUserFailureAction,
    logOutAction,
    logOutDoneAction,
    registerUserAction,
    registerUserSuccessAction,
    registerUserFailureAction
} from './user.action.creators';

import {IGetUserResponse} from '../../models/auth/getUser';
import {ILoginCredentials, ILoginResponse} from '../../models/auth/login';
import {IRegisterCredentials} from '../../models/auth/register';

import {loginUser, logOut, registerUser} from '../../services/auth.service';
import {getUser} from '../../services/user.service';

import {AppThunk} from "../index";


export const getUserThunkAction = (): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(getUserAction());

        try {
            const response: IGetUserResponse = await getUser();

            dispatch(getUserSuccessAction(response));
        } catch (error: any) {
            dispatch(getUserFailureAction());

        }
    }
}

export const loginUserThunkAction = (credentials: ILoginCredentials): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(loginUserAction());

        try {
            const response: ILoginResponse = await loginUser(credentials);

            dispatch(loginUserSuccessAction(response));
        } catch (error: any) {
            dispatch(loginUserFailureAction(error as string));
        }
    }
}

export const registerUserThunkAction = (credentials: IRegisterCredentials): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(registerUserAction());

        try {
            await registerUser(credentials);

            dispatch(registerUserSuccessAction());
        } catch (error: any) {
            dispatch(registerUserFailureAction(error as string));
        }
    }
}

export const logoutThunkAction = (): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(logOutAction());
        try {
            await logOut();

            dispatch(logOutDoneAction());
        } catch (error) {
            dispatch(logOutDoneAction());
        }
    }
}
