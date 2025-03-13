import { useState } from "react";
import { userModel } from "../../models/auth/userModel";
import userService from "../../services/auth/userService";

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const login = async (email: string, password: string) => {
        setLoading(true);
        setError("");

        try {
            const user = new userModel(email, password);
            const data = await userService.login(user);
            console.log("✅ Login exitoso:", data);
            // Guardar token o redirigir
        } catch (err) {
            setError("Error en el inicio de sesión");
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
};

export default useAuth;
