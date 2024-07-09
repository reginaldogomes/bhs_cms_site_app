'use client'

import { useFormContext } from 'react-hook-form'

interface InputFieldProps {
  name: string
  label: string
  type?: string
  required?: boolean
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = 'text',
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
      <input
        id={name}
        type={type}
        {...register(name, { required })}
        className={`shadow appearance-none border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs italic">{label} is required.</p>
      )}
    </div>
  )
}

export default InputField
