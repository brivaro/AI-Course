import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="text-center py-8 border-t border-white/10 mt-16">
            <p className="text-gray-500">
                Proyecto eLearning: Curso para Crear Agentes de IA
            </p>
            <p className="text-sm text-gray-600 mt-2">
                Desarrollado como parte de la fase de producción de recursos didácticos.
            </p>
            <div className="flex justify-center items-center gap-x-6 gap-y-2 mt-4 flex-wrap">
                <a href="https://brivaro-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition text-sm">
                    Brian Valiente Rodenas
                </a>
                <span className="text-gray-600 hidden sm:inline">|</span>
                <a href="https://alerone.github.io/portfolio" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition text-sm">
                    Álvaro López Álvarez
                </a>
            </div>
        </footer>
    );
};