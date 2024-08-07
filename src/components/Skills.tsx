import Section from "@/components/layouts/Section"

type SkillCategory = {
  frameworks: string[]
  tools: string[]
  testing: string[]
  languages: string[]
  libraries: string[]
}

type Skills = {
  javascript: SkillCategory
  frontend: SkillCategory
  backend: SkillCategory & { databases: string[] }
}

const skills: Skills = {
  javascript: {
    frameworks: ["React", "Next.js", "Node.js", "Express"],
    tools: ["npm", "yarn", "Webpack", "Babel"],
    testing: ["Jest", "Mocha", "Chai"],
    languages: ["TypeScript", "JavaScript (ES6+)"],
    libraries: ["Redux", "Tailwind CSS", "Bootstrap"],
  },
  frontend: {
    languages: ["HTML", "CSS", "JavaScript"],
    frameworks: ["React", "Next.js", "Vue.js"],
    libraries: ["Redux", "Tailwind CSS", "Bootstrap"],
    tools: ["Webpack", "Babel", "ESLint"],
    testing: ["Jest", "React Testing Library", "Cypress"],
  },
  backend: {
    languages: ["Node.js", "Python", "Java"],
    frameworks: ["Express", "Django", "Spring"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    tools: ["Docker", "Kubernetes", "Jenkins"],
    testing: ["Mocha", "Chai", "Supertest"],
    libraries: ["Redux", "Tailwind CSS", "Bootstrap"],
  },
}

const Skills: React.FC = () => {
  return (
    <Section
      title="Bem-vindo ao meu site!"
      className="bg-blue-600 text-center text-white"
    >
      <h1 className="mb-6 text-3xl font-bold">Habilidades</h1>
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">JavaScript</h2>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <strong>Frameworks:</strong>{" "}
            {skills.javascript.frameworks.join(", ")}
          </li>
          <li>
            <strong>Tools:</strong> {skills.javascript.tools.join(", ")}
          </li>
          <li>
            <strong>Testing:</strong> {skills.javascript.testing.join(", ")}
          </li>
          <li>
            <strong>Languages:</strong> {skills.javascript.languages.join(", ")}
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Front-end</h2>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <strong>Languages:</strong> {skills.frontend.languages.join(", ")}
          </li>
          <li>
            <strong>Frameworks:</strong> {skills.frontend.frameworks.join(", ")}
          </li>
          <li>
            <strong>Libraries:</strong> {skills.frontend.libraries.join(", ")}
          </li>
          <li>
            <strong>Tools:</strong> {skills.frontend.tools.join(", ")}
          </li>
          <li>
            <strong>Testing:</strong> {skills.frontend.testing.join(", ")}
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Back-end</h2>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <strong>Languages:</strong> {skills.backend.languages.join(", ")}
          </li>
          <li>
            <strong>Frameworks:</strong> {skills.backend.frameworks.join(", ")}
          </li>
          <li>
            <strong>Databases:</strong> {skills.backend.databases.join(", ")}
          </li>
          <li>
            <strong>Tools:</strong> {skills.backend.tools.join(", ")}
          </li>
          <li>
            <strong>Testing:</strong> {skills.backend.testing.join(", ")}
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default Skills
