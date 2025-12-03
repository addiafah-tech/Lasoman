import React, { useState } from 'react';
import { TimelineStep } from '../types';
import { CheckCircle2, Circle } from 'lucide-react';

const steps: TimelineStep[] = [
  {
    id: 1,
    title: 'Casting & Sprue',
    shortDesc: 'Initial Preparation',
    details: 'Start with the casting tree. Perform sprue cutting and filing to remove the main feed channels.',
    params: 'Tools: Cutters, Files'
  },
  {
    id: 2,
    title: 'Surface Prep',
    shortDesc: 'Grinding / Emery',
    details: 'Sprue grinding on wheel or with 220 grit emery paper. Selective filling (if casting is good) or complete surface prep with 400/600 grit paper.',
    params: 'Grit: 220, 400, 600'
  },
  {
    id: 3,
    title: 'Magnetic Polishing',
    shortDesc: 'OTEC MAG 30',
    details: 'Removes investment powder and oxidation layers. Crucial for cleaning inner areas.',
    params: 'Media: Steel Pins | Speed: ~1600 rpm | Time: ~30 min'
  },
  {
    id: 4,
    title: 'Wet Burnishing',
    shortDesc: 'OTEC CF Series',
    details: 'Smooth plastic grinding or wet burnishing to smooth the casting skin and prepare for high shine.',
    params: 'Media: Ceramic (ZSS) or Plastic (KM/PM) | Time: 30-90 min'
  },
  {
    id: 5,
    title: 'Electropolishing',
    shortDesc: 'OTEC EF Flex',
    details: 'Final high-gloss process. Reduces manual polishing. Gold is removed via electrolysis and captured on cathode plates.',
    params: 'Voltage: 3.5V - 6.5V | Time: 10-20 min'
  },
  {
    id: 6,
    title: 'Final Finish',
    shortDesc: 'Light Buff',
    details: 'A quick final light buff for the ultimate mirror finish and inspection.',
    params: 'Manual or Machine Buff'
  }
];

const ProcessTimeline: React.FC = () => {
  const [selectedStepId, setSelectedStepId] = useState<number>(3); // Default to MAG 30

  const currentStep = steps.find(s => s.id === selectedStepId);

  return (
    <section className="bg-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-otec-dark">From Casting to Shine</h2>
          <p className="text-slate-500 mt-2">Typical workflow for Gold/Silver mass finishing.</p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:flex justify-between items-center relative mb-12 px-8">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-300 -z-0 transform -translate-y-1/2 rounded-full"></div>
          
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setSelectedStepId(step.id)}
              className="relative z-10 flex flex-col items-center group focus:outline-none"
            >
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  selectedStepId === step.id 
                    ? 'bg-otec-accent border-white shadow-xl scale-125 ring-4 ring-orange-200' 
                    : 'bg-white border-slate-300 group-hover:border-otec-blue group-hover:scale-110'
                }`}
              >
                <span className={`font-bold ${selectedStepId === step.id ? 'text-white' : 'text-slate-500'}`}>
                  {step.id}
                </span>
              </div>
              <span className={`mt-6 text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 ${
                selectedStepId === step.id 
                  ? 'bg-otec-blue text-white shadow-md transform -translate-y-1' 
                  : 'text-slate-500 bg-white/80'
              }`}>
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden flex flex-col gap-4 mb-8">
             {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setSelectedStepId(step.id)}
              className={`flex items-center p-3 rounded-lg border transition-all duration-300 ${
                 selectedStepId === step.id 
                  ? 'bg-white border-otec-accent shadow-lg ring-1 ring-otec-accent/50 translate-x-2' 
                  : 'bg-slate-50 border-transparent hover:bg-white hover:shadow-sm'
              }`}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mr-3 transition-colors ${
                  selectedStepId === step.id 
                    ? 'bg-otec-accent text-white' 
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {step.id}
              </div>
              <span className={`text-sm font-medium ${selectedStepId === step.id ? 'text-otec-dark' : 'text-slate-500'}`}>
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Step Detail Card */}
        {currentStep && (
          <div 
            key={currentStep.id} 
            className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-otec-accent animate-fadeIn transition-all"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
               <div className="flex-1">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="bg-otec-blue text-white text-sm font-bold px-2 py-1 rounded">Step {currentStep.id}</div>
                   <h3 className="text-2xl font-bold text-otec-dark">{currentStep.title}</h3>
                 </div>
                 <p className="text-lg text-slate-500 font-light mb-4">{currentStep.shortDesc}</p>
                 <p className="text-slate-700 leading-relaxed">{currentStep.details}</p>
               </div>
               
               <div className="w-full md:w-1/3 bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-4">Typical Parameters</h4>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <p className="text-sm font-medium text-slate-700">{currentStep.params}</p>
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProcessTimeline;