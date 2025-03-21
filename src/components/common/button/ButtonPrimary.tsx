interface ButtonPrimaryProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, disabled, onClick }) => {
  return (
    <button
      className={`w-full bg-buttom-primary text-white py-3 rounded-2xl transition duration-300 ease-in-out  hover:bg-buttom-hover disabled:bg-gray-400 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary