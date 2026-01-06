
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  
  const categories = ['All', 'Healthy Diets', 'Equitable Production', 'Food Governance', 'Target Initiatives'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Ongoing': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Completed': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Upcoming': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <header className="bg-emerald-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Strategic Action</span>
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-emerald-100 text-xl max-w-3xl mx-auto leading-relaxed">
            Specific interventions bridging policy and grassroots impact to realize the right to food for all Ugandans.
          </p>
        </div>
      </header>

      {/* Interactive Filters */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-4 whitespace-nowrap">Filter by Workstream:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap border-2 ${
                    activeFilter === cat
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-lg shadow-emerald-700/20'
                      : 'bg-transparent text-slate-500 border-slate-100 hover:border-emerald-200 hover:text-emerald-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Showing {filteredProjects.length} Initiatives
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col group h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={project.title} 
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm backdrop-blur-md ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.summary}
                </p>
                
                <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100/50 mb-6">
                  <h4 className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-2 flex items-center">
                    <i className="fa-solid fa-chart-line mr-2"></i> Key Impact
                  </h4>
                  <p className="text-emerald-900 font-bold text-sm">
                    {project.impact}
                  </p>
                </div>
                
                <Link 
                  to={`/projects/${project.id}`}
                  className="w-full bg-slate-50 hover:bg-emerald-700 hover:text-white text-slate-700 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2 border border-slate-100 hover:border-emerald-700"
                >
                  <span>Project Details</span>
                  <i className="fa-solid fa-arrow-right-long text-[10px]"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200">
            <div className="w-20 h-20 bg-slate-50 text-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-layer-group text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-800">No projects found in this category</h3>
            <p className="text-slate-500 mt-2">Try adjusting your filters or check back soon for new initiatives.</p>
            <button 
              onClick={() => setActiveFilter('All')}
              className="mt-6 text-emerald-700 font-bold hover:underline"
            >
              View all projects
            </button>
          </div>
        )}
      </section>

      {/* Geographical Impact Section */}
      <section className="py-24 bg-white border-y border-slate-100" aria-labelledby="geo-impact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group cursor-zoom-in">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/bN2nZ4p3/FRA-FOOTPRINT.jpg" 
                    alt="Map of FRA operations and geographical footprint in Uganda" 
                    className="w-full h-auto object-cover select-none"
                    onDoubleClick={() => setIsMapModalOpen(true)}
                  />
                  <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-black/60 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-sm uppercase font-black tracking-widest">
                      Double Click for Full View
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">National Reach</span>
              <h2 id="geo-impact-heading" className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Geographical Impact of FRA</h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  The Food Rights Alliance strategic footprint spans the diverse landscape of Uganda, reaching into the heart of communities to drive agrifood system transformation. 
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our operations are strategically clustered into regional hubs across Central, Western (Rwenzori), and Eastern Uganda. This localized approach allows for deep grassroots engagement while maintaining a unified national advocacy voice. From the cattle corridor of Karamoja to the fertile highlands of the West, we ensure the right to food is realized in every corner of the nation through land rights protection, nutrition literacy, and climate-resilience building.
                </p>
                
                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 shrink-0">
                      <i className="fa-solid fa-map-pin"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Regional Networks</h4>
                      <p className="text-xs text-slate-500">4 established hubs coordinating grassroots food security.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 shrink-0">
                      <i className="fa-solid fa-earth-africa"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Diverse Ecosystems</h4>
                      <p className="text-xs text-slate-500">Tailored solutions for arid, highland, and urban zones.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
        <div className="bg-[#3D2314] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Project Collaboration</h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-8">
                FRA Uganda works with technical partners and donors to scale high-impact food security projects across all 146 districts. Interested in partnering on a specific workstream?
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-black/20">
                  Partner with Us
                </Link>
                <Link to="/membership" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all">
                  Join the Alliance
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                <div className="text-3xl font-black mb-2">60+</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-emerald-400">Alliance Partners</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                <div className="text-3xl font-black mb-2">14+</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-emerald-400">Districts Covered</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                <div className="text-3xl font-black mb-2">25Yrs</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-emerald-400">Operational History</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                <div className="text-3xl font-black mb-2">PANTEE</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-emerald-400">Project Principles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Full View Lightbox */}
      {isMapModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsMapModalOpen(false)}
        >
          <div className="absolute top-8 right-8 flex items-center space-x-4">
            <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] hidden sm:block">
              Click anywhere to close
            </span>
            <button 
              onClick={() => setIsMapModalOpen(false)}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              aria-label="Close full view"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>
          
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src="https://i.postimg.cc/bN2nZ4p3/FRA-FOOTPRINT.jpg" 
              alt="Full view of FRA foot print" 
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <h4 className="text-white text-lg font-bold">FRA Operational Footprint</h4>
            <p className="text-emerald-400 text-xs font-black uppercase tracking-widest mt-1">Uganda National Impact Hubs</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
