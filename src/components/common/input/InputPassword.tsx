import { useState } from "react";
import TogglePassword from "../../icon/TogglePassword";
import { InputType } from "../../../types/InputTypes";
import '../../../App.css'

const InputPassword = ({ label, placeholder, name, value, onChange, error }: InputType) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="flex flex-col">
            <label className="block text-base text-gray-500">{label}</label>
            <div className={`flex items-center border-b-2 transition-colors ${isFocused ? "border-input-active" : "border-gray-500"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                     fill="none" viewBox="0 0 24 24" 
                     strokeWidth={1.5} 
                     stroke={isFocused ? "#212730" : "currentColor"} 
                     className="size-6"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

                <input
                    className="w-full p-2 focus:outline-none placeholder-input-active transition-colors"
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <TogglePassword showPassword={showPassword} onToggle={() => setShowPassword(!showPassword)} />
            </div>
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
};

export default InputPassword;
