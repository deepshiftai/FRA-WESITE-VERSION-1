
import React from 'react';

const PARTNER_LIST = [
  { name: 'ACTIONAID', logo: 'https://i.postimg.cc/vBvG9VWh/ACTIONAID.png' },
  { name: 'FAO', logo: 'https://i.postimg.cc/NFJYCvCF/FAO.png' },
  { name: 'IFAD', logo: 'https://i.postimg.cc/GthdjmK0/IFAD.png' },
  { name: 'IFPRI', logo: 'https://i.postimg.cc/NMxQTH1x/IFPRI.png' },
  { name: 'MAAIF', logo: 'https://i.postimg.cc/ydKVkPSd/MAAIF.png' },
  { name: 'MOH', logo: 'https://i.postimg.cc/FRxhcLjz/MOH-UG.png' },
  { name: 'OPM', logo: 'https://i.postimg.cc/W3V2hnqQ/OPM.png' },
  { name: 'OXFAM', logo: 'https://i.postimg.cc/Kjvx58NJ/OXFAM.png' },
  { name: 'UNICEF', logo: 'https://i.postimg.cc/vTHbvZhH/UNICEF.png' },
  { name: 'WFP', logo: 'https://i.postimg.cc/zvX8kG75/WFP.png' },
  { name: 'WORLDVISION', logo: 'https://i.postimg.cc/xCP9HzKp/WORLDVISION.png' },
];

const PartnerStrip: React.FC = () => {
  // Duplicate list to ensure seamless looping for the infinite scroll
  const scrollingItems = [...PARTNER_LIST, ...PARTNER_LIST, ...PARTNER_LIST];

  return (
    <section className="py-20 bg-white border-t border-slate-100 overflow-hidden" aria-labelledby="partners-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 id="partners-heading" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-2">Our Strategic Partners & Collaborators</h2>
        <div className="h-1 w-12 bg-emerald-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-scroll flex whitespace-nowrap py-4">
          {scrollingItems.map((partner, idx) => (
            <div 
              key={idx} 
              className="mx-8 flex items-center justify-center min-w-[180px] group"
            >
              <div className="h-20 w-auto flex items-center justify-center transition-all duration-500">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} official logo`}
                  className="h-full w-auto object-contain grayscale-0 group-hover:grayscale transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Global style for the scroll animation */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default PartnerStrip;
