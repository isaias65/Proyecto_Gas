
import ButtonPrimary from "../components/common/button/ButtonPrimary";
import InputEmail from "../components/common/input/InputEmail";
import InputPassword from "../components/common/input/InputPassword";
import useAuth from "../hooks/auth/useAuth";
import useForm from "../hooks/common/useForm";

const Login = () => {
  const {formValues, onInputChange} = useForm({email: '', password: ''});
  const { login, loading } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await login(formValues.email, formValues.password);
  };
  return (
    <div className="flex h-screen">
      {/* Sección de la Imagen */}
      <div className="hidden md:block w-3/5 p-3">
        <img
          src="./img-japan.jpg"
          alt="Imagen de login"
          className="w-full h-full object-cover rounded-2xl "
        />
      </div>

      <div className="w-full md:w-2/5 flex items-center justify-center p-8">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-semibold text-gray-800">Bienvenido</h2>
          <p className="text-gray-500 mb-6">Inicia sesión en tu cuenta.</p>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <InputEmail 
              label="Correo electrónico"
              placeholder="Ingresa tu correo electrónico"
              name="email" 
              value={formValues.email} 
              onChange={onInputChange}
            />
            <InputPassword 
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              name="password"
              value={formValues.password}
              onChange={onInputChange}
            />
            {/* Olvidaste tu contraseña */}
            <div className="text-right mb-6">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón de Login */}
            <ButtonPrimary disabled={loading} text={loading ? "Cargando..." : "Iniciar sesión"} />

            {/* Registrarse */}
            <p className="text-sm text-gray-600 text-center mt-4">
              ¿No tienes una cuenta?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Regístrate aquí
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login