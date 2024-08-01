import SocialMediaComponent from '../SocialMedia'

// src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-accent-500">
      <div className="flex flex-col gap-4 max-w-1280 mx-auto text-center py-16">
        <SocialMediaComponent />
        <p className="text-center text-sm">
          &copy; {currentYear} - Reginaldo Gomes. Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
