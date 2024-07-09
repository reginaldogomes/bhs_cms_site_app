type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

type ButtonProps = {
  label: string
  onClick: () => void
  variant?: ButtonVariant
}

const buttonStyles: { [key in ButtonVariant]: string } = {
  primary: 'bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  secondary:
    'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
  success:
    'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
  danger: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
}

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button
      className={`${buttonStyles[variant]} focus:outline-none`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default ButtonComponent
