import React from 'react'
import Section from '@/components/layouts/Section'

const AboutUs = {
  name: 'Reginaldo gomes',
  bio: 'Sou um profissional com mais de 10 anos de experiência na área de Tecnologia da Informação, tendo atuado em empresas de destaque no setor, como Locaweb, Softplan e Squadra Digital. Nessas organizações, tive a oportunidade de participar de projetos de desenvolvimento de interfaces web para produtos digitais, contribuindo para a criação de soluções inovadoras e de alta performance.',
}

const About: React.FC = () => {
  return (
    <Section id="about" title="Sobre Mim">
      <p>{AboutUs.bio}</p>
    </Section>
  )
}

export default About
