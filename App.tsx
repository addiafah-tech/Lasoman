import React from 'react';
import Hero from './components/Hero';
import ProductLineup from './components/ProductLineup';
import ProcessTimeline from './components/ProcessTimeline';
import RecoveryGuide from './components/RecoveryGuide';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-otec-accent selection:text-white">
      <Hero />
      
      <main className="space-y-12 pb-20">
        <ProductLineup />
        <ProcessTimeline />
        <RecoveryGuide />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white font-bold text-lg mb-2">Lasoman / OTEC</p>
          <p className="text-sm mb-6">Mass Finishing & Electropolishing Solutions</p>
          <div className="bg-slate-800 p-4 rounded-lg text-xs leading-relaxed max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> This interactive guide is a visual aid based on OTEC technical documents. 
            Always refer to the official operation manuals for specific chemical safety ratios, electrical handling, and hazardous waste disposal regulations.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;