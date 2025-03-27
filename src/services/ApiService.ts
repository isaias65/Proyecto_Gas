import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from "axios";
import { SessionManager } from "../utils/validations/sesionStorage/sessionStorageUtil";

const authSession = new SessionManager<string>("token");

export const apiClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000", // Reemplaza con la URL real de tu backend
    timeout: 10000, // 10 segundos de timeout
    headers: {
        "Content-Type": "application/json",
    },
});

// 📌 Interceptor para agregar el token automáticamente si existe
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
        try {
            const token = authSession.get(); // 🔹 Obtener token de sessionStorage
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return Promise.resolve(config); // 🔥 Se usa Promise.resolve()
        } catch (error) {
            console.error("⚠️ Error al obtener el token de sessionStorage:", error);
            return Promise.reject(error); // 🔥 Esto ya no dará error
        }
    },
    async (error: AxiosError) => {
        console.error("⚠️ Error en la configuración de la solicitud:", error);
        return Promise.reject(error);
    }
);
