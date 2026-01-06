
import React, { useState } from 'react';
import { PARTNERS } from '../constants';

const Membership: React.FC = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    orgType: 'Local NGO',
    regNumber: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    motivation: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-stone-50 pb-20">
      <header className="bg-emerald-900 text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Join the Movement</h1>
          <p className="text-emerald-100 text-xl max-w-3xl mx-auto">Becoming a part of the alliance-driven ecosystem for food justice in Uganda.</p>
        </div>
      </header>

      {/* Membership Details & Partnership Info */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Membership Framework</h2>
            <p className="text-slate-600 leading-relaxed">
              Membership is open to any legally registered entity that supports the mission of promoting the right to food. We are a coalition of more than 60 national and international organizations.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
                <h4 className="font-bold text-emerald-800 mb-2">Eligibility</h4>
                <p className="text-sm text-slate-600">Requires a copy of the organization's constitution, certificate of incorporation, and a current strategic plan.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
                <h4 className="font-bold text-emerald-800 mb-2">Investment Fees</h4>
                <div className="flex justify-between text-sm text-slate-600 mt-2">
                  <span>One-time Entry Fee:</span>
                  <span className="font-bold">UGX 50,000</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Annual Subscription:</span>
                  <span className="font-bold">UGX 100,000</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
                <h4 className="font-bold text-emerald-800 mb-2">Key Obligations</h4>
                <p className="text-sm text-slate-600">Members must attend the AGM in August, actively share sectoral knowledge, and participate in thematic workgroups.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 self-start">
             <div className="p-8 bg-amber-500 text-white">
                <h3 className="text-2xl font-bold">The Partnership Network</h3>
                <p className="text-amber-50 mt-2">Working with global and local partners to amplify impact.</p>
             </div>
             <div className="p-4 overflow-x-auto">
               <table className="w-full text-left text-sm">
                 <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 font-bold text-slate-800 uppercase text-[10px] tracking-widest">Sector</th>
                      <th className="px-4 py-3 font-bold text-slate-800 uppercase text-[10px] tracking-widest">Key Organizations</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                    {PARTNERS.map((p, i) => (
                      <tr key={i}>
                        <td className="px-4 py-4 font-bold text-emerald-700">{p.type}</td>
                        <td className="px-4 py-4 text-slate-600">{p.organizations}</td>
                      </tr>
                    ))}
                 </tbody>
               </table>
             </div>
             <div className="p-6 bg-slate-50 italic text-xs text-slate-500 text-center">
               Active in multi-stakeholder platforms like the "Good Food Parliament" and regional food governance councils.
             </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden" id="apply-form">
          <div className="bg-emerald-800 p-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">Membership Application Form</h2>
            <p className="text-emerald-100">Start your journey toward becoming an official FRA partner.</p>
          </div>
          
          <div className="p-10">
            {submitted ? (
              <div className="text-center py-12 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-check text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Application Received!</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Thank you for applying to join the Food Rights Alliance. Our Secretariat will review your organization's details and contact you within 5 business days regarding the next steps.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-800 transition-colors"
                >
                  Apply for another entity
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Organization Name *</label>
                    <input 
                      required
                      type="text" 
                      name="orgName"
                      value={formData.orgName}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all" 
                      placeholder="e.g. Sustainable Uganda NGO" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Type of Organization *</label>
                    <select 
                      name="orgType"
                      value={formData.orgType}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
                    >
                      <option>Local NGO</option>
                      <option>International NGO</option>
                      <option>Community Based Org (CBO)</option>
                      <option>Research Institution</option>
                      <option>Farmers Association</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Registration Number</label>
                    <input 
                      type="text" 
                      name="regNumber"
                      value={formData.regNumber}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all" 
                      placeholder="e.g. NGO/1234/2023" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Contact Person Name *</label>
                    <input 
                      required
                      type="text" 
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all" 
                      placeholder="Full Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all" 
                      placeholder="email@organization.org" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all" 
                      placeholder="+256..." 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Motivation for Joining FRA *</label>
                  <textarea 
                    required
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all" 
                    placeholder="Tell us how your organization's work aligns with the Human Right to Adequate Food..."
                  ></textarea>
                </div>

                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                  <p className="text-amber-800 text-xs leading-relaxed">
                    <i className="fa-solid fa-circle-info mr-2"></i>
                    <strong>Note:</strong> Upon clicking submit, you agree to submit the required supporting documents (Constitution and Registration Certificate) via email to <strong>fra@frauganda.org</strong> as part of the screening process.
                  </p>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className={`w-full py-5 rounded-2xl font-bold text-white transition-all transform hover:scale-[1.01] shadow-xl ${
                    isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-emerald-700 hover:bg-emerald-800 shadow-emerald-700/20'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fa-solid fa-circle-notch fa-spin mr-3"></i>
                      Processing Application...
                    </span>
                  ) : 'Submit Membership Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
