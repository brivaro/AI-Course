import React, { useState } from 'react';
import { Card } from './Card';
import { CheckIcon, XIcon } from './icons';

const quizData = [
  {
    id: 1,
    question: '¿Cuál es el comando correcto para activar un entorno de Conda llamado `agentes_ia`?',
    answers: [
      { text: 'conda start agentes_ia', isCorrect: false },
      { text: 'conda activate agentes_ia', isCorrect: true },
      { text: 'conda run agentes_ia', isCorrect: false },
      { text: 'activate conda agentes_ia', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'En el contexto de CrewAI, ¿qué describe mejor a una "Tripulación" (Crew)?',
    answers: [
      { text: 'Un único agente de IA muy potente.', isCorrect: false },
      { text: 'Un conjunto de herramientas que un agente puede usar.', isCorrect: false },
      { text: 'Un grupo de agentes que colaboran para lograr un objetivo común.', isCorrect: true },
      { text: 'El código base del framework CrewAI.', isCorrect: false },
    ],
  },
];

type SelectedAnswers = {
  [key: number]: number | null;
};

export const Quiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  
  const handleAnswerClick = (questionId: number, answerIndex: number) => {
    // Prevent changing the answer
    if (selectedAnswers[questionId] !== undefined) return;
    
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const getButtonClass = (questionId: number, answerIndex: number, isCorrect: boolean) => {
    const selectedAnswerIndex = selectedAnswers[questionId];
    const isSelected = selectedAnswerIndex === answerIndex;
    const isAnswered = selectedAnswerIndex !== undefined && selectedAnswerIndex !== null;

    if (!isAnswered) {
      return 'bg-gray-800/50 hover:bg-gray-700/50 border-transparent';
    }

    if (isCorrect) {
      return 'bg-green-500/30 border-green-500/50 text-white';
    }

    if (isSelected && !isCorrect) {
      return 'bg-red-500/30 border-red-500/50 text-white';
    }
    
    return 'bg-gray-800/30 border-transparent opacity-60';
  };

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Comprueba tu Conocimiento
      </h2>
      <Card className="max-w-4xl mx-auto p-8 space-y-10">
        {quizData.map((quizItem) => (
          <div key={quizItem.id}>
            <h3 className="text-xl font-semibold mb-6 text-cyan-300">{quizItem.id}. {quizItem.question}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizItem.answers.map((answer, index) => {
                const isSelected = selectedAnswers[quizItem.id] === index;
                const isAnswered = selectedAnswers[quizItem.id] !== undefined;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(quizItem.id, index)}
                    disabled={isAnswered}
                    className={`p-4 rounded-lg text-left transition-all duration-300 border ${getButtonClass(quizItem.id, index, answer.isCorrect)} ${!isAnswered ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                  >
                    <span className="flex items-center justify-between">
                      {answer.text}
                      {isAnswered && (
                        answer.isCorrect ? <CheckIcon className="w-5 h-5 text-green-400" /> :
                        isSelected ? <XIcon className="w-5 h-5 text-red-400" /> : null
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
};