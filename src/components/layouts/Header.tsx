import { Logo } from "./Logo"
import Menu from "./Menu"

// src/components/Header.tsx
export default function Header() {
  return (
    <header className="w-full">
      <div className="sticky mx-auto flex max-w-1280 items-center justify-between bg-fixed px-1 py-8">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}
