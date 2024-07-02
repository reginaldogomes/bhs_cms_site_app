import React from 'react'
import Section from '@/components/layouts/Section'
import ButtonComponent from './Button'

const dataResume = {
  name: 'reginaldo',
  slogan: 'Tecnologia e Inovação',
  bio: 'Eu sou Reginaldo Gomes, desenvolvedor front-end especializado em tecnologias modernas. teste233',
}

const Hero: React.FC = () => {
  const handleClick = () => {
    alert('Botão clicado!')
  }
  return (
    <Section
      title="Bem-vindo ao meu site!"
      className="bg-blue-600 text-white text-center"
    >
      <h1>
        {dataResume.name} - {dataResume.slogan}
      </h1>

      <p className="text-xl">{dataResume.bio}</p>
      <ButtonComponent
        label="Primário"
        onClick={handleClick}
        variant="primary"
      />
    </Section>
  )
}

export default Hero
