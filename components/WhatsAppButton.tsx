
import React, { useState, useEffect } from 'react';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = (scrolled / scrollHeight) * 100;

      if (scrollPercentage >= 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/256706535722', '_blank');
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-[100] transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-50 pointer-events-none'
      }`}
    >
      <button
        onClick={handleClick}
        aria-label="Contact us on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-110 active:scale-90"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
        
        {/* Tooltip */}
        <span className="absolute left-16 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Chat with us
        </span>

        {/* Pulsing ring effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
