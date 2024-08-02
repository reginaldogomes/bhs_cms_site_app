const about = {
  title: 'Sobre Mim',
  description:
    'Sou um profissional com mais de 10 anos de experiência na área de Tecnologia da Informação, tendo atuado em empresas de destaque no setor, como Locaweb, Softplan e Squadra Digital. Nessas organizações, tive a oportunidade de participar de projetos de desenvolvimento de interfaces web para produtos digitais, contribuindo para a criação de soluções inovadoras e de alta performance.',
}

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{about.title}</h1>
      <p className="text-2xl">{about.description}</p>
    </div>
  )
}
