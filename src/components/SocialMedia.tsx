// Tipos para os itens de redes sociais e o objeto de links
type SocialMedia = {
  name: string
  link: string
  icon: React.ReactNode
}

type SocialMediaLinks = {
  items: SocialMedia[]
}

// Objeto contendo os links de redes sociais
const socialMediaLinks: SocialMediaLinks = {
  items: [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com',
      icon: <i className="fab fa-facebook"></i>,
    },
    {
      name: 'Twitter',
      link: 'https://www.twitter.com',
      icon: <i className="fab fa-twitter"></i>,
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com',
      icon: <i className="fab fa-linkedin"></i>,
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com',
      icon: <i className="fab fa-instagram"></i>,
    },
  ],
}

const SocialMediaComponent: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 p-4 bg-gray-200">
      {socialMediaLinks.items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          {item.icon}
          <span className="sr-only">{item.name}</span>
        </a>
      ))}
    </div>
  )
}

export default SocialMediaComponent
