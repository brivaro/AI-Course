
import React from 'react';
import { Card } from './Card';

export const DidacticResources: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Recursos y Material Didáctico</h2>
      <div className="grid md:grid-cols-2 gap-8">
        
        <Card className="bg-blue-500/10 border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">PARA SABER MÁS</h3>
            <p className="mb-4 text-gray-300">
                Profundiza en los conceptos clave del curso con estos documentos didácticos. Son la base teórica para convertirte en un experto.
            </p>
            <div className="space-y-4">
                <a href="https://drive.google.com/file/d/1ERaqDeBAj5RcdnKat8-hu_JPZZLnF-Dw/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="block bg-gray-800/50 hover:bg-gray-700/50 text-white font-bold py-3 px-4 rounded-lg transition duration-300 text-center">
                    Módulo 0: Bienvenida al Curso
                </a>
                <a href="https://drive.google.com/file/d/1ZBnuqy6hEdBtKEen6ytF4CQJNAKPNixh/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="block bg-gray-800/50 hover:bg-gray-700/50 text-white font-bold py-3 px-4 rounded-lg transition duration-300 text-center">
                    Módulo 1: Fundamentos de Agentes de IA
                </a>
            </div>
        </Card>

        <Card className="bg-green-500/10 border-green-500/20">
            <h3 className="text-2xl font-bold mb-4 text-green-300">RESUMEN DEL MÓDULO</h3>
            <p className="mb-4 text-gray-300">
                En este módulo de bienvenida, hemos sentado las bases de nuestro viaje:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Entendimos los <strong>objetivos de aprendizaje</strong> del curso, enfocados en saber, saber hacer y saber ser.</li>
                <li>Exploramos las opciones para el <strong>proyecto final</strong>, tu oportunidad para brillar.</li>
                <li>Configuramos nuestro <strong>entorno de desarrollo</strong> con Anaconda y las librerías esenciales.</li>
                <li>¡Estás listo para construir tu primer agente!</li>
            </ul>
        </Card>

      </div>
    </section>
  );
};
