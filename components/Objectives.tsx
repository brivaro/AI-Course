import React from 'react';
import { Card } from './Card';
import { BrainIcon, RobotIcon, ChipIcon } from './icons'; // Using an index file for icons

const objectivesData = [
  {
    title: "Conceptuales",
    icon: <BrainIcon className="w-10 h-10 text-blue-400 mb-4" />,
    points: [
      "Interiorizar los cimientos de la IA autónoma.",
      "Principios que rigen los sistemas de IA autónoma.",
      "Diferenciar entre frameworks disponibles.",
      "Implicaciones éticas del trabajo con IA."
    ],
    footer: `"Comprender los why"`
  },
  {
    title: "Procedimentales",
    icon: <ChipIcon className="w-10 h-10 text-orange-400 mb-4" />,
    points: [
      "Dotarse de habilidades prácticas para dar vida a ideas.",
      "Configurar agentes individuales de IA.",
      "Orquestar equipos de agentes (Crews).",
      "Integrar herramientas externas (APIs).",
      "Usar plataformas colaborativas como GitHub."
    ],
    footer: `"Aprender a hacer"`
  },
  {
    title: "Actitudinales",
    icon: <RobotIcon className="w-10 h-10 text-cyan-400 mb-4" />,
    points: [
      "Fomentar actitudes propias de un innovador.",
      "Valorar el trabajo en equipo, incluso entre agentes.",
      "Mantener curiosidad insaciable por nuevas tecnologías.",
      "Desarrollar enfoque crítico y responsable."
    ],
    footer: `"Ser un verdadero creador"`
  }
];

export const Objectives: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Objetivos de Aprendizaje: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Triple Enfoque</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {objectivesData.map((obj, index) => (
          <Card key={index} className="flex flex-col">
            <div className="flex items-center mb-4">
              {obj.icon}
              <h3 className="text-xl font-bold ml-4">{obj.title}</h3>
            </div>
            <ul className="space-y-3 text-gray-300 list-disc list-inside flex-grow">
              {obj.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="mt-6 text-cyan-400 italic text-center text-sm font-semibold">{obj.footer}</p>
          </Card>
        ))}
      </div>
      <p className="text-center mt-12 text-lg text-gray-400 italic">
        "Nuestro objetivo es formar creadores de IA con conocimiento, habilidades y mentalidad innovadora"
      </p>
    </section>
  );
};