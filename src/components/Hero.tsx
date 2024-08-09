import Section from "@/components/layouts/Section"
import { Button } from "@/components/ui/button"

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
      className="max-w-1280·mx-auto·text-center·text-white"
    >
      <h1>{dataResume.slogan}</h1>
      <p className="text-xl">{dataResume.bio}</p>
      <Button onClick={handleClick}>Sobre Mim</Button>
    </Section>
  )
}

export default Hero
