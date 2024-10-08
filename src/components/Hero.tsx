import Section from "@/components/layouts/Section"
import ButtonComponent from "./Button"

const dataResume = {
  name: "Reginaldo Gomes",
  slogan: "Tecnologia e Inovação",
  bio: "Sou um profissional com mais de 10 anos de experiência na área de Tecnologia da Informação, tendo atuado em empresas de destaque no setor, como Locaweb, Softplan e Squadra Digital. Nessas organizações, tive a oportunidade de participar de projetos de desenvolvimento de interfaces web para produtos digitais, contribuindo para a criação de soluções inovadoras e de alta performance.",
}

const Hero: React.FC = () => {
  const handleClick = () => {
    alert("Botão clicado!")
  }
  return (
    <Section
      title={dataResume.name}
      className="text-white mx-auto max-w-1280 text-center"
    >
      <h1>{dataResume.slogan}</h1>

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
