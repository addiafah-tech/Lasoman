import React, { useState } from 'react';
import { RecoveryTab } from '../types';
import { Trash2, Filter, Flame, Beaker, AlertTriangle, Lightbulb, CheckSquare, Info } from 'lucide-react';

const tabs: RecoveryTab[] = [
  { id: 'dust', label: 'Dust Collection', icon: Trash2 },
  { id: 'intermediate', label: 'Intermediate Filter', icon: Filter },
  { id: 'final', label: 'Final Filtration', icon: CheckSquare },
  { id: 'used_bath', label: 'Used Bath Tips', icon: Beaker },
];

const RecoveryGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dust');

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-otec-dark">Gold Recovery From EF Flex</h2>
        <p className="text-slate-500 mt-2">Step-by-step guide to maximizing recovery from your electropolishing process.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        {/* Tabs Header */}
        <div className="flex flex-wrap border-b border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[140px] py-4 px-6 flex items-center justify-center gap-2 transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-otec-blue text-white'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <tab.icon size={18} />
              <span className="font-semibold text-sm md:text-base">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8 min-h-[400px]">
          
          {/* TAB A: DUST COLLECTION */}
          {activeTab === 'dust' && (
            <div className="animate-fadeIn">
              <h3 className="text-xl font-bold text-otec-dark mb-6 flex items-center gap-2">
                <Trash2 className="text-otec-accent" /> Collecting Dust from Machine
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="bg-otec-light text-otec-blue font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">1</span>
                    <p className="text-slate-700 text-sm">Remove both <strong>Cathode Plates</strong> carefully without disturbing wet gold dust. Place in a large plastic tray.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-otec-light text-otec-blue font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">2</span>
                    <p className="text-slate-700 text-sm">Remove the <strong>Sieve Container</strong> after dripping out liquid. Place in another tray.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-otec-light text-otec-blue font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">3</span>
                    <p className="text-slate-700 text-sm">Collect bottom sludge from Process Tank using tissue paper.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-otec-light text-otec-blue font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">4</span>
                    <p className="text-slate-700 text-sm">Wash media in a separate tray by rubbing by hand. Use minimal water.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-otec-light text-otec-blue font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">5</span>
                    <p className="text-slate-700 text-sm">Clean Cathode Plates: Wipe with tissue first, then scratch stubborn dust with Emery Paper or Metal Scraper.</p>
                  </li>
                </ul>

                <div className="space-y-4">
                   <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                     <div className="flex items-center gap-2 text-amber-700 font-bold mb-1">
                       <AlertTriangle size={18} />
                       <span>Warning: Plastic Balls</span>
                     </div>
                     <p className="text-sm text-amber-800">
                       Do NOT wash plastic balls in any kind of Acid. Acid stays on the surface and will ruin future process results.
                     </p>
                   </div>
                   
                   <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                     <div className="flex items-center gap-2 text-blue-700 font-bold mb-1">
                       <Lightbulb size={18} />
                       <span>Pro Tip: Water Usage</span>
                     </div>
                     <p className="text-sm text-blue-800">
                       Generate minimum quantity of water while washing containers and plates. Keep this water safe for filtration.
                     </p>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB B: INTERMEDIATE FILTRATION */}
          {activeTab === 'intermediate' && (
            <div className="animate-fadeIn">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-otec-dark flex items-center gap-2">
                  <Filter className="text-otec-accent" /> Intermediate Filtration
                </h3>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold">Reuse Bath</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg mb-6 border border-slate-200">
                <p className="text-sm text-slate-700">
                  <strong>When?</strong> After processing ~5kg Gold (or 3kg Rose Gold).<br/>
                  <strong>Goal?</strong> Remove stuck gold (approx 4-5% loss in Karate) and extend bath life.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                   <div className="flex items-center gap-3 p-3 bg-white rounded shadow-sm border border-slate-100">
                     <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-xs">1</div>
                     <span className="text-sm">Place unit on plastic sheet to catch drops.</span>
                   </div>
                   <div className="flex items-center gap-3 p-3 bg-white rounded shadow-sm border border-slate-100">
                     <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-xs">2</div>
                     <span className="text-sm">Insert Perforated PP Round Plate.</span>
                   </div>
                   <div className="flex items-center gap-3 p-3 bg-white rounded shadow-sm border border-slate-100">
                     <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-xs">3</div>
                     <span className="text-sm">Add <strong>Filter Pad (1 no)</strong>. Wet it with <em>used liquid</em> (do not use water here).</span>
                   </div>
                   <div className="flex items-center gap-3 p-3 bg-white rounded shadow-sm border border-slate-100">
                     <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-xs">4</div>
                     <span className="text-sm">Add <strong>Filter Paper (2 nos)</strong> (Whatman Grade 1 recommended). Wet with used liquid. Lock with O-ring.</span>
                   </div>
                </div>
                
                <div className="bg-slate-100 p-6 rounded-xl flex flex-col justify-center">
                   <h4 className="font-bold text-slate-700 mb-2">Process Logic</h4>
                   <p className="text-sm text-slate-600 mb-4">
                     Pump compressed air to diaphragm pump. If speed reduces, pores are blocked by gold dust.
                   </p>
                   <div className="flex items-center gap-2 text-otec-dark font-semibold text-sm">
                     <Flame size={16} />
                     <span>Save clogged papers for Burning & Aqua Regia</span>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB C: FINAL FILTRATION */}
          {activeTab === 'final' && (
             <div className="animate-fadeIn">
               <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-otec-dark flex items-center gap-2">
                  <CheckSquare className="text-otec-accent" /> Final Filtration
                </h3>
                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded font-bold">End of Bath Life</span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                 <div className="bg-white border-2 border-slate-100 p-4 rounded-xl text-center">
                    <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-otec-blue font-bold">1</div>
                    <p className="text-sm font-semibold">Prepare Unit</p>
                    <p className="text-xs text-slate-500 mt-1">Plate + Filter Pad + O-Ring. Wet with water.</p>
                 </div>
                 <div className="bg-white border-2 border-otec-light p-4 rounded-xl text-center relative">
                    <div className="absolute top-1/2 -left-3 w-6 h-0.5 bg-slate-300 hidden md:block"></div>
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-otec-blue font-bold">2</div>
                    <p className="text-sm font-semibold">Filter Aid Powder</p>
                    <p className="text-xs text-slate-500 mt-1">Mix 500g powder + 1.5L water. Pour & compact bed.</p>
                 </div>
                 <div className="bg-white border-2 border-slate-100 p-4 rounded-xl text-center relative">
                    <div className="absolute top-1/2 -left-3 w-6 h-0.5 bg-slate-300 hidden md:block"></div>
                    <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-otec-blue font-bold">3</div>
                    <p className="text-sm font-semibold">Filter Liquid</p>
                    <p className="text-xs text-slate-500 mt-1">Place 2 Filter Papers on top. Filter until liquid is clear.</p>
                 </div>
              </div>

              <div className="bg-otec-dark text-white p-6 rounded-xl flex items-start gap-4">
                <Flame className="flex-shrink-0 mt-1 text-orange-400" />
                <div>
                  <h4 className="font-bold text-lg">Final Recovery Step</h4>
                  <p className="text-blue-100 text-sm mt-1">
                    Collect ALL tissues, filter papers, filter pads, and the Filter Aid Powder Bed. 
                    Burn in a Dust Burnout Furnace (700°C), then process ash with Aqua Regia to recover 100% of lost gold.
                  </p>
                </div>
              </div>
             </div>
          )}

          {/* TAB D: USED BATH TIPS */}
          {activeTab === 'used_bath' && (
            <div className="animate-fadeIn">
               <h3 className="text-xl font-bold text-otec-dark mb-6 flex items-center gap-2">
                <Beaker className="text-otec-accent" /> Additional Dust Collection
              </h3>

              <div className="space-y-4">
                 <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                   <h4 className="font-bold text-slate-800 text-sm mb-1">Daily Maintenance</h4>
                   <p className="text-sm text-slate-600">Collect black carbon composite from cathode plates daily using tissue paper. Burn these tissues later.</p>
                 </div>
                 
                 <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                   <h4 className="font-bold text-slate-800 text-sm mb-1">Settling Method</h4>
                   <p className="text-sm text-slate-600">Let used bath sit idle for 1-2 days. Heavy carbon settles at bottom. Filter liquid from top, collect sludge from bottom.</p>
                 </div>

                 <div className="p-4 bg-white border-l-4 border-otec-accent rounded-r-lg shadow-sm">
                   <h4 className="font-bold text-otec-dark text-sm mb-1">Chemical Precipitation (Advanced)</h4>
                   <ul className="text-sm text-slate-600 list-disc ml-4 space-y-1">
                     <li>To settle light hanging particles: Add <strong>Zinc or Aluminium powder</strong>.</li>
                     <li>Requirement: Adjust pH to 6 using Sodium Hydroxide first.</li>
                     <li><strong>Caution:</strong> Zinc/Al can create foam. Ensure bucket has space.</li>
                   </ul>
                 </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default RecoveryGuide;