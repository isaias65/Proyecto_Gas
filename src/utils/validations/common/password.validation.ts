export const passwordValidation = (password: string, passwordConfirm?: string): string | null => {
    if (!password) return "La contraseña es obligatoria";
    if (password.length < 6) return "Debe tener al menos 6 caracteres";

    if (passwordConfirm !== undefined && password !== passwordConfirm) {
        return "Las contraseñas no coinciden";
    }

    return null;
};
