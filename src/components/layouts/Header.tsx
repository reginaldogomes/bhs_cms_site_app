import { Logo } from './Logo'
import Menu from './Menu'

// src/components/Header.tsx
export default function Header() {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center max-w-1280 mx-auto py-8 px-1 bg-fixed sticky">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}
