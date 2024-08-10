import { Logo } from "./Logo"
import Menu from "./Menu"

// src/components/Header.tsx
export default function Header() {
  return (
    <header className="fixed w-full bg-slate-600 bg-opacity-20 bg-fixed">
      <div className="container flex items-center justify-between px-1 py-8">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}
