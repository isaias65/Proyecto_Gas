import { SessionManager } from "../../utils/validations/sesionStorage/sessionStorageUtil";
import { apiClient } from "../ApiService";
import { AxiosError, AxiosResponse } from "axios";
import {  LoginResponse } from "../../models/auth/auth.model";
import { IAuth, UserData } from "../../models/user/userModel";

const authSession = new SessionManager<string>("token");

export const loginService = async (credentials: IAuth): Promise<LoginResponse> => {
    try {
        const response: AxiosResponse<LoginResponse> = await apiClient.post("/auth/login", credentials);
        authSession.save(response.data.token);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        throw axiosError.response?.data || "Error desconocido en el inicio de sesión";
    }
};

export const refreshUserData = async (): Promise<UserData | null> => {
    try {
        const token = authSession.get(); // 🔹 Obtener el token de sessionStorage
        if (!token) {
            console.warn("⚠️ No hay token disponible. Redirigiendo al login...");
            return null;
        }

        const response: AxiosResponse<UserData> = await apiClient.get("/auth/me");
        return response.data;
    } catch (error) {
        console.error("❌ Error al actualizar los datos del usuario:", error);
        return null;
    }
};
