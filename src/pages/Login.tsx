import ButtonPrimary from "../components/common/button/ButtonPrimary";
import InputEmail from "../components/common/input/InputEmail";
import InputPassword from "../components/common/input/InputPassword";
import { useAuthHook } from "../hooks/auth/useAuth";

const Login = () => {
    const { handleSubmit, formValues, onInputChange, loading, errors, messageError } = useAuthHook();

    return (
        <div className="flex h-screen">
            {/* Sección de la Imagen */}
            <div className="hidden w-3/5 p-3 md:block">
                <img
                    src="https://i.pinimg.com/736x/1c/87/6b/1c876bd33fb8ae8870c7523d07fffae5.jpg"
                    alt="Imagen de login"
                    className="h-full w-full rounded-2xl object-cover"
                />
            </div>

            <div className="relative flex w-full flex-col items-center justify-center p-8 md:w-2/5">
                <div className="absolute top-0 flex w-full justify-center p-8 md:justify-end">
                    <img src="/public/img/logoVixlia_black.png" alt="Logo de la empresa" className="w-44 md:w-32" />
                </div>
                <div className="flex w-full max-w-md flex-col gap-9">
                    <div className="flex flex-col items-center justify-center gap-1.5 md:items-start">
                        <h2 className="text-primary-black-950 text-center text-3xl font-semibold md:text-left">Potencia tus Ventas</h2>
                        <p className="text-primary-black-800 text-center text-base md:text-left">
                            Accede a tu cuenta y gestiona tu negocio con facilidad.
                        </p>
                    </div>
                    <form className="flex flex-col gap-14" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-7">
                            <InputEmail
                                label="Correo electrónico"
                                placeholder="Ingresa tu correo electrónico"
                                name="email"
                                value={formValues.email}
                                onChange={onInputChange}
                                error={errors.email}
                            />
                            <InputPassword
                                label="Contraseña"
                                placeholder="Ingresa tu contraseña"
                                name="password"
                                value={formValues.password}
                                onChange={onInputChange}
                                error={errors.password}
                            />
                        </div>
                        {/* Botón de Login */}
                        <ButtonPrimary disabled={loading} text={loading ? "Cargando..." : "Iniciar sesión"} />
                        {messageError && <p className="text-center text-sm text-red-600">{messageError}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
