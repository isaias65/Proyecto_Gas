import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { refreshUserData } from "../../services/auth/authService";
import { AuthUser, LoginResponse } from "../../models/auth/auth.model";

interface AuthContextProps {
    user: AuthUser | null;
    login: (loginResponse: LoginResponse) => void;
    logout: () => void;
    refreshUserData: () => Promise<void>;
}
// Crear el contexto (se inicializa con valores vacíos solo para la estructura)
const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: () => {},
    logout: () => {},
    refreshUserData: async () => {},
});

// Hook personalizado para usar el contexto
export const useAuthContext = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
};

// Componente Provider que maneja el estado de autenticación
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const sessionKey = "authUser"; // Clave en sessionStorage
    const navigate = useNavigate();

    // Función para iniciar sesión
    const login = (loginResponse: LoginResponse) => {
        if (!loginResponse || !loginResponse.token || !loginResponse.data) {
            console.error("❌ Error: Respuesta de inicio de sesión inválida");
            return;
        }
        const authUser: AuthUser = { ...loginResponse.data, token: loginResponse.token };
        setUser(authUser);
        sessionStorage.setItem(sessionKey, JSON.stringify(authUser));
        navigate("/dashboard");
    };

    // Función para cerrar sesión
    const logout = () => {
        setUser(null);
        sessionStorage.removeItem(sessionKey);
        navigate("/login");
    };

    // Función para actualizar los datos del usuario desde la API
    const handleRefreshUserData = async () => {
        try {
            const updatedUser = await refreshUserData();
            if (!updatedUser) {
                console.warn("⚠️ No se pudo actualizar el usuario, cerrando sesión...");
                logout();
                return;
            }
            setUser(prevUser => prevUser ? { ...updatedUser, token: prevUser.token } : null);
            sessionStorage.setItem(sessionKey, JSON.stringify({ ...updatedUser, token: user?.token || "" }));
        } catch (error) {
            console.error("❌ Error al actualizar los datos del usuario:", error);
            logout();
        }
    };

    // Efecto para recuperar la sesión cuando la página se recarga
    useEffect(() => {
        const storedUser = sessionStorage.getItem(sessionKey);
        if (storedUser) {
            const parsedUser: AuthUser = JSON.parse(storedUser);
            setUser(parsedUser);
            handleRefreshUserData(); // Actualiza la información llamando a la API
        } else {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ user, login, logout, refreshUserData: handleRefreshUserData }}>
            {children}
        </AuthContext.Provider>
    );
};
