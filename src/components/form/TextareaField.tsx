import { useFormContext } from 'react-hook-form'

interface TextareaFieldProps {
  name: string
  label: string
  required?: boolean
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  name,
  label,
  required = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        id={name}
        {...register(name, { required })}
        className={`shadow appearance-none border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs italic">{label} is required.</p>
      )}
    </div>
  )
}

export default TextareaField
