import {IUser} from "../../models/user";
import {ILoginResponse} from '../../models/auth/login';
import {IGetUserResponse} from '../../models/auth/getUser';

export interface IUserInitialState {
    user: IUser | null;
    token: string;
    loading: UserLoadingType;
    error: string;
    success: boolean;
}

export enum UserLoadingType {
    NONE="NONE",
    LOADING_USER="LOADING_USER",
    LOADING_AUTH="LOADING_AUTH",
}

export enum UserActions {
    GET_USER="GET_USER",
    GET_USER_SUCCESS="GET_USER_SUCCESS",
    GET_USER_FAILURE="GET_USER_FAILURE",

    CLEAR_STATE="CLEAR_STATE",
    CLEAR_ERROR="CLEAR_ERROR"
}

export enum AuthActions {
    REGISTER_USER="REGISTER_USER",
    REGISTER_USER_SUCCESS="REGISTER_USER_SUCCESS",
    REGISTER_USER_FAILURE="REGISTER_USER_FAILURE",

    LOGIN_USER="LOGIN_USER",
    LOGIN_USER_SUCCESS="LOGIN_USER_SUCCESS",
    LOGIN_USER_FAILURE="LOGIN_USER_FAILURE",

    LOGOUT="LOGOUT",
    LOGOUT_DONE="LOGOUT_DONE"
}

// **********************
// **********************

export interface LoginUser {
    type: AuthActions.LOGIN_USER,
}

export interface LoginUserSuccess {
    type: AuthActions.LOGIN_USER_SUCCESS,
    payload: ILoginResponse
}

export interface LoginUserFailure {
    type: AuthActions.LOGIN_USER_FAILURE,
    payload: string
}

// **********************
// **********************

export interface RegisterUser {
    type: AuthActions.REGISTER_USER,
}

export interface RegisterUserSuccess {
    type: AuthActions.REGISTER_USER_SUCCESS,
}

export interface RegisterUserFailure {
    type: AuthActions.REGISTER_USER_FAILURE,
    payload: string
}

// **********************
// **********************

export interface GetUser {
    type: UserActions.GET_USER,
}

export interface GetUserFailure {
    type: UserActions.GET_USER_FAILURE,
}

export interface GetUserSuccess {
    type: UserActions.GET_USER_SUCCESS,
    payload: IGetUserResponse
}

// **********************
// **********************

export interface UserLogout {
    type: AuthActions.LOGOUT
}

export interface UserLogoutDone {
    type: AuthActions.LOGOUT_DONE
}

// **********************

export interface ClearUserState {
    type: UserActions.CLEAR_STATE
}

export interface ClearUserError {
    type: UserActions.CLEAR_ERROR
}

// **********************
// **********************

export type UserAction =
      GetUser
    | GetUserSuccess
    | GetUserFailure
    | LoginUser
    | LoginUserSuccess
    | LoginUserFailure
    | RegisterUser
    | RegisterUserSuccess
    | RegisterUserFailure
    | UserLogout
    | UserLogoutDone
    | ClearUserError
    | ClearUserState
