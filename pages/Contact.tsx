
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-50 pb-20">
      <header className="bg-emerald-900 text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-emerald-100 text-xl max-w-3xl mx-auto">Providing the necessary information for stakeholder engagement and inquiries.</p>
        </div>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
            <form className="space-y-6 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all">
                  <option>Partnership Inquiry</option>
                  <option>Membership Application</option>
                  <option>Resource Request</option>
                  <option>Media Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-emerald-700 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/20">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <i className="fa-solid fa-map-location-dot text-9xl"></i>
               </div>
               <h3 className="text-2xl font-bold mb-8">Alliance Secretariat</h3>
               <div className="space-y-6">
                 <div className="flex items-start space-x-4">
                    <i className="fa-solid fa-location-dot mt-1 text-emerald-400"></i>
                    <div>
                      <h4 className="font-bold">Physical Address</h4>
                      <p className="text-emerald-100/70 text-sm">Plot 82 Mutesa I Road - Namirembe, P.O. Box 5796, Kampala, Uganda</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-4">
                    <i className="fa-solid fa-phone mt-1 text-emerald-400"></i>
                    <div>
                      <h4 className="font-bold">Telephone / WhatsApp</h4>
                      <p className="text-emerald-100/70 text-sm">+256-706-535-222</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-4">
                    <i className="fa-solid fa-clock mt-1 text-emerald-400"></i>
                    <div>
                      <h4 className="font-bold">Business Hours</h4>
                      <p className="text-emerald-100/70 text-sm">Mon-Fri: 8:00 AM – 5:00 PM</p>
                      <p className="text-emerald-100/70 text-sm">Saturday: 9:00 AM – 12:00 PM</p>
                    </div>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <a href="https://www.fra.ug" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 transition-colors flex flex-col items-center group">
                 <i className="fa-solid fa-globe text-3xl text-emerald-600 mb-3"></i>
                 <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Website</span>
                 <span className="text-slate-900 font-medium">fra.ug</span>
               </a>
               <a href="#" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 transition-colors flex flex-col items-center group">
                 <i className="fa-brands fa-twitter text-3xl text-sky-500 mb-3"></i>
                 <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">X / Twitter</span>
                 <span className="text-slate-900 font-medium">@FoodRightsUG</span>
               </a>
               <a href="#" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 transition-colors flex flex-col items-center group">
                 <i className="fa-brands fa-facebook text-3xl text-blue-600 mb-3"></i>
                 <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Facebook</span>
                 <span className="text-slate-900 font-medium">FRA Uganda</span>
               </a>
               <a href="#" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 transition-colors flex flex-col items-center group">
                 <i className="fa-brands fa-linkedin text-3xl text-blue-800 mb-3"></i>
                 <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">LinkedIn</span>
                 <span className="text-slate-900 font-medium">Food Rights Alliance</span>
               </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="p-10 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Visit Our Head Office</h2>
              <p className="text-slate-500 mt-2">Find us at Namirembe Hill, the heart of our advocacy work.</p>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Plot+82+Mutesa+I+Road+Namirembe+Kampala+Uganda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors"
            >
              <span>Open in Google Maps</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <div className="w-full h-[450px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757827845348!2d32.55620957586523!3d0.31422799968266946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc8010f3c5b5%3A0x6a0c5c4e7f8e8b8!2sMutesa%20I%20Rd%2C%20Kampala!5e0!3m2!1sen!2sug!4v1715876543210!5m2!1sen!2sug" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="FRA Uganda Location Map"
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
          <div className="bg-emerald-50 p-6 text-center text-sm text-emerald-800 font-medium">
            <i className="fa-solid fa-location-arrow mr-2"></i>
            Alliance Secretariat: Plot 82 Mutesa I Road, Namirembe, Kampala
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
