import React from 'react';
import { Card } from './Card';

export const VideoResource: React.FC = () => {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Recurso Multimedia en Vídeo</h2>
            <Card className="max-w-4xl mx-auto">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/CDk6cMGrCAk"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold">Introducción a CrewAI</h3>
                    <p className="text-gray-400 mt-2">
                        Este vídeo proporciona una excelente introducción a noticias sobre la inteligencia artificial.
                    </p>
                </div>
            </Card>
        </section>
    );
};