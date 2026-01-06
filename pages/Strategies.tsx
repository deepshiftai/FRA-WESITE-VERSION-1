
import React from 'react';
import { Link } from 'react-router-dom';
import PartnerStrip from '../components/PartnerStrip';

const Strategies: React.FC = () => {
  const strategyPillars = [
    {
      id: 'capacity',
      title: 'Capacity Building and Performance',
      icon: 'fa-users-gear',
      color: 'bg-emerald-600',
      description: 'This strategic component is designed to address capacity gaps in the alliance and its memberships that impact negatively on performance and organizational impact.',
      details: 'We provide technical training, institutional support, and professional development programs to ensure that our network of over 60 organizations operates with peak efficiency and scientific rigor.'
    },
    {
      id: 'knowledge',
      title: 'Knowledge Management Strategies',
      icon: 'fa-brain',
      color: 'bg-amber-600',
      description: 'Developing and implementing comprehensive knowledge management systems to enhance organizational learning and effectiveness.',
      details: 'Through the African Food Policy Center, we collect, analyze, and disseminate evidence-based research that informs national policy and empowers local communities with actionable data.'
    },
    {
      id: 'collaboration',
      title: 'Alliance Strategic Collaborations',
      icon: 'fa-handshake-angle',
      color: 'bg-emerald-600',
      description: 'Building strategic partnerships and collaborations to amplify our impact in the fight against hunger and food insecurity.',
      details: 'Zero hunger cannot be achieved in isolation. We bridge the gap between UN agencies, government ministries, local NGOs, and private sector innovators to create a unified front against malnutrition.'
    },
    {
      id: 'hrba',
      title: 'Human Rights Based Approach',
      icon: 'fa-scale-balanced',
      color: 'bg-amber-600',
      description: 'Implementing human rights-based approaches to ensure sustainable solutions to hunger and food security challenges.',
      details: 'Our work is grounded in the PANTEE principles: Participation, Accountability, Non-discrimination, Transparency, Equity, and Equality. We treat food not as a commodity, but as a fundamental biological right.'
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Header */}
      <header className="bg-emerald-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center justify-center space-x-2 text-emerald-300 text-[10px] font-black uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Our Strategies</span>
          </nav>
          <h1 className="text-5xl font-bold mb-6">Our Strategies</h1>
          <p className="text-emerald-100 text-xl max-w-3xl mx-auto leading-relaxed">
            Our proven solutions save the lives of families towards our goal of the World Free from Hunger.
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">A Rigorous Framework for Action</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            At Food Rights Alliance, strategy isn't just about planning—it's about the <span className="text-emerald-700 font-bold italic">methodology of transformation.</span> We operate at the intersection of human rights law, agricultural science, and community empowerment.
          </p>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Deep Dive Pillars */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {strategyPillars.map((pillar, idx) => (
            <div key={pillar.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
              <div className="md:w-1/2">
                <div className={`w-20 h-20 ${pillar.color} rounded-3xl flex items-center justify-center text-white shadow-2xl mb-8 transform -rotate-3`}>
                  <i className={`fa-solid ${pillar.icon} text-4xl`}></i>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">{pillar.title}</h3>
                <p className="text-xl text-slate-700 font-medium mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {pillar.details}
                </p>
                <div className="mt-10 flex items-center space-x-6">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Team Dedicated: 12 Members</span>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden shadow-inner group cursor-pointer">
                  <img 
                    src={`https://images.unsplash.com/photo-${pillar.id === 'capacity' ? '1522202176988-66273c2fd55f' : pillar.id === 'knowledge' ? '1454165833767-1390e4a2df4d' : pillar.id === 'collaboration' ? '1515162305285-0293e4767cc2' : '1589216532372-2c2a9d779c20'}?q=80&w=800&auto=format&fit=crop`} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    alt={pillar.title}
                  />
                  <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                {/* Decoration */}
                <div className={`absolute -bottom-10 ${idx % 2 === 1 ? '-left-10' : '-right-10'} w-40 h-40 bg-emerald-700/5 rounded-full blur-3xl`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 lg:p-20 rounded-[3rem] text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
              ENDING WORLD HUNGER REQUIRES A COMPREHENSIVE APPROACH
            </h2>
            <p className="text-xl text-stone-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              A world without hunger will never be achieved alone. We collaborate with communities, foundations, companies, governments, and humanitarian partners to achieve zero hunger.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70 grayscale brightness-200">
               <span className="font-black text-xl">COMMUNITIES</span>
               <span className="font-black text-xl">FOUNDATIONS</span>
               <span className="font-black text-xl">COMPANIES</span>
               <span className="font-black text-xl">GOVERNMENTS</span>
               <span className="font-black text-xl">HUMANITARIAN</span>
            </div>
            <div className="mt-16">
              <Link 
                to="/membership" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-emerald-900/40"
              >
                Become a Strategic Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PartnerStrip />
    </div>
  );
};

export default Strategies;
