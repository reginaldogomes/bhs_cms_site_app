import SocialMediaComponent from '../SocialMedia'

// src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-accent-500">
      <div className="flex max-w-1280 mx-auto">
        <SocialMediaComponent />
        <p>&copy; {currentYear}</p>
      </div>
    </footer>
  )
}
