interface ButtonPrimaryProps {
    text: string;
    disabled?: boolean;
    onClick?: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, disabled, onClick }) => {
    return (
        <button
            className={`bg-primary-project-700 hover:bg-primary-project-800 disabled:bg-primary-project-500 w-full rounded-2xl py-3 text-white transition duration-300 ease-in-out disabled:cursor-not-allowed text-lg`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default ButtonPrimary;
