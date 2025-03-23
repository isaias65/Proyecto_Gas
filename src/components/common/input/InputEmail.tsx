import { useState } from "react";
import { InputType } from "../../../types/InputTypes";

const InputEmail = ({ label, placeholder, name, value, onChange, error }: InputType) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="flex flex-col">
            <label className="block text-base text-primary-black-900 font-medium">{label}</label>
            <div className={`flex items-center border-b-2 transition-colors ${isFocused ? "border-primary-project-700 text-primary-project-700" : "border-gray-400"}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                </svg>
                <input
                    className="placeholder-gray-500 w-full p-2 transition-colors focus:outline-none text-primary-black-800"
                    type="email"
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
};

export default InputEmail;
