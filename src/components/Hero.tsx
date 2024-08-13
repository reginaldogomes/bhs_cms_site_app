import Section from "@/components/layouts/Section"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const dataResume = {
  name: "Reginaldo Gomes",
  slogan: "Analista de Desenvolvimento de Sistemas",
  bio: "Sou um profissional com mais de 10 anos de experiência na área de Tecnologia da Informação, tendo atuado em empresas de destaque no setor, como Locaweb, Softplan e Squadra Digital. Nessas organizações, tive a oportunidade de participar de projetos de desenvolvimento de interfaces web para produtos digitais, contribuindo para a criação de soluções inovadoras e de alta performance.",
}

const Hero: React.FC = () => {
  const handleClick = () => {
    alert("Botão clicado!")
  }

  return (
    <Section
      title={dataResume.name}
      className="container flex-col items-center justify-center gap-16 text-white"
    >
      <Avatar className="mx-auto">
        <AvatarImage
          src="https://github.com/reginaldogomes.png"
          alt="@reginaldogomes"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="mx-auto">{dataResume.slogan}</h1>
      <p className="text-xl">{dataResume.bio}</p>
      <Button onClick={handleClick}>Sobre Mim</Button>
    </Section>
  )
}

export default Hero
