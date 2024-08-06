// /src/components/ProfessionalSummary.tsx

import React from 'react';

interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface ProfessionalSummaryProps {
  name: string;
  title: string;
  summary: string;
  experiences: Experience[];
  education: Education[];
}

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({
  name,
  title,
  summary,
  experiences,
  education,
}) => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <h2 className="text-xl text-gray-700 mb-4">{title}</h2>
        <p className="mb-6">{summary}</p>

        <div>
          <h3 className="text-xl font-semibold mb-2">Experiências Profissionais</h3>
          {experiences.map((experience, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-semibold">{experience.role} - {experience.company}</h4>
              <p className="text-gray-600">{experience.startDate} - {experience.endDate}</p>
              <ul className="list-disc list-inside ml-4">
                {experience.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Educação</h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-semibold">{edu.degree}</h4>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-600">{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSummary;
