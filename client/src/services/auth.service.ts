import axios from "../utils/axios";

import {IRegisterCredentials, IRegisterSuccess} from "../models/auth/register";

import {ILoginCredentials, ILoginSuccess} from "../models/auth/login";

export const loginUser = async (credentials: ILoginCredentials) => {

    try {
        const { data } = await axios.post<ILoginSuccess>('/login', credentials);

        const [,token] = data.result.split(' ');

        localStorage.setItem('token', token);

        return { token, user: data.user };

    } catch (err: any) {
        throw err?.response?.data?.result ?? 'Sorry we could not sign you in';
    }
}

export const registerUser = async (credentials: IRegisterCredentials) => {
    try {
        await axios.post<IRegisterSuccess>('/register', credentials);
    } catch (err: any) {
        const responseError: string | string[] = err?.response?.data?.errors;

        if( !responseError ) {
            throw 'Sorry we could not sign you in'
        }

        if ( Array.isArray(responseError) ) {
            throw responseError.join('or');
        }

        throw responseError
    }
}

export const logOut = async () => {
    try {
        const { data } = await axios.delete('/logout');

        localStorage.removeItem('token');

    } catch (error: any) {
        localStorage.removeItem('token');

    }
}
