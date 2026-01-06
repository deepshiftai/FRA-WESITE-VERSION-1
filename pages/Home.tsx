
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMS } from '../constants';
import PartnerStrip from '../components/PartnerStrip';

const HERO_SLIDES = [
  {
    image: "https://i.postimg.cc/pXcTCrTy/uganda-clinic-article-rtf.png",
    tagline: "Nourishing Governance, Sustaining Futures",
    title: "Realizing the Human Right to Adequate Food",
    subtitle: "The Food Rights Alliance is the proactive, rights-based vanguard for agrifood system governance in Uganda.",
    cta: "Our Programs",
    link: "/programs"
  },
  {
    image: "https://i.postimg.cc/gktJsjJ6/sogam.jpg",
    tagline: "Sustainable Nutrition for All",
    title: "Safe & Healthy Diets for Every Community",
    subtitle: "Bridging the gap between producers and consumers to ensure food safety and maternal nutrition.",
    cta: "Healthy Diets",
    link: "/programs"
  },
  {
    image: "https://i.postimg.cc/bNVJgrJm/FRA-new-members.jpg",
    tagline: "Empowering Smallholder Farmers",
    title: "Equitable Production & Market Systems",
    subtitle: "Building resilient systems that allow farmers to thrive through climate-smart and fair trade practices.",
    cta: "Equitable Systems",
    link: "/programs"
  }
];

