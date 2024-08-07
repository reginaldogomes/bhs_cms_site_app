// components/ServiceSection.tsx
import ServiceCard from "./ServiceCard"
import { FaCloud, FaCog } from "react-icons/fa"

const services = [
  {
    title: "Consultoria em Cloud",
    description:
      "Ajudamos sua empresa a migrar para a nuvem de forma eficiente e segura.",
    icon: <FaCloud className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Oferecemos soluções de gestão de infraestrutura para garantir alta disponibilidade e performance.",
    icon: <FaCog className="h-8 w-8 text-blue-500" />,
  },
]

const ServiceSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold">Nossos Serviços</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  )
}

export default ServiceSection
