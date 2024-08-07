import { useFormContext } from "react-hook-form"

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
        className="mb-2 block text-sm font-bold text-gray-700"
      >
        {label}
      </label>
      <textarea
        id={name}
        {...register(name, { required })}
        className={`appearance-none border shadow ${errors[name] ? "border-red-500" : "border-gray-300"} focus:shadow-outline w-full rounded px-3 py-2 leading-tight text-gray-700 focus:outline-none`}
      />
      {errors[name] && (
        <p className="text-xs italic text-red-500">{label} is required.</p>
      )}
    </div>
  )
}

export default TextareaField
