
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const project = useMemo(() => {
    return PROJECTS.find(p => p.id === projectId);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-stone-50">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-emerald-700 font-bold hover:underline">
          Back to all projects
        </Link>
      </div>
    );
  }

  const getStatusColor = (status: typeof project.status) => {
    switch (status) {
      case 'Ongoing': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Completed': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Upcoming': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img 
          src={project.image} 
          className="w-full h-full object-cover" 
          alt={project.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">
              <Link to="/" className="hover:text-emerald-400">Home</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-emerald-400">Projects</Link>
              <span>/</span>
              <span className="text-white">{project.title}</span>
            </nav>
            <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <div className="w-8 h-1 bg-emerald-600 mr-4 rounded-full"></div>
                About the Project
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
                {project.summary}
              </p>
              <div className="text-slate-700 leading-relaxed space-y-6">
                {project.fullDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="bg-[#3D2314] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <i className="fa-solid fa-chart-line text-[10rem]"></i>
              </div>
              <h3 className="text-2xl font-bold mb-6">Direct Impact & Results</h3>
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 shrink-0">
                  <i className="fa-solid fa-bullseye text-3xl"></i>
                </div>
                <p className="text-xl font-bold leading-relaxed text-stone-100">
                  {project.impact}
                </p>
              </div>
            </div>

            {project.partners && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Project Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.partners.map((partner, i) => (
                    <div key={i} className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm text-center font-bold text-slate-700 text-sm">
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 sticky top-32">
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 border-b border-slate-50 pb-4">
                Quick Facts
              </h4>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-1">Status</span>
                  <div className={`self-start px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-1">Project Location</span>
                  <span className="text-slate-900 font-bold">{project.location}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-1">Timeline</span>
                  <span className="text-slate-900 font-bold">{project.duration}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-1">Workstream</span>
                  <span className="text-slate-900 font-bold">{project.category}</span>
                </div>
              </div>

              <div className="mt-12">
                <Link 
                  to="/contact" 
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-700/20"
                >
                  <i className="fa-solid fa-handshake"></i>
                  <span>Inquire About Project</span>
                </Link>
              </div>
            </div>

            <div className="bg-amber-50 rounded-[2rem] p-8 border border-amber-100">
              <h4 className="font-bold text-amber-900 mb-4">Want to support?</h4>
              <p className="text-amber-800 text-sm leading-relaxed mb-6">
                Specific projects like this one are funded through institutional grants and private donations. Your contribution can help us scale our impact.
              </p>
              <Link to="/contact" className="text-amber-900 font-black text-xs uppercase tracking-widest hover:underline">
                Donate to this Initiative &rarr;
              </Link>
            </div>
          </aside>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
