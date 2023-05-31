export interface IUser {
    id: string;
    email: string;
    name: string;
    token: string;
    role: UserRole;
}

export enum UserRole {
    USER="user",
    ADMIN="admin"
}