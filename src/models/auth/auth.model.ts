import { UserData } from "../user/userModel";

export interface LoginResponse {
    message: string;
    token: string;
    data: UserData;
}

export interface AuthUser extends UserData {
    token: string;
}

export interface RefreshSesionAuth {
    message: string;
    token: string;
    data: UserData;
}