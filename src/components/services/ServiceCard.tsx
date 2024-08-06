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
    <div className="bg-white max-w-sm overflow-hidden rounded p-6 shadow-lg">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-accent-500">
        {service.icon}
      </div>
      <div className="mb-2 text-xl font-bold">{service.title}</div>
      <p className="text-gray-700 text-base">{service.description}</p>
    </div>
  )
}

export default ServiceCard
