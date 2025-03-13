interface TogglePasswordProps {
    showPassword: boolean;
    onToggle: () => void;
  }
  
  const TogglePassword = ({ showPassword, onToggle }: TogglePasswordProps) => {
    return (
      <button type="button" onClick={onToggle} className="ml-2 focus:outline-none">
        <img
          src={showPassword ? "./icon-eyeOff.svg" : "./icon-eye.svg"}
          alt="Mostrar contraseña"
          className="w-5 h-5 text-gray-500"
        />
      </button>
    );
  };
  
  export default TogglePassword;
  