const GALLERY_IMAGES = [
  {
    url: "https://i.postimg.cc/Wb1z0g2s/1738063120521.jpg",
    title: "Field Engagement",
    desc: "Collaborating with local stakeholders to identify agrifood challenges."
  },
  {
    url: "https://i.postimg.cc/NfjFRmgf/Agnesd-Kirabo.jpg",
    title: "Strategic Leadership",
    desc: "ED Agnes Kirabo speaking at a national food governance forum."
  },
  {
    url: "https://i.postimg.cc/VkSNVwrZ/asdasdsad.jpg",
    title: "Community Outreach",
    desc: "Building resilience through direct grassroots participation."
  },
  {
    url: "https://i.postimg.cc/y8JNbKgv/Civil-Society-420x280vfdsff.jpg",
    title: "Civil Society Mobilization",
    desc: "Strengthening the collective voice for right-to-food advocacy."
  },
  {
    url: "https://i.postimg.cc/4N2dPydB/fhffhj.jpg",
    title: "Policy Dialogue",
    desc: "Engaging duty bearers on institutional food security frameworks."
  },
  {
    url: "https://i.postimg.cc/pXcTCrTC/fhffjhgj.jpg",
    title: "Technical Workshops",
    desc: "Training practitioners on the Human Rights Based Approach."
  },
  {
    url: "https://i.postimg.cc/bNVJgrJm/FRA-new-members.jpg",
    title: "Alliance Growth",
    desc: "Welcoming new member organizations into the FRA network."
  },
  {
    url: "https://i.postimg.cc/fTRyYmwt/FRA-new-members-new.jpg",
    title: "Consensus Building",
    desc: "Member organizations aligning on strategic advocacy priorities."
  },
  {
    url: "https://i.postimg.cc/2896Gy6n/G4-j-DOt-WQAAclr-K.jpg",
    title: "Public Awareness",
    desc: "Raising visibility for critical nutrition and food safety issues."
  },
  {
    url: "https://i.postimg.cc/02XQnjQY/G4u-mj-YXIAAUfcq.jpg",
    title: "Institutional Advocacy",
    desc: "Presenting evidence-based recommendations to government committees."
  },
  {
    url: "https://i.postimg.cc/BQnb2Hqs/G4v0Zw-UWk-AAv-FGJ.jpg",
    title: "Collaborative Planning",
    desc: "Designing impactful interventions for vulnerable communities."
  },
  {
    url: "https://i.postimg.cc/kgV5pC6s/G70f-H-g-Ws-AI2Of-Ffhf.jpg",
    title: "Governance Sessions",
    desc: "Board and Secretariat coordination for organizational excellence."
  },
  {
    url: "https://i.postimg.cc/mgcr54zw/MEMBERS-OF-THE-WOMEN-LAND-RIGHTS-MOVEMENT.jpg",
    title: "Women's Land Rights",
    desc: "Empowering women food producers through secure resource tenure."
  },
  {
    url: "https://i.postimg.cc/ZKsRHnRj/Right-to-health.jpg",
    title: "Food & Health Linkage",
    desc: "Integrating nutrition security into the broader right-to-health agenda."
  },
  {
    url: "https://i.postimg.cc/NfjFRmgL/strategic-results-4-landscape.jpg",
    title: "Impact Monitoring",
    desc: "Reviewing strategic results and field impact across Uganda."
  },
  {
    url: "https://i.postimg.cc/FsHz039Y/Whats-App-Image-2025-01-09-at-23-10-34-72adc5ae-28467603.jpg",
    title: "Joint Field Missions",
    desc: "Verifying project progress with national and international partners."
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    
    const galleryTimer = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 5000);

    return () => {
      clearInterval(heroTimer);
      clearInterval(galleryTimer);
    };
  }, []);

  const renderTitle = (title: string) => {
    const highlight = "Adequate Food";
    if (title.includes(highlight)) {
      const [before, after] = title.split(highlight);
      return (
        <>
          {before}<span className="text-emerald-400">{highlight}</span>{after}
        </>
      );
    }
    return title;
  };

  return (
    <div className="overflow-hidden">
      {/* Dynamic Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full" aria-roledescription="carousel" aria-label="Main highlights">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            aria-hidden={index !== currentSlide}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                className="w-full h-full object-cover" 
                alt={`Illustrative image for: ${slide.title}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent"></div>
            </div>
            
            {/* Content Container - Fixed Alignment */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col justify-center h-full max-w-2xl">
                <div className={`transform transition-all duration-1000 delay-300 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}>
                  <h4 className="text-amber-400 font-bold uppercase tracking-widest mb-4 inline-block px-2 py-1 bg-amber-400/10 rounded backdrop-blur-sm">
                    "{slide.tagline}"
                  </h4>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                    {renderTitle(slide.title)}
                  </h1>
                  <p className="text-lg md:text-xl text-emerald-50/90 mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to={slide.link} 
                      aria-label={`Learn more about ${slide.cta}`}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-emerald-900/40"
                    >
                      {slide.cta}
                    </Link>
                    <Link 
                      to="/about" 
                      aria-label="Learn about our organizational history"
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
                    >
                      Our History
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-20">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show highlight slide ${index + 1}`}
              aria-pressed={index === currentSlide}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'bg-emerald-400 w-12' : 'bg-white/40 hover:bg-white/60 w-3'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Urgency Metrics */}
      <section className="py-20 bg-white" aria-labelledby="metrics-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="metrics-heading" className="text-4xl font-bold text-slate-900 mb-6">Grounding Our Mission in Reality</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The digital threshold of the Food Rights Alliance immediately anchors the visitor in the legal and moral gravity of the right to food. 
                Food systems transformation is not merely a policy goal but a <span className="text-emerald-700 font-bold italic">biological necessity for survival.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                  <div className="text-4xl font-extrabold text-amber-600 mb-2">46%</div>
                  <div className="text-slate-800 font-bold mb-1">Food Insecure</div>
                  <p className="text-sm text-slate-500">Nearly half of Ugandans face persistent food insecurity.</p>
                </div>
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="text-4xl font-extrabold text-emerald-600 mb-2">26%</div>
                  <div className="text-slate-800 font-bold mb-1">Child Stunting</div>
                  <p className="text-sm text-slate-500">Affecting growth and cognitive development permanently.</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Regional Severity: Karamoja</h4>
                <div className="w-full bg-slate-200 h-2 rounded-full mb-4" role="progressbar" aria-valuenow={63} aria-valuemin={0} aria-valuemax={100} aria-label="Food insecurity level in Karamoja">
                  <div className="bg-red-500 h-2 rounded-full w-[63%]"></div>
                </div>
                <p className="text-sm text-slate-600">63% Food insecurity in Karamoja sub-region requires urgent systemic change.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="https://i.postimg.cc/Prbb5Bt1/fra-dsd.png" className="rounded-2xl shadow-lg mt-12" alt="Institutional impact and field report graphics" />
              <img src="https://i.postimg.cc/VL99k3YR/ug-market-final.png" className="rounded-2xl shadow-lg mb-12" alt="Vibrant Ugandan food market scene" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategies - NEW SECTION */}
      <section className="py-24 bg-slate-50" aria-labelledby="strategies-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Strategies</span>
            <h2 id="strategies-heading" className="text-4xl font-bold text-slate-900 mb-6">How We Fight Hunger</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our proven solutions save the lives of families towards our goal of the World Free from Hunger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <i className="fa-solid fa-users-gear text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Capacity Building and Performance</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                This strategic component is designed to address capacity gaps in the alliance and its memberships that impact negatively on performance and organizational impact.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all">
                <i className="fa-solid fa-brain text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Knowledge Management Strategies</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Developing and implementing comprehensive knowledge management systems to enhance organizational learning, data utilization, and overall effectiveness.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <i className="fa-solid fa-handshake-angle text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Alliance Strategic Collaborations</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Building strategic partnerships and collaborations to amplify our collective impact in the fight against hunger and persistent food insecurity across Uganda.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all">
                <i className="fa-solid fa-scale-balanced text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Human Rights Based Approach</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Implementing human rights-based approaches (HRBA) to ensure sustainable solutions to hunger and food security challenges through participation and accountability.
              </p>
            </div>
          </div>

          <div className="bg-[#3D2314] rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <i className="fa-solid fa-earth-africa text-[15rem]"></i>
            </div>
            <div className="max-w-4xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Ending World Hunger Requires a Comprehensive Approach</h2>
              <p className="text-xl text-stone-200 mb-10 leading-relaxed">
                A world without hunger will never be achieved alone. We collaborate with communities, foundations, companies, governments, and humanitarian partners to achieve zero hunger.
              </p>
              <Link to="/strategies" className="inline-flex items-center space-x-3 bg-white text-[#3D2314] px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all">
                <span>Discover Our Approach</span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Summary CTA */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden" aria-labelledby="workstreams-heading">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-emerald-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 id="workstreams-heading" className="text-3xl md:text-5xl font-bold mb-6">Our Thematic Workstreams</h2>
            <p className="text-emerald-100 text-lg max-w-3xl mx-auto">Addressing the multi-dimensional nature of food insecurity through five primary workstreams under our 2022–2026 Strategic Plan.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRAMS.map(prog => (
              <div key={prog.id} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all flex flex-col h-full">
                <h4 className="font-bold text-lg mb-2">{prog.focus}</h4>
                <p className="text-sm text-emerald-100 mb-4 flex-grow">{prog.objective}</p>
                <Link to="/programs" aria-label={`Learn more about our work on ${prog.focus}`} className="text-white font-bold text-sm hover:underline mt-auto">Learn More &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-View Photo Gallery Carousel */}
      <section className="py-24 bg-stone-50" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">Visualizing Our Impact</span>
              <h2 id="gallery-heading" className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Field Notes & Highlights</h2>
              <p className="text-slate-600 mt-4">Witness the transformation across Uganda's agrifood systems through the lens of our field staff and partners.</p>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setGalleryIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)}
                className="w-14 h-14 rounded-full border border-emerald-200 flex items-center justify-center text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all shadow-sm"
                aria-label="Previous gallery image"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button 
                onClick={() => setGalleryIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)}
                className="w-14 h-14 rounded-full bg-emerald-700 flex items-center justify-center text-white hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/20"
                aria-label="Next gallery image"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden h-[500px]">
          <div 
            className="flex transition-transform duration-700 ease-out h-full"
            style={{ transform: `translateX(-${galleryIndex * 100}%)` }}
          >
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="min-w-full h-full relative px-4">
                <div className="h-full max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] relative shadow-xl">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12 text-white">
                    <div className="max-w-2xl">
                      <h3 className="text-2xl font-bold mb-2">{img.title}</h3>
                      <p className="text-emerald-100 text-base opacity-90">{img.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
            {GALLERY_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setGalleryIndex(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === galleryIndex ? 'bg-white w-12' : 'bg-white/30 w-4'
                }`}
                aria-label={`Go to gallery image ${i + 1}`}
                aria-pressed={i === galleryIndex}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="donation-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3D2314] rounded-[3rem] p-12 lg:p-20 text-white relative shadow-2xl shadow-stone-950/40 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <i className="fa-solid fa-hand-holding-heart text-[12rem]"></i>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <span className="bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Emergency Action Required</span>
                <h2 id="donation-heading" className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                  Help Us Break the Cycle of Stunting
                </h2>
                <p className="text-xl text-stone-100 mb-10 leading-relaxed font-medium">
                  Stunting isn't just a number—it's a limitation on a child's entire future. Your support enables critical medical care and sustainable food governance.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#3D2314] shadow-md">
                      <i className="fa-solid fa-kit-medical text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Medical Care</h4>
                      <p className="text-xs text-stone-300">Nutrition recovery support</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#3D2314] shadow-md">
                      <i className="fa-solid fa-seedling text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Resilience</h4>
                      <p className="text-xs text-stone-300">Core focus areas support</p>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center space-x-3 bg-white text-[#3D2314] px-10 py-5 rounded-2xl font-black text-lg hover:bg-stone-50 transition-all transform hover:scale-105 shadow-xl shadow-black/40 group"
                  aria-label="Make a donation to Food Rights Alliance Uganda"
                >
                  <span>Donate to Save Lives</span>
                  <i className="fa-solid fa-heart animate-pulse group-hover:text-red-600"></i>
                </Link>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                  <div className="text-6xl font-black mb-4 flex items-baseline">
                    26<span className="text-3xl">%</span>
                  </div>
                  <p className="text-stone-100 leading-relaxed font-bold">
                    of children in Uganda are stunted nationally. This rising epidemic limits growth and cognitive development permanently.
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex justify-between items-center text-sm font-bold border-b border-white/5 pb-2">
                      <span>Karamoja Region</span>
                      <span className="text-xl">43.8%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold border-b border-white/5 pb-2">
                      <span>Kigezi Region</span>
                      <span className="text-xl">41.4%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold border-b border-white/5 pb-2">
                      <span>Toro Region</span>
                      <span className="text-xl">38.7%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold border-b border-white/5 pb-2">
                      <span>National Baseline</span>
                      <span className="text-xl">31.2%</span>
                    </div>
                  </div>
                  <p className="mt-6 text-xs text-stone-200 italic font-medium leading-relaxed">
                    "These children shall never reach their full potential without urgent systemic intervention and medical care."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GIVING OPTIONS Section - Shared from About Page */}
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

export default Home;
