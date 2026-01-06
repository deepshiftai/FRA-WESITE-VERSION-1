
import React from 'react';
import { HUNGER_METRICS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-2xl shadow-2xl border border-emerald-100 animate-in fade-in zoom-in-95 duration-200 min-w-[200px]">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.color }}></div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{label}</p>
        </div>
        <p className="text-3xl font-black text-slate-900 mb-2">
          {payload[0].value}% 
          <span className="text-sm font-medium text-slate-400 ml-1">Insecure</span>
        </p>
        <div className="pt-2 border-t border-slate-50">
          <p className="text-xs text-slate-600 leading-relaxed italic">
            {data.description}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const Resources: React.FC = () => {
  const chartData = [
    { name: 'Karamoja', value: 63, color: '#ef4444', description: 'Facing severe environmental stress, chronic dry spells, and systemic isolation.' },
    { name: 'Bukedi', value: 50, color: '#f59e0b', description: 'High population density leads to fragmented land use and reduced subsistence yields.' },
    { name: 'West Nile', value: 48, color: '#f59e0b', description: 'Strained resources due to significant refugee hosting and seasonal climate variability.' },
    { name: 'National Avg', value: 46, color: '#10b981', description: 'The current aggregate baseline for Uganda as of the 2024 assessment cycle.' },
  ];

  return (
    <div className="bg-stone-50 pb-20">
      <header className="bg-emerald-900 text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Resources & Metrics</h1>
          <p className="text-emerald-100 text-xl max-w-3xl mx-auto">Data-driven insights and a vital library for researchers and policymakers.</p>
        </div>
      </header>

      {/* Publications */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Key Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'PDM Nutrition Handbook', desc: 'Promoting nutrition through primary development models.' },
            { title: 'OPERA Framework: Aflatoxin', desc: '2024 report on hazardous agrochemicals in Uganda.' },
            { title: 'Extension Worker Handbook', desc: 'Frontline resource for integrating nutrition in agriculture.' },
            { title: 'NSA Statements', desc: 'Annual assessments of sector performance and budget.' }
          ].map((pub, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border hover:border-emerald-300 transition-all flex flex-col group">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <h4 className="font-bold text-slate-800 mb-2">{pub.title}</h4>
              <p className="text-xs text-slate-500 mb-4 flex-grow">{pub.desc}</p>
              <button className="text-emerald-700 text-xs font-bold uppercase tracking-widest hover:underline">Download PDF &darr;</button>
            </div>
          ))}
        </div>
      </section>

      {/* Data Visualization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Regional Food Insecurity Metrics</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                2024-2025 assessment data is critical for understanding the current crisis. Stunting remains a critical issue nationally, affecting <span className="text-red-600 font-bold">29% of children under five</span>. In Karamoja, this rises to 43.8%.
              </p>
              <div className="h-96 w-full -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: '#94a3b8' }} 
                      label={{ value: '% Population Insecure', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#94a3b8', fontSize: 12 } }} 
                    />
                    <Tooltip 
                      content={<CustomTooltip />} 
                      cursor={{ fill: '#f8fafc' }} 
                      wrapperStyle={{ outline: 'none' }}
                    />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={50}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] text-slate-400 text-center mt-2 italic uppercase tracking-widest">
                Hover over bars to view regional context
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm border-b pb-4">IPC Projections (Aug 2024 - Feb 2025)</h3>
              <div className="space-y-6">
                {HUNGER_METRICS.map((metric, i) => (
                  <div key={i} className="flex justify-between items-start border-b border-slate-200 pb-4 last:border-0">
                    <div>
                      <h4 className="font-bold text-emerald-900">{metric.region}</h4>
                      <p className="text-xs text-slate-500">Driver: {metric.driver}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-slate-800">{metric.population}</div>
                      <div className="text-[10px] text-amber-600 uppercase font-bold">{metric.outlook}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal and Policy */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-900 text-amber-50 rounded-[3rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-6">The Right to Food: Legal & Policy</h2>
            <p className="text-amber-100/80 mb-8 leading-relaxed">
              We advocate for an <span className="text-amber-300 font-bold">"apex food law"</span> in Uganda to consolidate the currently fragmented legal framework. While the 1995 Constitution mentions food security, the lack of a primary statute limits state obligations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-scale-balanced text-amber-400"></i>
                <span>Agrochemical Regulation (Act 2024)</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-seedling text-amber-400"></i>
                <span>Seed and Land Rights Advocacy</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-chart-line text-amber-400"></i>
                <span>Budget Tracking: UGX 333 Billion target</span>
              </div>
            </div>
          </div>
          <div className="bg-amber-800/50 flex items-center justify-center p-12">
            <div className="text-center">
              <div className="text-6xl font-black mb-4">UGX 333B</div>
              <p className="text-amber-200 max-w-xs mx-auto">Goal: Urging government to increase funding for agricultural extension services.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
