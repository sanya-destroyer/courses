import {RootState} from '../index';

import {UserRole} from '../../models/user';
import {UserLoadingType} from './user.types';


export const selectIsAuth = (state: RootState) => !!state.user.token;
export const selectUser = (state: RootState) => state.user.user;

export const selectAuthError = (state: RootState) => state.user.error;

export const selectAuthLoadingType = (state: RootState) => state.user.loading;
export const selectAuthIsLoading = (state: RootState) => state.user.loading === UserLoadingType.LOADING_AUTH;
export const selectAuthIsUserLoading = (state: RootState) => state.user.loading === UserLoadingType.LOADING_USER;

export const selectUserRole = (state: RootState) => state.user.user?.role;
export const selectUserIsAdmin = (state: RootState) => state.user.user?.role === UserRole.ADMIN;

export const selectIsRegisterSuccess = (state: RootState) => state.user.success;
