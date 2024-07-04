// components/ServiceSection.tsx
import React from 'react'
import ServiceCard from './ServiceCard'
import { FaCloud, FaLightbulb, FaCog } from 'react-icons/fa'

const services = [
  {
    title: 'Consultoria em Cloud',
    description:
      'Ajudamos sua empresa a migrar para a nuvem de forma eficiente e segura.',
    icon: <FaCloud className="h-8 w-8 text-blue-500" />,
  },
  {
    title: 'Transformação Digital',
    description:
      'Implementamos estratégias digitais para otimizar seus processos de negócios.',
    icon: <FaLightbulb className="h-8 w-8 text-blue-500" />,
  },
  {
    title: 'Gestão de Infraestrutura',
    description:
      'Oferecemos soluções de gestão de infraestrutura para garantir alta disponibilidade e performance.',
    icon: <FaCog className="h-8 w-8 text-blue-500" />,
  },
]

const ServiceSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  )
}

export default ServiceSection
