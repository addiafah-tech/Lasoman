import React, { useState } from 'react';
import { Settings, Disc, Zap, Filter, ArrowRight } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'mag30',
    name: 'OTEC MAG 30',
    shortName: 'Magnetic Polisher',
    description: 'High-speed magnetic polisher for removing investment powder and oxidation.',
    icon: Settings,
    specs: [
      'Speed control via frequency inverter',
      'LCD Speed & Time display',
      'Rec. Steel Pins: 400g',
      'Rec. Workpiece: Approx 400g'
    ],
    details: {
      bestFor: 'First stage cleaning, removing oxidation/investment powder from cast trees or pieces.',
      role: 'Pre-processing Step',
      highlights: [
        'Removes investment powder effectively',
        'Cleans oxidation layers',
        'Prepares surface for burnishing',
        'User friendly handling'
      ]
    }
  },
  {
    id: 'cf',
    name: 'OTEC CF Series',
    shortName: 'Disc Finishing',
    description: 'Disc finishing machines (CF 1/18, 2/18) for smoothing and burnishing.',
    icon: Disc,
    specs: [
      'Ceramic gap system',
      'Hot molded PU lining',
      'Memory for 75 programs',
      'Speed control inverter'
    ],
    details: {
      bestFor: 'Smoothing casting skin, burnishing gold/silver surfaces.',
      role: 'Main Surface Preparation',
      highlights: [
        'Symmetrical and even metal cutting',
        '0.5% to 1.5% loss (low)',
        '95-100% recovery of lost gold',
        'Saves significant manual labor'
      ]
    }
  },
  {
    id: 'efflex',
    name: 'OTEC EF Flex',
    shortName: 'Electropolishing',
    description: 'Innovative electropolishing for filigree jewelry and intricate geometries.',
    icon: Zap,
    specs: [
      'Cyanide-free process',
      'Capacity: Up to 40 pieces',
      'Easy-to-clean plastic/stainless cladding',
      'Recover gold via cathode deposition'
    ],
    details: {
      bestFor: 'Yellow, Red, and White Gold. Intricate/Filigree pieces.',
      role: 'Final Polishing & Shine',
      highlights: [
        'Reduces manual polishing to a minimum',
        'Intricate details remain intact',
        'Short processing times',
        'Gold recovery via cathode plates'
      ]
    }
  },
  {
    id: 'filtration',
    name: 'Millenia Filtration',
    shortName: 'Dust & Liquid Filter',
    description: 'Specialized unit for filtering used EF liquids and collecting gold dust.',
    icon: Filter,
    specs: [
      'Operates on Air Pressure',
      'Diaphragm Pump (Negative Pressure)',
      'Capacity: 10L & 35L',
      'Handles muddy/slurry waste'
    ],
    details: {
      bestFor: 'Recovering gold sludge and extending bath life.',
      role: 'Recovery & Maintenance',
      highlights: [
        'Intermediate filtration extends bath life',
        'Final filtration captures all solids',
        'Efficient and fast',
        'Crucial for high value recovery'
      ]
    }
  }
];

const ProductLineup: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(products[0].id);

  const activeProduct = products.find(p => p.id === activeId) || products[0];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-otec-dark">OTEC Product Lineup</h2>
        <p className="text-slate-500 mt-2">Click on a machine to see technical details and benefits.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: List of Cards */}
        <div className="space-y-4 lg:col-span-1">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveId(product.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group ${
                activeId === product.id
                  ? 'bg-otec-blue text-white shadow-lg border-otec-blue transform scale-105'
                  : 'bg-white text-slate-600 hover:bg-otec-light border-slate-200'
              }`}
            >
              <div className={`p-2 rounded-lg ${activeId === product.id ? 'bg-white/20' : 'bg-slate-100 text-otec-blue'}`}>
                <product.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold">{product.shortName}</h3>
                <p className={`text-xs ${activeId === product.id ? 'text-blue-100' : 'text-slate-400'}`}>
                  {product.name}
                </p>
              </div>
              {activeId === product.id && <ArrowRight className="ml-auto" size={16} />}
            </button>
          ))}
        </div>

        {/* Right Col: Detail View */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          <div className="bg-slate-50 p-8 md:w-1/3 flex flex-col justify-center items-center text-center border-r border-slate-100">
            <activeProduct.icon size={64} className="text-otec-blue mb-4" />
            <h3 className="text-xl font-bold text-otec-dark">{activeProduct.name}</h3>
            <span className="inline-block mt-2 px-3 py-1 bg-otec-light text-otec-blue text-xs font-semibold rounded-full">
              {activeProduct.shortName}
            </span>
          </div>
          
          <div className="p-8 md:w-2/3">
            <h4 className="text-lg font-semibold text-slate-800 mb-2">Machine Overview</h4>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              {activeProduct.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Key Specs</h5>
                <ul className="space-y-2">
                  {activeProduct.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="text-otec-accent mt-1">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                 <h5 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Application</h5>
                 <div className="bg-blue-50 p-3 rounded-lg mb-3">
                    <p className="text-xs text-blue-800 font-medium">
                      <span className="block text-blue-400 text-[10px] uppercase">Best For</span>
                      {activeProduct.details.bestFor}
                    </p>
                 </div>
                 <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-xs text-slate-700 font-medium">
                      <span className="block text-slate-400 text-[10px] uppercase">Highlights</span>
                      {activeProduct.details.highlights[0]}
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLineup;