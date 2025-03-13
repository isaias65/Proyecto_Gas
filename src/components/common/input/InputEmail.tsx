import { InputType } from "../../../types/InputTypes"

const InputEmail = ({label, placeholder, name, value, onChange}: InputType) => {
  return (
    <div className="relative mb-6">
            <label className="block text-sm font-medium text-gray-700">
              {label}
            </label>
            <div className="flex items-center border-b-2 border-gray-300">
              <img src="./icon-email.svg" alt="Correo" className="w-5 h-5 text-gray-500 mr-2" />
              <input
                className="w-full p-2 focus:outline-none"
                type="email"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
              />
            </div>
          </div>
  )
}

export default InputEmail