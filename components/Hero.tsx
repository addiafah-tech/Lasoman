import React from 'react';
import { Gem, Award, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-otec-dark to-otec-blue text-white pt-12 pb-20 px-6 rounded-b-[3rem] shadow-xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="bg-white p-2 rounded-lg">
               {/* Placeholder Logo Representation */}
               <div className="flex items-center gap-1 font-bold text-otec-dark text-xl leading-none">
                 <span className="text-orange-500 text-2xl">◇</span>
                 <div className="flex flex-col">
                   <span>Lasoman</span>
                   <span className="text-[0.6rem] font-normal tracking-wider text-gray-500">Machines Empowering</span>
                 </div>
               </div>
            </div>
            <span className="text-2xl font-light text-blue-200">|</span>
            <span className="text-2xl font-bold tracking-widest">OTEC</span>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-blue-200 text-sm font-medium">Millenia Technologies</p>
          </div>
        </div>

        <div className="text-center md:text-left max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Mass Finishing & <br/>
            <span className="text-otec-accent">Gold Recovery Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 font-light">
            Interactive visual guide for OTEC Mag 30, CF Series, and EF Flex systems for jewelry production labs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
            <Zap className="w-8 h-8 text-otec-accent mb-2" />
            <h3 className="font-bold text-sm">Technical Innovation</h3>
            <p className="text-xs text-blue-200">Ceramic gap systems & Zero gap technology</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
            <ShieldCheck className="w-8 h-8 text-otec-accent mb-2" />
            <h3 className="font-bold text-sm">Process Stability</h3>
            <p className="text-xs text-blue-200">Consistent repeatability in results</p>
          </div>
           <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
            <Gem className="w-8 h-8 text-otec-accent mb-2" />
            <h3 className="font-bold text-sm">High Quality</h3>
            <p className="text-xs text-blue-200">Symmetrical cutting & excellent finish</p>
          </div>
           <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
            <Award className="w-8 h-8 text-otec-accent mb-2" />
            <h3 className="font-bold text-sm">Gold Recovery</h3>
            <p className="text-xs text-blue-200">Sure recovery from waste water</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;