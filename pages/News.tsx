
import React, { useState, useMemo } from 'react';
import { NEWS_ITEMS } from '../constants';
import { NewsItem } from '../types';

const News: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'Newest' | 'Oldest'>('Newest');

  const categories = ['All', 'Advocacy', 'Policy', 'Events', 'Research', 'Institutional'];

  const filteredAndSortedNews = useMemo(() => {
    let items = [...NEWS_ITEMS];
    
    // Filtering
    if (activeFilter !== 'All') {
      items = items.filter(item => item.category === activeFilter);
    }

    // Sorting
    items.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'Newest' ? dateB - dateA : dateA - dateB;
    });

    return items;
  }, [activeFilter, sortOrder]);

  const milestones = [
    { date: 'Dec 2025', event: 'Publication of "Hidden Iceberg" Report', impl: 'Identified industrial agriculture as risk for land defenders.' },
    { date: 'Aug 2025', event: 'Launch of 2nd National Health Conference', impl: 'Cross-sectoral focus on food safety as health determinant.' },
    { date: 'Sept 2024', event: 'NDP IV Stakeholder Workshops in Tooro', impl: 'Regional priorities integrated into national planning.' },
    { date: 'July 2024', event: 'Assent of Agriculture Chemical Control Act', impl: 'Regulation of hazardous chemicals finalized.' },
    { date: 'April 2023', event: 'Meeting with Parliamentary Committee', impl: 'Urged government to subsidize seeds for food security.' },
  ];

  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-stone-50 pb-20">
      <header className="bg-emerald-900 text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">News & Media</h1>
          <p className="text-emerald-100 text-xl max-w-3xl mx-auto">Latest updates and key milestones in our advocacy journey.</p>
        </div>
      </header>

      {/* Controls: Filter & Sort */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 whitespace-nowrap">Filter:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  aria-pressed={activeFilter === cat}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    activeFilter === cat
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 shrink-0">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Sort by:</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'Newest' | 'Oldest')}
                aria-label="Sort news items by date"
                className="bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500/20"
              >
                <option value="Newest">Newest First</option>
                <option value="Oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="recent-news-heading">
        <div className="flex items-baseline justify-between mb-12">
          <h2 id="recent-news-heading" className="text-3xl font-bold text-slate-900">
            {activeFilter === 'All' ? 'Recent Developments' : `${activeFilter} Updates`}
          </h2>
          <span className="text-slate-400 text-sm font-medium">{filteredAndSortedNews.length} items found</span>
        </div>

        {filteredAndSortedNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {filteredAndSortedNews.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1541976535111-444696ec0b3d', 
                      '1529156069898-49953e39b3ac', 
                      '1450101499163-c8848c66ca85', 
                      '1516321318423-f06f85e504b3', 
                      '1531206715517-5c0ba140b2b8'
                    ][idx % 5]}?q=80&w=600&auto=format&fit=crop`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt={`News coverage for: ${item.title}`} 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-emerald-800 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-slate-400 font-bold text-xs mb-2 uppercase tracking-tighter">
                    <i className="fa-regular fa-calendar-days mr-2"></i>
                    {formatDate(item.date)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">{item.description}</p>
                  <button aria-label={`Read full story about ${item.title}`} className="text-emerald-700 font-bold text-sm hover:underline self-start flex items-center group/link">
                    Read Story 
                    <i className="fa-solid fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-[3rem] border border-dashed border-slate-200">
            <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-magnifying-glass text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No news items found</h3>
            <p className="text-slate-500">Try adjusting your filter or search criteria.</p>
            <button 
              onClick={() => setActiveFilter('All')}
              className="mt-6 text-emerald-700 font-bold hover:underline"
            >
              Show all news
            </button>
          </div>
        )}
      </section>

      {/* Milestone Chronology */}
      <section className="py-20 bg-emerald-50" aria-labelledby="milestones-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="milestones-heading" className="text-3xl font-bold text-slate-900">Chronology of Policy Milestones</h2>
            <p className="text-slate-500 mt-2">Key advocacy successes and institutional achievements over the years.</p>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-300 before:to-transparent">
            {milestones.map((m, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" aria-hidden="true">
                   <i className="fa-solid fa-check text-xs"></i>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between space-x-2 mb-2">
                    <div className="font-black text-emerald-800 text-xs uppercase tracking-widest" aria-label={`Milestone date: ${m.date}`}>{m.date}</div>
                  </div>
                  <div className="font-bold text-slate-900 mb-1 leading-tight">{m.event}</div>
                  <div className="text-sm text-slate-500">{m.impl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
