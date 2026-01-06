
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NEWS_ITEMS } from '../constants';

const NewsDetail: React.FC = () => {
  const { newsId } = useParams<{ newsId: string }>();

  const article = useMemo(() => {
    return NEWS_ITEMS.find(n => n.id === newsId);
  }, [newsId]);

  const recentNews = useMemo(() => {
    return NEWS_ITEMS.filter(n => n.id !== newsId).slice(0, 3);
  }, [newsId]);

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-stone-50">
        <div className="text-emerald-900/20 text-9xl font-black mb-8 select-none">404</div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4 uppercase tracking-tighter">Article Not Found</h2>
        <Link to="/news" className="text-emerald-700 font-black text-sm uppercase tracking-widest hover:underline flex items-center">
          <i className="fa-solid fa-arrow-left-long mr-2"></i>
          Back to all news
        </Link>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-stone-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="bg-emerald-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <nav className="flex items-center justify-center space-x-2 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <Link to="/news" className="hover:text-white transition-colors">News</Link>
            <span>/</span>
            <span className="text-white/60">{article.category}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-emerald-100/70">
            <span className="flex items-center">
              <i className="fa-regular fa-calendar-days mr-2"></i>
              {formatDate(article.date)}
            </span>
            <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
            <span className="flex items-center uppercase tracking-widest text-[10px]">
              <i className="fa-solid fa-tag mr-2"></i>
              {article.category}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-emerald-950/5 border border-slate-100">
            <div className="prose prose-emerald lg:prose-lg max-w-none">
              <p className="text-xl md:text-2xl text-slate-900 font-medium leading-relaxed mb-10 border-l-4 border-emerald-600 pl-6 italic">
                {article.description}
              </p>
              
              <div className="text-slate-700 leading-relaxed text-lg space-y-6">
                {article.fullContent ? (
                  article.fullContent.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))
                ) : (
                  <p>Detailed content for this article is being finalized. Please check back shortly for the full report.</p>
                )}
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
               <div className="flex items-center space-x-4">
                 <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Share this story:</span>
                 <div className="flex space-x-2">
                    <button className="w-10 h-10 bg-slate-50 hover:bg-emerald-600 hover:text-white rounded-xl flex items-center justify-center transition-all text-slate-500">
                      <i className="fa-brands fa-twitter"></i>
                    </button>
                    <button className="w-10 h-10 bg-slate-50 hover:bg-emerald-600 hover:text-white rounded-xl flex items-center justify-center transition-all text-slate-500">
                      <i className="fa-brands fa-facebook-f"></i>
                    </button>
                    <button className="w-10 h-10 bg-slate-50 hover:bg-emerald-600 hover:text-white rounded-xl flex items-center justify-center transition-all text-slate-500">
                      <i className="fa-solid fa-link"></i>
                    </button>
                 </div>
               </div>
               <Link 
                to="/news" 
                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg"
               >
                 Back to Media Center
               </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <h4 className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.2em] mb-6 flex items-center">
                <i className="fa-solid fa-newspaper mr-2"></i> Recent News
              </h4>
              <div className="space-y-8">
                {recentNews.map((news) => (
                  <Link key={news.id} to={`/news/${news.id}`} className="group block">
                    <div className="text-[9px] font-black text-amber-600 uppercase tracking-widest mb-1">{news.category}</div>
                    <h5 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2">{news.title}</h5>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{formatDate(news.date)}</div>
                  </Link>
                ))}
              </div>
              <Link to="/news" className="block text-center mt-10 text-emerald-700 font-bold text-xs uppercase tracking-widest hover:underline pt-6 border-t border-slate-50">
                View All Updates
              </Link>
            </div>

            <div className="bg-[#3D2314] rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4">Stay Informed</h4>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  Subscribe to our monthly newsletter to receive the latest reports, field updates, and policy analysis directly in your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-xs text-white placeholder:text-stone-500 outline-none focus:ring-2 focus:ring-emerald-500/30"
                  />
                  <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all">
                    Join Mailing List
                  </button>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </aside>
          
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
