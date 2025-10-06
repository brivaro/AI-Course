import React from 'react';
import { Card } from './Card';
import { CodeBlock } from './CodeBlock';
import { ExternalLinkIcon } from './icons';

const setupSteps = [
    { title: 'Descargar', description: 'Ve a la página oficial de Anaconda y descarga el instalador para tu sistema operativo.' },
    { title: 'Instalar', description: 'Ejecuta el instalador y sigue las instrucciones. Acepta las opciones por defecto.' },
    { title: 'Crear entorno', description: 'Abre la "Anaconda Prompt" (Windows) o tu terminal (Mac/Linux) y ejecuta:', code: 'conda create -n agentes_ia python=3.10 -y' },
    { title: 'Activar entorno', description: 'Cada vez que quieras trabajar en este proyecto, activa el entorno con:', code: 'conda activate agentes_ia' }
];

const keyTechnologies = [
    {
        name: 'Python & Anaconda',
        description: 'La base de nuestro desarrollo. Usaremos Python por su simplicidad y el potente ecosistema de Anaconda para gestionar nuestros entornos y dependencias.',
        link: 'https://www.anaconda.com/download',
        style: 'border-green-500/20 bg-green-500/10 text-green-300'
    },
    {
        name: 'CrewAI',
        description: 'El framework de orquestación que nos permite diseñar sofisticados agentes autónomos que pueden trabajar juntos para resolver tareas complejas.',
        link: 'https://docs.crewai.com/',
        style: 'border-blue-500/20 bg-blue-500/10 text-blue-300'
    },
    {
        name: 'Google ADK',
        description: 'El nuevo Agent Development Kit de Google. Esencial para dotar de inteligencia a nuestros agentes con modelos de última generación como Gemini.',
        link: 'https://developers.googleblog.com/es/agent-development-kit-easy-to-build-multi-agent-applications/',
        style: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-300'
    }
];

const libraryInstallations = [
    { title: 'Activar entorno', code: 'conda activate agentes_ia'},
    { title: 'Instalar CrewAI', code: "pip install 'crewai[tools]'"},
    { title: 'Instalar Google ADK', code: 'pip install google-generativeai'},
    { title: 'Instalar python-dotenv', code: 'pip install python-dotenv'},
];

export const SetupGuide: React.FC = () => {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-4">Configurando tu Entorno de Desarrollo</h2>
            <p className="text-center max-w-3xl mx-auto text-gray-400 mb-12">
                Prepara tu máquina para la creación de IA. Aquí te guiaremos a través de la instalación de las herramientas y librerías clave.
            </p>

            <h3 className="text-2xl font-bold text-center mb-8">Tecnologías Clave del Curso</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {keyTechnologies.map(tech => (
                    <Card key={tech.name} className={`flex flex-col ${tech.style}`}>
                        <h4 className={`text-xl font-bold mb-3`}>{tech.name}</h4>
                        <p className="text-gray-300 flex-grow mb-4">{tech.description}</p>
                        <a 
                            href={tech.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center gap-2 mt-auto bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Saber más
                            <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                    </Card>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-cyan-400">Puesta en Marcha con Anaconda</h3>
                    <div className="space-y-6">
                        {setupSteps.map((step, index) => (
                            <div key={index} className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 text-cyan-300 rounded-full flex items-center justify-center font-bold mr-4">{index + 1}</div>
                                <div>
                                    <h4 className="font-bold text-lg">{step.title}</h4>
                                    <p className="text-gray-400">{step.description}</p>
                                    {step.code && <CodeBlock code={step.code} />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-orange-400">Instalación de Librerías Esenciales</h3>
                    <Card>
                        <p className="mb-4">Con tu entorno de Anaconda activado, vamos a instalar las librerías necesarias para desarrollar agentes de IA.</p>
                        {libraryInstallations.map((lib, index) => (
                            <div key={index}>
                                <h4 className="font-semibold mt-4 text-gray-200"># {lib.title}</h4>
                                <CodeBlock code={lib.code} />
                            </div>
                        ))}
                    </Card>
                </div>
            </div>
        </section>
    );
}