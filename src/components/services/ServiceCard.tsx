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
    <div className="max-w-sm overflow-hidden rounded bg-white p-6 shadow-lg">
      <div className="bg-accent-500 mb-4 flex h-16 w-16 items-center justify-center rounded-xl">
        {service.icon}
      </div>
      <div className="mb-2 text-xl font-bold">{service.title}</div>
      <p className="text-base text-gray-700">{service.description}</p>
    </div>
  )
}

export default ServiceCard
