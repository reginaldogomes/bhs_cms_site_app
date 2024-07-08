// components/ServiceCard.tsx
import React from 'react'

interface Service {
  title: string
  description: string
  icon: JSX.Element
}

interface ServiceCardProps {
  service: Service
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <div className="flex items-center justify-center h-16 w-16 bg-accent-500 mb-4 rounded-xl">
        {service.icon}
      </div>
      <div className="font-bold text-xl mb-2">{service.title}</div>
      <p className="text-gray-700 text-base">{service.description}</p>
    </div>
  )
}

export default ServiceCard
