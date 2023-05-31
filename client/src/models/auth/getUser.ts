import {IUser} from '../user';

export interface IGetUserResponse {
    user: IUser;
    token: string;
}

export interface IGetUserSuccess {
    successful: true;
    result: IUser;
}