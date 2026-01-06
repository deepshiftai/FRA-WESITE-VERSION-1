
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
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

      {/* Strategic Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
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
    </div>
  );
};

export default Projects;
