// /src/data/professionalSummary.ts

export interface Experience {
  company: string
  role: string
  startDate: string
  endDate: string
  description: string[]
}

export interface Education {
  institution: string
  degree: string
  startDate: string
  endDate: string
}

export interface ProfessionalSummary {
  name: string
  title: string
  summary: string
  experiences: Experience[]
  education: Education[]
}

const professionalSummary: ProfessionalSummary = {
  name: "Reginaldo Gomes",
  title: "Analista de Desenvolvimento Web",
  summary:
    "Profissional com experiência em desenvolvimento front-end, especializado em React, Next.js e TypeScript. Experiência em cloud computing com foco em AWS e administração de infraestrutura. Comprometido com a inovação e a transformação digital para empresas.",
  experiences: [
    {
      company: "Lisait",
      role: "Desenvolvedor Front-end (Pleno)",
      startDate: "Julho 2024",
      endDate: "Presente",
      description: [
        "Desenvolvimento de interfaces de usuário responsivas utilizando React e Next.js.",
        "Implementação de testes unitários com Jest.",
        "Otimização de performance e SEO.",
      ],
    },
    {
      company: "Tecmaster",
      role: "Desenvolvedor Backend (Sênior)",
      startDate: "Julho 2024",
      endDate: "Presente",
      description: [
        "Desenvolvimento de APIs RESTful com Node.js.",
        "Integração de serviços AWS utilizando Terraform.",
        "Monitoramento e otimização de performance de aplicações backend.",
      ],
    },
    {
      company: "Freelancer",
      role: "Consultor em Cloud Computing",
      startDate: "Janeiro 2023",
      endDate: "Junho 2024",
      description: [
        "Administração de infraestrutura AWS para empresas.",
        "Consultoria em transformação digital e adoção de cloud computing.",
        "Implementação de soluções de hospedagem de sites com WordPress na AWS.",
      ],
    },
  ],
  education: [
    {
      institution: "Universidade XYZ",
      degree: "Bacharelado em Engenharia de Software",
      startDate: "Janeiro 2020",
      endDate: "Dezembro 2024",
    },
    {
      institution: "Rocketseat",
      degree: "Curso SEO para Devs",
      startDate: "Abril 2024",
      endDate: "Julho 2024",
    },
  ],
}

export default professionalSummary
