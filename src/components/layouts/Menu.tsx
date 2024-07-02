// Definição do tipo para um item do menu
type MenuItem = {
  name: string
  link: string
}

// Definição do tipo para o menu
type Menu = {
  items: MenuItem[]
}

const menu = {
  items: [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
  ],
}

const Menu: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {menu.items.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="text-accent-500 hover:text-gray-300">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
