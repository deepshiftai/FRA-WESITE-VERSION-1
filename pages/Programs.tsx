
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PROGRAMS } from '../constants';
import { Program } from '../types';

const DetailModal = ({ program, onClose }: { program: Program; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 bg-emerald-900 overflow-hidden shrink-0">
          <img 
            src={`https://images.unsplash.com/photo-${program.id === 'healthy-diets' ? '1595841696677-6489ff3f8cd1' : program.id === 'equitable-production' ? '1500382017468-9049fed747ef' : program.id === 'food-governance' ? '1488459711635-0c4a58d442bb' : '1590779033100-9f60a05a013d'}?q=80&w=800&auto=format&fit=crop`} 
            className="w-full h-full object-cover opacity-30 grayscale" 
            alt="Program Background" 
          />
          <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-emerald-950/80 to-transparent">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2">{program.focus}</span>
            <h2 className="text-3xl font-bold text-white leading-tight">{program.title}</h2>
          </div>
        </div>
        <div className="p-8 md:p-10 space-y-6 overflow-y-auto">
          <div className="space-y-2">
            <h4 className="text-emerald-800 font-bold uppercase text-sm tracking-widest flex items-center">
              <i className="fa-solid fa-bullseye mr-2"></i> Strategic Objective
            </h4>
            <p className="text-slate-800 font-medium leading-relaxed">{program.objective}</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-emerald-800 font-bold uppercase text-sm tracking-widest flex items-center">
              <i className="fa-solid fa-circle-info mr-2"></i> Implementation Brief
            </h4>
            <p className="text-slate-600 leading-relaxed">{program.details || "Details coming soon..."}</p>
          </div>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.subAreas.map((area, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <i className="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                <span>{area}</span>
              </div>
            ))}
          </div>
          <div className="pt-6 sticky bottom-0 bg-white pb-2">
            <button 
              onClick={onClose}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-700/20"
            >
              Close Program Briefing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Programs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  
  const programIdParam = searchParams.get('view');

  useEffect(() => {
    if (programIdParam) {
      const prog = PROGRAMS.find(p => p.id === programIdParam);
      if (prog) {
        setSelectedProgram(prog);
      }
    } else {
      setSelectedProgram(null);
    }
  }, [programIdParam]);

  const handleOpenProgram = (prog: Program) => {
    setSearchParams({ view: prog.id });
  };

  const handleCloseModal = () => {
    setSearchParams({});
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <header className="bg-emerald-900 text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-emerald-100 text-xl max-w-3xl mx-auto">Implementing the 2022–2026 Strategic Plan for Food Systems Transformation across Uganda.</p>
        </div>
      </header>

      {/* Main Programs */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {PROGRAMS.map((prog, idx) => (
            <div key={prog.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="lg:w-1/2 w-full">
                <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  Workstream {idx + 1}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">{prog.title}</h2>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150 group-hover:bg-emerald-100 duration-500"></div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed italic relative z-10">{prog.description}</p>
                  
                  <div className="space-y-4 mb-8 relative z-10">
                    <h4 className="font-bold text-slate-800 border-b border-slate-50 pb-2 flex items-center">
                      <i className="fa-solid fa-list-check mr-2 text-emerald-600"></i> Focal Areas:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {prog.subAreas.slice(0, 4).map((area, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm text-slate-700">
                          <i className="fa-solid fa-circle-check text-emerald-500"></i>
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 relative z-10">
                    <button 
                      onClick={() => handleOpenProgram(prog)}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center space-x-2 shadow-lg shadow-emerald-700/20 group/btn"
                    >
                      <span>Read More</span>
                      <i className="fa-solid fa-arrow-right transform group-hover/btn:translate-x-1 transition-transform"></i>
                    </button>
                    <button 
                      onClick={() => handleOpenProgram(prog)}
                      className="border border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-3 rounded-xl font-bold transition-all"
                    >
                      View Full Brief
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full relative group cursor-pointer" onClick={() => handleOpenProgram(prog)}>
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-emerald-900/10 h-80 lg:h-96">
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1595841696677-6489ff3f8cd1', 
                      '1500382017468-9049fed747ef', 
                      '1488459711635-0c4a58d442bb', 
                      '1590779033100-9f60a05a013d'
                    ][idx]}?q=80&w=600&auto=format&fit=crop`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={prog.title} 
                  />
                  <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-emerald-900 px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                      Read Detailed Briefing
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className={`absolute -bottom-6 ${idx % 2 === 0 ? '-right-6' : '-left-6'} w-24 h-24 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 group-hover:opacity-60 transition-opacity`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProgram && (
        <div 
          className="fixed inset-0 z-[100]"
          onClick={handleCloseModal}
        >
          <DetailModal 
            program={selectedProgram} 
            onClose={handleCloseModal} 
          />
        </div>
      )}

      {/* Target Focused Initiatives */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Target Focused Initiatives (TFIs)</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Specialized streams designed to address regional gaps, demographic vulnerabilities, and emerging threats in the agrifood sector.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-3xl hover:bg-slate-700 transition-colors group">
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                <i className="fa-solid fa-person-breastfeeding text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Women’s Food Rights Empowerment</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Supports women’s leadership in food governance and promotes equitable access to productive resources. Given women constitute a large segment of the subsistence farming workforce, their empowerment is essential for national food security.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl hover:bg-slate-700 transition-colors group">
              <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                <i className="fa-solid fa-child-reaching text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Youth in Food Systems</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Youth under 35 represent over 75% of Uganda's population. This initiative engages youth as innovators in agrifood entrepreneurship and digital solutions to modernize traditional food systems.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl hover:bg-slate-700 transition-colors group">
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                <i className="fa-solid fa-cloud-sun-rain text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Climate Resilience & Adaptation</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Enables communities to withstand climate risks through climate-smart agriculture, local resilience planning, and advocate for policies that protect the environment while ensuring food production.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl hover:bg-slate-700 transition-colors group">
              <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                <i className="fa-solid fa-carrot text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Nutrition Security & Healthy Diets</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Focused on addressing persistent nutrition challenges through household-level education and advocacy for nutrition-sensitive policies that ensure food is not just available, but healthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 rounded-[3rem] p-12 text-center border border-emerald-100 shadow-inner">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Strategic Solutions</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Shifting the "software" of mindsets and the "hardware" of tools through comprehensive advocacy and capacity building.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
              <div className="text-emerald-600 text-3xl font-black uppercase tracking-tighter">Advocacy</div>
              <p className="text-sm text-slate-500">Influencing policy at all levels through evidence-based lobbying and citizen empowerment.</p>
            </div>
            <div className="space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
              <div className="text-emerald-600 text-3xl font-black uppercase tracking-tighter">Knowledge</div>
              <p className="text-sm text-slate-500">Generating actionable research for the African Food Policy Center to guide state decisions.</p>
            </div>
            <div className="space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
              <div className="text-emerald-600 text-3xl font-black uppercase tracking-tighter">Capacity</div>
              <p className="text-sm text-slate-500">Building skills for government duty bearers and citizen rights holders to demand and deliver justice.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
