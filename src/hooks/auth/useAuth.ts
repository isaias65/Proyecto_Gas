import React, { useState } from "react";
import useForm from "../common/useForm";
import { authValidation, IAuthErrors } from "../../utils/auth.validation";
import { useAuthContext } from "../../context/auth/AuthContext";
import { loginService } from "../../services/auth/authService";
import { IAuth } from "../../models/user/userModel";

export const useAuthHook = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<IAuthErrors>({});
    const [messageError, setMessageError] = useState<string | null>(null);

    const { formValues, onInputChange } = useForm<IAuth>({ email: "yosec@gmail.com", password: "12345678" });
    const { login } = useAuthContext();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setErrors({});
        setMessageError(null);
        setLoading(true);

        const validationErrors = authValidation(formValues);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        try {
            const credentials: IAuth = { email: formValues.email, password: formValues.password };
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const response = await loginService(credentials);
            login(response);
            console.log(response);
        } catch (err: any) {
            setMessageError(err.response?.data?.message || err.message || "Ocurrió un error inesperado.");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return { handleSubmit, formValues, onInputChange, loading, errors, messageError };
};
