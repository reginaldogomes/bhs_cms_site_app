import React from 'react'
import Section from '@/components/layouts/Section'

const dataResume = {
  name: 'reginaldo',
  slogan: 'Tecnologia e Inovação',
  bio: 'Eu sou Reginaldo Gomes, desenvolvedor front-end especializado em tecnologias modernas. teste233',
}

const Hero: React.FC = () => {
  return (
    <Section
      title="Bem-vindo ao meu site!"
      className="bg-blue-600 text-white text-center"
    >
      <h1>
        {dataResume.name} - {dataResume.slogan}
      </h1>

      <p className="text-xl">{dataResume.bio}</p>
    </Section>
  )
}

export default Hero
