import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

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
      name: "GitHub",
      link: "https://www.github.com/reginaldogomes",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/reginaldogomesalves/",
      icon: <FaInstagram />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/__reginaldogomes_",
      icon: <FaLinkedin />,
    },
  ],
}

const SocialMediaComponent: React.FC = () => {
  return (
    <div className="bg-gray-200 flex justify-center space-x-4 p-4">
      {socialMediaLinks.items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          {item.icon}
          <span className="sr-only text-4xl">{item.name}</span>
        </a>
      ))}
    </div>
  )
}

export default SocialMediaComponent
