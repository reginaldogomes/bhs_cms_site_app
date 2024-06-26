import React from 'react'
import Section from './Section'

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Habilidades" className="bg-gray-100">
      <ul className="list-disc pl-5">
        <li>JavaScript (React, Next.js, TypeScript)</li>
        <li>Cloud Computing (AWS, Terraform)</li>
        <li>CSS Frameworks (Tailwind CSS)</li>
      </ul>
    </Section>
  )
}

export default Skills
