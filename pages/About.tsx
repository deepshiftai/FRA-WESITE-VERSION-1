
import React from 'react';
import { BOARD_MEMBERS, SECRETARIAT_MEMBERS } from '../constants';
import PartnerStrip from '../components/PartnerStrip';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-stone-50 pb-20">
      {/* Header */}
      <header className="bg-emerald-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=1920&auto=format&fit=crop')] bg-cover opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-5xl font-bold mb-4">Institutional Profile</h1>
          <p className="text-emerald-100 text-xl max-w-3xl mx-auto">From a reactionary coalition to a proactive, rights-based vanguard for agrifood system governance.</p>
        </div>
      </header>

      {/* Message from Executive Director */}
      <section className="py-24 bg-white border-b border-slate-100" aria-labelledby="ed-message-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-emerald-50">
                <img 
                  src="https://i.postimg.cc/76KPRcBJ/kirabo_2_FRA_(1).jpg" 
                  alt="Agnes Kirabo - Executive Director, FRA Uganda" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl z-0"></div>
            </div>
            
            <div className="lg:col-span-7">
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Leadership Statement</span>
              <h2 id="ed-message-heading" className="text-4xl font-bold text-slate-900 mb-8">Message from the Executive Director</h2>
              
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed italic font-medium">
                <p>
                  "Welcome to the Food Rights Alliance Uganda. For over two decades, we have been at the forefront of promoting the human right to adequate food for all Ugandans. Our commitment goes beyond advocacy – we work tirelessly to create sustainable solutions that address the root causes of hunger and malnutrition in our communities."
                </p>
                <p>
                  "Through strategic partnerships, capacity building, and evidence-based advocacy, we continue to champion the rights of smallholder farmers, promote sustainable agricultural practices, and ensure that every Ugandan has access to safe, nutritious, and culturally appropriate food."
                </p>
                <p>
                  "Our work is guided by the fundamental belief that food is not just a commodity, but a basic human right that forms the foundation for human dignity and development. Together with our partners and communities, we are building a Uganda where no one goes to bed hungry."
                </p>
                <p className="not-italic text-slate-600 text-base">
                  Thank you for your continued support in our mission to create a food-secure Uganda for all.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100 flex items-center space-x-6">
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Agnes Kirabo</h4>
                  <p className="text-emerald-700 font-bold uppercase tracking-widest text-xs">Executive Director</p>
                </div>
                <div className="h-10 w-[1px] bg-slate-200"></div>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors"><i className="fa-brands fa-linkedin text-xl"></i></a>
                  <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors"><i className="fa-brands fa-twitter text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution & Philosophy */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Evolution</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in <span className="text-emerald-700 font-bold">1999</span>, the Food Rights Alliance emerged as a network of advocates dedicated to the right to adequate food.
                  Initially, the coalition was constituted to address the World Trade Organization (WTO) talks in Seattle.
                </p>
                <p>
                  By 2000, the alliance pivoted to engage with the Government of Uganda’s Plan for Modernization of Agriculture (PMA). Over the subsequent decades, the FRA has grown from three founding institutions to a robust network of more than 60 national, international, and local organizations.
                </p>
                <p>
                  Our network now includes four regional food security networks across Central, Western (Rwenzori), and Eastern Uganda.
                </p>
              </div>
            </div>

            <div className="bg-[#3D2314] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <i className="fa-solid fa-quote-right text-[10rem]"></i>
              </div>
              <h4 className="text-emerald-400 font-bold mb-6 uppercase tracking-[0.3em] text-[10px]">Our Ethical Mandate</h4>
              <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6 italic text-stone-100">
                "Speak up for those who cannot speak for themselves, for the rights of all who are destitute. Speak up and judge fairly; defend the rights of the poor and needy."
              </p>
              <footer className="text-emerald-400 font-black tracking-widest uppercase text-xs">— Proverbs 31:8-9</footer>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Governance Structure</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              The governance of the Food Rights Alliance is multi-tiered, ensuring accountability and professional rigor. The Board of Directors (BOD) provides strategic oversight, while the Secretariat executes the day-to-day programmatic and operational mandates.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 shrink-0">
                  <i className="fa-solid fa-crown text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Board of Directors</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Responsible for policy setting, fiduciary oversight, and long-term strategic direction.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 shrink-0">
                  <i className="fa-solid fa-briefcase text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">The Secretariat</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Headed by the Executive Director, managing thematic programs, technical research, and administration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Grid - Board */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-700 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Executive Oversight</span>
            <h2 className="text-4xl font-bold text-slate-900">Our Board of Directors</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto italic">Hover over our leadership cards to learn more about their specific governance functions within the Alliance.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {BOARD_MEMBERS.map((member, i) => (
              <div 
                key={i} 
                className="group relative h-[450px] w-full rounded-3xl overflow-hidden bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="absolute inset-0 h-full w-full object-cover grayscale-0 group-hover:grayscale group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{member.name}</h3>
                  <p className="text-emerald-300 font-bold uppercase tracking-widest text-[10px] mt-1">{member.designation}</p>
                </div>
                <div className="absolute inset-0 bg-[#3D2314]/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-center p-8 text-center">
                  <div className="w-12 h-1 bg-emerald-500 mx-auto mb-6 rounded-full"></div>
                  <h4 className="text-emerald-400 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Governance Function</h4>
                  <p className="text-white text-lg font-medium leading-relaxed italic">
                    "{member.function}"
                  </p>
                  <div className="mt-8 flex justify-center space-x-4">
                    <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-all">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-all">
                      <i className="fa-solid fa-envelope"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Secretariat Team - UNIQUE ANIMATED CARDS */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-emerald-700 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">The Workforce</span>
              <h2 className="text-4xl font-bold text-slate-900">Alliance Secretariat</h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                The technical heart of FRA Uganda, comprised of specialists in food systems, policy, finance, and community engagement who drive our day-to-day impact.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="inline-flex items-center space-x-3 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-2xl font-bold text-sm">
                <i className="fa-solid fa-users-gear"></i>
                <span>Technical Experts</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {SECRETARIAT_MEMBERS.map((staff, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                {/* Image Container with unique floating effect & color border */}
                <div className="relative mb-6 w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-white border-2 border-transparent group-hover:border-emerald-500/30">
                  <img 
                    src={staff.image} 
                    alt={staff.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle wash overlay that appears on hover */}
                  <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-all duration-500"></div>
                  
                  {/* Contact floating bubble that slides in */}
                  <div className="absolute top-4 right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-10 h-10 bg-white text-emerald-700 rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors" title={`Contact ${staff.name}`}>
                      <i className="fa-solid fa-envelope-open-text"></i>
                    </button>
                  </div>
                </div>

                {/* Info area with slide-up micro-animation */}
                <div className="space-y-2 transform group-hover:-translate-y-3 transition-transform duration-500">
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">{staff.name}</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-[2px] w-4 bg-amber-400 group-hover:w-8 transition-all"></div>
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 group-hover:text-emerald-600">{staff.designation}</p>
                    <div className="h-[2px] w-4 bg-amber-400 group-hover:w-8 transition-all"></div>
                  </div>
                </div>

                {/* Detail text / bio snippet placeholder */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex justify-center space-x-4">
                  <a href="#" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-600 transition-all"><i className="fa-brands fa-linkedin-in text-xs"></i></a>
                  <a href="#" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-600 transition-all"><i className="fa-brands fa-twitter text-xs"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIVING OPTIONS Section */}
      <section className="py-24 bg-white border-t border-slate-100" aria-labelledby="giving-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="giving-heading" className="text-emerald-700 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Giving Options</h2>
            <h3 className="text-4xl font-bold text-slate-900">3 Ways You Can Help</h3>
            <div className="h-1 w-20 bg-amber-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Monthly */}
            <div className="bg-emerald-50 rounded-[3rem] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all border border-emerald-100 group">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-calendar-check text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-emerald-900 mb-2">Give Monthly</h4>
              <p className="text-emerald-700 font-bold text-[10px] uppercase tracking-widest mb-6">Become a Partner for Change</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-10 flex-grow">
                The Food Rights Alliance network is meeting the needs of families across Uganda and helping them build a brighter future. Give monthly to enhance our goal of the fight for food year-round to hungry families.
              </p>
              <Link to="/contact" className="w-full bg-emerald-700 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-700/20">
                <i className="fa-solid fa-heart mr-2"></i> Donate Monthly
              </Link>
            </div>

            {/* Card 2: Today */}
            <div className="bg-amber-50 rounded-[3rem] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all border border-amber-100 group scale-105 z-10">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-gift text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-amber-900 mb-2">Donate Today</h4>
              <p className="text-amber-700 font-bold text-[10px] uppercase tracking-widest mb-6">Give a Gift That You Can</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-10 flex-grow">
                One in three people suffers from food insecurity and malnutrition, but we believe in a future where no one does. To help end this injustice, you can make a secure donation via credit card or PayPal.
              </p>
              <Link to="/contact" className="w-full bg-amber-600 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20">
                <i className="fa-solid fa-heart mr-2"></i> Donate Now
              </Link>
            </div>

            {/* Card 3: Fundraising */}
            <div className="bg-slate-50 rounded-[3rem] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all border border-slate-200 group">
              <div className="w-16 h-16 bg-slate-800 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-utensils text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Set the Table</h4>
              <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-6">Create a Personal Campaign</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-10 flex-grow">
                Help Set the Table for a hunger-free nation by advocating for the right to food. Host a dinner party and ask your guests to donate instead of bringing a dish. Run a marathon and have friends sponsor your effort.
              </p>
              <Link to="/membership" className="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-950 transition-colors shadow-lg shadow-slate-900/20">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Strip Integration */}
      <PartnerStrip />
    </div>
  );
};

export default About;
