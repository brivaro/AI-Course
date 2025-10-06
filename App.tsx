import React from 'react';
import { Hero } from './components/Hero';
import { Objectives } from './components/Objectives';
import { FinalProject } from './components/FinalProject';
import { SetupGuide } from './components/SetupGuide';
import { VideoResource } from './components/VideoResource';
import { DidacticResources } from './components/DidacticResources';
import { Footer } from './components/Footer';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Quiz } from './components/Quiz';

const App: React.FC = () => {
  return (
    <div className="bg-[#0B1120] min-h-screen font-sans text-gray-200 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 -z-0 h-full w-full bg-[#0B1120] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <BackgroundParticles />
      
      <div className="relative z-10">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Hero />
          <Objectives />
          <FinalProject />
          <SetupGuide />
          <VideoResource />
          <DidacticResources />
          <Quiz />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;