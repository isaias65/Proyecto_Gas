import { IUserAuth } from "../../types/userTypes";

export class userModel implements IUserAuth{
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}