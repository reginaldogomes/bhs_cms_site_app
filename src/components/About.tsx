import React from "react"
import Section from "@/components/layouts/Section"

import professionalSummary from "@/data/professionalSummary"

const About: React.FC = () => {
  return (
    <Section id="about" title="Sobre Mim">
      <p>{professionalSummary.name}</p>
    </Section>
  )
}

export default About
