import SocialMediaComponent from "../SocialMedia"

// src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent-500 w-full">
      <div className="max-w-1280 mx-auto flex flex-col gap-4 py-16 text-center">
        <SocialMediaComponent />
        <p className="text-center text-sm">
          &copy; {currentYear} - Reginaldo Gomes. Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
