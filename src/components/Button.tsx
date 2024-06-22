// src/components/Button.tsx
import React, { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>
}
