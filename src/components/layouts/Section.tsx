import React from "react"

interface SectionProps {
  id?: string
  title: string
  children: React.ReactNode
  className?: string
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = "",
}) => {
  return (
    <section id={id} className={`rounded-xl py-20 ${className}`}>
      <div className="container mx-auto">
        <h2 className="mb-4 text-4xl font-bold">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default Section
