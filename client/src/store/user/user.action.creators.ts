import { UserActions, AuthActions} from './user.types';
import * as ActionTypes from './user.types';

import {ILoginResponse} from '../../models/auth/login';
import {IGetUserResponse} from '../../models/auth/getUser';

export const getUserAction = (): ActionTypes.GetUser => ({ type: UserActions.GET_USER });
export const getUserSuccessAction = (payload: IGetUserResponse): ActionTypes.GetUserSuccess => ({ type: UserActions.GET_USER_SUCCESS, payload });
export const getUserFailureAction = (): ActionTypes.GetUserFailure => ({ type: UserActions.GET_USER_FAILURE });

export const loginUserAction = (): ActionTypes.LoginUser => ({ type: AuthActions.LOGIN_USER });
export const loginUserSuccessAction = (payload: ILoginResponse): ActionTypes.LoginUserSuccess => ({ type: AuthActions.LOGIN_USER_SUCCESS, payload });
export const loginUserFailureAction = (payload: string): ActionTypes.LoginUserFailure => ({ type: AuthActions.LOGIN_USER_FAILURE, payload });

export const registerUserAction = (): ActionTypes.RegisterUser => ({ type: AuthActions.REGISTER_USER });
export const registerUserSuccessAction = (): ActionTypes.RegisterUserSuccess => ({ type: AuthActions.REGISTER_USER_SUCCESS });
export const registerUserFailureAction = (payload: string): ActionTypes.RegisterUserFailure => ({ type: AuthActions.REGISTER_USER_FAILURE, payload });

export const logOutAction = (): ActionTypes.UserLogout => ({ type: AuthActions.LOGOUT });
export const logOutDoneAction = (): ActionTypes.UserLogoutDone => ({ type: AuthActions.LOGOUT_DONE });

export const clearUserStateAction = (): ActionTypes.ClearUserState => ({ type: UserActions.CLEAR_STATE });
export const clearUserErrorAction = (): ActionTypes.ClearUserError => ({ type: UserActions.CLEAR_ERROR });
