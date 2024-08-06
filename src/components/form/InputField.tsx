"use client"

import { useFormContext } from "react-hook-form"

interface InputFieldProps {
  name: string
  label: string
  type?: string
  required?: boolean
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = "text",
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
        className="text-gray-700 mb-2 block text-sm font-bold"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name, { required })}
        className={`appearance-none border shadow ${errors[name] ? "border-red-500" : "border-gray-300"} text-gray-700 focus:shadow-outline w-full rounded px-3 py-2 leading-tight focus:outline-none`}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs italic">{label} is required.</p>
      )}
    </div>
  )
}

export default InputField
