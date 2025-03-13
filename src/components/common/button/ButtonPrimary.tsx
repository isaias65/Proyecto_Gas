interface ButtonPrimaryProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, disabled, onClick }) => {
  return (
    <button
      className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary