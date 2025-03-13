import { useState } from "react";
import TogglePassword from "../../icon/TogglePassword";
import { InputType } from "../../../types/InputTypes";



const InputPassword = ({label, placeholder, name, value, onChange}: InputType) => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {label}
            </label>
            <div className="flex items-center border-b-2 border-gray-300">
              <img src="./icon-lock.svg" alt="Contraseña" className="w-5 h-5 text-gray-500 mr-2" />
              <input
                className="w-full p-2 focus:outline-none"
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
              />
                <TogglePassword showPassword={showPassword} onToggle={() => setShowPassword(!showPassword)} />
            </div>
          </div>
  )
}

export default InputPassword