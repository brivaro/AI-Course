import React from 'react';
import { RobotIcon } from './icons/RobotIcon';
import { BrainIcon } from './icons/BrainIcon';
import { ChipIcon } from './icons/ChipIcon';

export const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 sm:py-32 relative">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      
      <div className="flex justify-center items-center gap-6 mb-8">
        <RobotIcon className="w-8 h-8 text-cyan-400" />
        <BrainIcon className="w-8 h-8 text-blue-400" />
        <ChipIcon className="w-8 h-8 text-orange-400" />
      </div>
      
      <div className="flex justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight font-mono typewriter-text">
          Crear Agentes de IA
        </h1>
      </div>

      <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-300">
        Módulo 0: Bienvenida y Configuración del Entorno
      </h2>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
        Te damos la bienvenida a tu viaje por el fascinante mundo de los agentes
        autónomos. Prepararemos tu entorno y te enseñaremos a convertirte en un
        creador de IA.
      </p>
      <div className="w-24 h-1 bg-cyan-400 mx-auto mt-8 rounded-full"></div>
    </section>
  );
};