import { IUserAuth } from "../types/userTypes";
import { emailValidation } from "./validations/common/email.validation";
import { passwordValidation } from "./validations/common/password.validation";

export interface IAuthErrors {
    email?: string;
    password?: string;
}

export const authValidation = (data: IUserAuth): IAuthErrors => {
    let errors: IAuthErrors = {};

    if (data.email !== undefined) {
        const emailError = emailValidation(data.email);
        if (emailError) errors.email = emailError;
    }

    if (data.password !== undefined) {
        const passwordError = passwordValidation(data.password);
        if (passwordError) errors.password = passwordError;
    }

    return errors;
};
