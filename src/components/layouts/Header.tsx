import { Logo } from './Logo'

// src/components/Header.tsx
export default function Header() {
  return (
    <header className="w-full">
      <div className="flex max-w-1280 mx-auto py-8">
        <Logo />
      </div>
    </header>
  )
}
