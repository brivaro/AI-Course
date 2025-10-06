
import React from 'react';
import { Card } from './Card';

export const FinalProject: React.FC = () => {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-4">El Proyecto Final: <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Tu Misión Creativa</span></h2>
            <p className="text-center max-w-3xl mx-auto text-gray-400 mb-12">
                El objetivo culminante de este curso es la aplicación práctica de todos los conocimientos adquiridos a través de un proyecto significativo y de tu propia elección.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                    <h3 className="text-2xl font-bold mb-4">Opción 1: Agente Individual</h3>
                    <p className="mb-4 text-gray-300">Crea un agente de IA altamente especializado en una función específica.</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Foco en una tarea particular</li>
                        <li>Profundidad en un dominio específico</li>
                        <li>Capacidad de ejecutar funciones complejas</li>
                    </ul>
                </Card>
                <Card>
                    <h3 className="text-2xl font-bold mb-4">Opción 2: Tripulación de Agentes</h3>
                    <p className="mb-4 text-gray-300">Crea una "tripulación" de mini agentes (Crew) que colaborarán de manera coordinada.</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Distribución de tareas entre agentes</li>
                        <li>Coordinación para alcanzar un objetivo común</li>
                        <li>Comunicación y colaboración entre sí</li>
                    </ul>
                </Card>
            </div>

            <h3 className="text-2xl font-bold text-center mb-8">Ideas para Tu Proyecto</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
                 <Card>
                    <h4 className="text-xl font-bold mb-2">Tripulación de Viajes</h4>
                    <p className="text-gray-300">Diseña una tripulación de agentes que planifique un viaje completo, desde la investigación de destinos hasta la reserva de hoteles.</p>
                 </Card>
                 <Card>
                    <h4 className="text-xl font-bold mb-2">Analizador de Opiniones</h4>
                    <p className="text-gray-300">Crea un agente individual que analiza opiniones de productos en internet y genera un informe conciso con pros y contras.</p>
                 </Card>
                 <Card>
                    <h4 className="text-xl font-bold mb-2">Gestor de Marketing</h4>
                    <p className="text-gray-300">Desarrolla una tripulación que organiza una campaña de marketing en redes sociales para un producto ficticio.</p>
                 </Card>
            </div>
             <p className="text-center mt-12 text-lg text-gray-400 italic">
                "Este proyecto servirá como tu carta de presentación como desarrollador de agentes de IA"
            </p>
        </section>
    );
}
