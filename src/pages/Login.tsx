import { useState } from "react"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
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

      {/* Sección del Formulario */}
      <div className="w-full md:w-2/5 flex items-center justify-center p-8">
        <div className="max-w-sm w-full">
          {/* Título */}
          <h2 className="text-3xl font-semibold text-gray-800">Bienvenido</h2>
          <p className="text-gray-500 mb-6">Inicia sesión en tu cuenta.</p>

          {/* Campo de Correo */}
          <div className="relative mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <div className="flex items-center border-b-2 border-gray-300">
              <img src="./icon-email.svg" alt="Correo" className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="w-full p-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Campo de Contraseña */}
          <div className="relative mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="flex items-center border-b-2 border-gray-300">
              <img src="./icon-lock.svg" alt="Contraseña" className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                className="w-full p-2 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 focus:outline-none"
              >
                <img
                  src={showPassword ? "./icon-eyeOff.svg" : "./icon-eye.svg"}
                  alt="Mostrar contraseña"
                  className="w-5 h-5 text-gray-500"
                />
              </button>
            </div>
          </div>

          {/* Olvidaste tu contraseña */}
          <div className="text-right mb-6">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón de Login */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Iniciar sesión
          </button>

          {/* Registrarse */}
          <p className="text-sm text-gray-600 text-center mt-4">
            ¿No tienes una cuenta?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login