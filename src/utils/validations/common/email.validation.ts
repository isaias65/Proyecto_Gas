export const emailValidation = (email: string): string | null => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) return "El correo es obligatorio";
    if (!regex.test(email)) return "Correo inválido";
    return null;
};
