import React, { useState } from 'react';
import { 
  Database, Lock, FileSpreadsheet, CheckCircle2, Users, 
  Receipt, TrendingUp, FileDown, FileText, BarChart3, Zap, ChevronDown,
  Shirt, Focus
} from 'lucide-react';

const App = () => {
  const [activeOption, setActiveOption] = useState(1);

  // DYNAMIC ASSET HELPER: This prevents "Failed to resolve import" errors.
  // It looks for files inside your src/assets/ folder at runtime.
  const getImg = (name: string) => new URL(`./assets/${name}`, import.meta.url).href;

  const option1Slides = [
    { 
      step: "01", 
      title: "Secure Entry", 
      desc: "Multi-layered authentication system ensuring only authorized personnel access sensitive settlement records and financial data.", 
      img: getImg('login.jpeg'), 
      icon: <Lock />, 
      color: "bg-slate-900" 
    },
    { 
      step: "02", 
      title: "Live Dashboard", 
      desc: "Real-time executive overview that transforms raw database records into clear, actionable business intelligence.", 
      img: getImg('dashboard.jpeg'), 
      icon: <BarChart3 />, 
      color: "bg-orange-600" 
    },
    { 
      step: "03", 
      title: "Direct Server Sync", 
      desc: "Automated API synchronization that pulls data directly from the client server, eliminating the need for manual file handling.", 
      img: getImg('selecting.jpeg'), 
      icon: <Zap />, 
      color: "bg-blue-600" 
    },
    { 
      step: "04", 
      title: "Data Validation", 
      desc: "Instant automated checks that ensure 100% data integrity, providing a clear success confirmation once processed.", 
      img: getImg('sucess.jpeg'), 
      icon: <CheckCircle2 />, 
      color: "bg-emerald-600" 
    },
    { 
      step: "05", 
      title: "Report Selection", 
      desc: "Dynamic filtering interface that allows users to drill down into specific floors, cashiers, and time periods.", 
      img: getImg('selecting.jpeg'), 
      icon: <Database />, 
      color: "bg-cyan-600" 
    },
    { 
      step: "06", 
      title: "Overall Report", 
      desc: "Comprehensive summary view providing a bird's-eye perspective of total revenue and transactions across the entire floor.", 
      img: getImg('performance.jpeg'), 
      icon: <Users />, 
      color: "bg-slate-700" 
    },
    { 
      step: "07", 
      title: "Cashier Excel Export", 
      desc: "Generate detailed, cashier-specific Excel workbooks designed for internal auditing and accounting purposes.", 
      img: getImg('cashier_report_excel.jpeg'), 
      icon: <FileSpreadsheet />, 
      color: "bg-green-600" 
    },
    { 
      step: "08", 
      title: "Cashier PDF Export", 
      desc: "One-click PDF generation for individual cashier performance, formatted for professional management reviews.", 
      img: getImg('cashier_report_pdf.jpeg'), 
      icon: <FileText />, 
      color: "bg-red-500" 
    },
    { 
      step: "09", 
      title: "Total Excel Report", 
      desc: "Consolidated Excel reporting that captures the entire settlement history for long-term data archiving.", 
      img: getImg('total-excel.jpeg'), 
      icon: <FileDown />, 
      color: "bg-green-700" 
    },
    { 
      step: "10", 
      title: "Total PDF Report", 
      desc: "Comprehensive PDF document featuring high-level charts and detailed summary tables of all system data.", 
      img: getImg('single-report.jpeg'), 
      icon: <FileText />, 
      color: "bg-red-600" 
    },
    { 
      step: "11", 
      title: "Performance Analytics", 
      desc: "Live tracking of key metrics like gross revenue and total orders, updated instantly as data flows in.", 
      img: getImg('singledash.jpeg'), 
      icon: <Zap />, 
      color: "bg-indigo-600" 
    },
    { 
      step: "12", 
      title: "Visual Charts", 
      desc: "Advanced data visualization showing bill distribution and mobile contact status through intuitive graphical charts.", 
      img: getImg('graph.jpeg'), 
      icon: <TrendingUp />, 
      color: "bg-orange-500" 
    }
  ];

  const option2Slides = [
    { 
      step: "01", 
      title: "Secure Entry", 
      desc: "Multi-layered authentication system ensuring only authorized personnel access sensitive settlement records and financial data.", 
      img: getImg('login.jpeg'), 
      icon: <Lock />, 
      color: "bg-slate-900" 
    },
    { 
      step: "02", 
      title: "Live Dashboard", 
      desc: "Real-time executive overview that transforms raw database records into clear, actionable business intelligence.", 
      img: getImg('dashboard.jpeg'), 
      icon: <BarChart3 />, 
      color: "bg-orange-600" 
    },
    { 
      step: "03", 
      title: "Bulk Excel Upload", 
      desc: "Powerful ingestion engine that handles massive Excel datasets, automatically mapping them to the system's database structure.", 
      img: getImg('upload.jpeg'), 
      icon: <FileSpreadsheet />, 
      color: "bg-blue-600" 
    },
    { 
      step: "04", 
      title: "Data Validation", 
      desc: "Instant automated checks that ensure 100% data integrity, providing a clear success confirmation once processed.", 
      img: getImg('sucess.jpeg'), 
      icon: <CheckCircle2 />, 
      color: "bg-emerald-600" 
    },
    { 
      step: "05", 
      title: "Settlement Audit", 
      desc: "Transparent review process allowing management to verify every imported record for accuracy before final saving.", 
      img: getImg('reveiw-details.jpeg'), 
      icon: <Receipt />, 
      color: "bg-purple-600" 
    },
    { 
      step: "06", 
      title: "Report Selection", 
      desc: "Dynamic filtering interface that allows users to drill down into specific floors, cashiers, and time periods.", 
      img: getImg('selecting.jpeg'), 
      icon: <Database />, 
      color: "bg-cyan-600" 
    },
    { 
      step: "07", 
      title: "Overall Report", 
      desc: "Comprehensive summary view providing a bird's-eye perspective of total revenue and transactions across the entire floor.", 
      img: getImg('performance.jpeg'), 
      icon: <Users />, 
      color: "bg-slate-700" 
    },
    { 
      step: "08", 
      title: "Cashier Excel Export", 
      desc: "Generate detailed, cashier-specific Excel workbooks designed for internal auditing and accounting purposes.", 
      img: getImg('cashier_report_excel.jpeg'), 
      icon: <FileSpreadsheet />, 
      color: "bg-green-600" 
    },
    { 
      step: "09", 
      title: "Cashier PDF Export", 
      desc: "One-click PDF generation for individual cashier performance, formatted for professional management reviews.", 
      img: getImg('cashier_report_pdf.jpeg'), 
      icon: <FileText />, 
      color: "bg-red-500" 
    },
    { 
      step: "10", 
      title: "Total Excel Report", 
      desc: "Consolidated Excel reporting that captures the entire settlement history for long-term data archiving.", 
      img: getImg('total-excel.jpeg'), 
      icon: <FileDown />, 
      color: "bg-green-700" 
    },
    { 
      step: "11", 
      title: "Total PDF Report", 
      desc: "Comprehensive PDF document featuring high-level charts and detailed summary tables of all system data.", 
      img: getImg('single-report.jpeg'), 
      icon: <FileText />, 
      color: "bg-red-600" 
    },
    { 
      step: "12", 
      title: "Performance Analytics", 
      desc: "Live tracking of key metrics like gross revenue and total orders, updated instantly as data flows in.", 
      img: getImg('singledash.jpeg'), 
      icon: <Zap />, 
      color: "bg-indigo-600" 
    },
    { 
      step: "13", 
      title: "Visual Charts", 
      desc: "Advanced data visualization showing bill distribution and mobile contact status through intuitive graphical charts.", 
      img: getImg('graph.jpeg'), 
      icon: <TrendingUp />, 
      color: "bg-orange-500" 
    }
  ];

  const slides = activeOption === 1 ? option1Slides : option2Slides;

  return (
    <div className="bg-[#fdfcfb] min-h-screen text-slate-800 font-sans selection:bg-orange-500 selection:text-white relative overflow-hidden">
      
      {/* GLOBAL STYLES FOR TEXTILE THEME */}
      <style>{`
        @keyframes floatSilk {
          0% { transform: translate(0, 0) rotate(0deg) skew(0deg); opacity: 0.3; }
          33% { transform: translate(100px, -50px) rotate(5deg) skew(5deg); opacity: 0.6; }
          66% { transform: translate(-50px, -100px) rotate(-5deg) skew(-5deg); opacity: 0.4; }
          100% { transform: translate(0, 0) rotate(0deg) skew(0deg); opacity: 0.3; }
        }
        @keyframes driftThread {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-100vh) translateX(50px) rotate(360deg); opacity: 0; }
        }
        @keyframes garmentFlow {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.05; }
          25% { transform: translate(200px, 100px) rotate(15deg); opacity: 0.15; }
          50% { transform: translate(400px, -100px) rotate(30deg); opacity: 0.1; }
          75% { transform: translate(200px, -200px) rotate(15deg); opacity: 0.15; }
          100% { transform: translate(0, 0) rotate(0deg); opacity: 0.05; }
        }
        .silk-fabric {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.1), transparent);
          border-radius: 100% 0% 100% 0% / 50% 50% 50% 50%;
          filter: blur(30px);
          animation: floatSilk var(--duration) infinite ease-in-out;
        }
        .thread-particle {
          position: absolute;
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, rgba(249, 115, 22, 0.3), transparent);
          animation: driftThread var(--duration) infinite linear;
        }
        .thread-line {
          position: absolute;
          background: rgba(0, 0, 0, 0.02);
          width: 1px;
          height: 100%;
        }
      `}</style>

      {/* TEXTILE BACKGROUND VISUAL EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* WARM TEXTILE GRADIENT BASE */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdfcfb] via-[#f7f3f0] to-[#e2e8f0]"></div>
        
        {/* TEXTURE OVERLAY (CLOTH FABRIC LOOK) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] opacity-[0.4]"></div>

        {/* THREAD GRID (SIMULATING LOOM) */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="thread-line"
            style={{ left: `${i * 5}%` }}
          />
        ))}

        {/* MOVING SILK FABRIC STRIPS */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={`silk-${i}`}
            className="silk-fabric"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${200 + Math.random() * 400}px`,
              height: `${100 + Math.random() * 150}px`,
              '--duration': `${20 + Math.random() * 25}s`,
              animationDelay: `${Math.random() * -20}s`
            } as any}
          />
        ))}

        {/* DRIFTING THREAD PARTICLES */}
        {[...Array(25)].map((_, i) => (
          <div 
            key={`thread-${i}`}
            className="thread-particle"
            style={{
              bottom: `-10%`,
              left: `${Math.random() * 100}%`,
              '--duration': `${10 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * -15}s`
            } as any}
          />
        ))}

        {/* MOVING GARMENT PARTICLES */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={`garment-${i}`}
            className="absolute pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `garmentFlow ${25 + Math.random() * 20}s infinite ease-in-out`,
              animationDelay: `${Math.random() * -30}s`,
              color: i % 2 === 0 ? '#f97316' : '#db2777'
            }}
          >
            {i % 2 === 0 ? <Shirt size={120 + Math.random() * 100} /> : <Focus size={100 + Math.random() * 80} />}
          </div>
        ))}

        {/* WARM ACCENT BLOBS */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-100/40 blur-[150px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-pink-50/40 blur-[130px]"></div>
      </div>

      <div className="relative z-10">
        {/* HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-orange-100 py-5 px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Database className="text-orange-600" size={30} />
          <span className="text-2xl font-black tracking-tighter uppercase italic text-slate-800">PRESENTA<span className="text-orange-600">TION</span></span>
        </div>
        <div className="hidden md:flex items-center gap-6">
           <a 
             href={getImg('Proposal Report Automation System.pdf')} 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-2 text-sm font-black text-white bg-orange-600 px-8 py-3 rounded-full hover:bg-orange-700 transition-all uppercase tracking-widest shadow-xl shadow-orange-100 hover:scale-105"
           >
             <FileText size={18} /> View Proposal
           </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <div className="mb-12 transform hover:scale-105 transition-transform duration-700">
          <img 
            src={getImg('Theni_logo-modified.jpg')} 
            alt="Theni Logo" 
            className="h-48 md:h-64 object-contain"
            onError={(e) => { e.currentTarget.src = "https://placehold.co/600x200?text=Theni+Logo+Missing"; }}
          />
        </div>
        <div className="max-w-4xl mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-slate-900">
            Enterprise <span className="text-orange-500">CRM Presentation</span>
          </h2>
          <p className="text-2xl text-slate-700 font-medium leading-relaxed">
            We offer two distinct operational pathways for our CRM product, designed to provide maximum flexibility for modern businesses. Whether you prefer <span className="text-orange-500 font-bold">Direct Server Sync</span> for real-time automation or <span className="text-slate-900 font-bold">Manual Excel Flow</span> for offline control, our system ensures 100% data integrity and actionable intelligence.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-8 mb-16">
          <div className="flex gap-6">
            <button 
              onClick={() => setActiveOption(1)}
              className={`px-12 py-5 text-xl font-bold rounded-full transition-all duration-300 uppercase tracking-widest ${
                activeOption === 1 
                ? "bg-orange-600 text-white shadow-xl shadow-orange-200 scale-105" 
                : "bg-slate-100 text-slate-400 hover:bg-slate-200"
              }`}
            >
              Option 1
            </button>
            <button 
              onClick={() => setActiveOption(2)}
              className={`px-12 py-5 text-xl font-bold rounded-full transition-all duration-300 uppercase tracking-widest ${
                activeOption === 2 
                ? "bg-slate-900 text-white shadow-xl shadow-slate-200 scale-105" 
                : "bg-slate-100 text-slate-400 hover:bg-slate-200"
              }`}
            >
              Option 2
            </button>
          </div>

          <a 
             href={getImg('Proposal Report Automation System.pdf')} 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-3 text-lg font-black text-white bg-slate-800 px-12 py-5 rounded-full hover:bg-slate-900 transition-all uppercase tracking-widest shadow-2xl hover:scale-105"
           >
             <FileText size={24} /> View Full Proposal
           </a>
        </div>
        
        {/* VIDEO PLAYER */}
        <div className="w-full max-w-[1400px] rounded-[4rem] overflow-hidden shadow-[0_80px_100px_-20px_rgba(0,0,0,0.2)] border-[15px] border-white bg-black aspect-video mb-10 transform hover:scale-[1.01] transition-transform duration-700">
          <video controls autoPlay muted loop className="w-full h-full object-contain" src={getImg('video.mp4')} />
        </div>
        <ChevronDown size={80} className="text-slate-200 animate-bounce" />
      </header>

      {/* DYNAMIC FLOW */}
      <main className="space-y-[20vh] pb-32 mt-40">
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            {((activeOption === 1 && index === 9) || (activeOption === 2 && index === 10)) && (
              <div className="max-w-[1700px] mx-auto px-10 mb-20 text-center">
                <h2 className="text-5xl font-black tracking-tighter text-slate-900 leading-none uppercase italic border-b-[8px] border-orange-600 inline-block pb-2">
                  Individual <span className="text-orange-600">Filter</span>
                </h2>
              </div>
            )}
            <section className="max-w-[1700px] mx-auto px-10">
            <div className={`flex flex-col gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              
              {/* SIDE TEXT */}
              <div className="w-full lg:w-1/3 space-y-10">
                <span className="text-[10rem] font-black text-slate-200 block leading-none select-none tracking-tighter">{slide.step}</span>
                <div className="flex items-center gap-6">
                   <div className={`${slide.color} p-6 rounded-[2.5rem] text-white shadow-2xl transform -rotate-3`}>
                      {React.cloneElement(slide.icon as React.ReactElement<any>, { size: 45 })}
                   </div>
                   <h2 className="text-6xl font-black tracking-tighter leading-tight text-slate-800">{slide.title}</h2>
                </div>
                <p className="text-3xl text-slate-500 leading-relaxed font-light pl-6 border-l-[12px] border-orange-500 italic">
                  {slide.desc}
                </p>
              </div>

              {/* MASSIVE IMAGE CONTAINER */}
              <div className="w-full lg:w-2/3 group relative">
                <div className={`absolute -inset-10 ${slide.color} rounded-[5rem] blur-[120px] opacity-10 group-hover:opacity-30 transition-opacity duration-1000`}></div>
                <div className="relative rounded-[4rem] overflow-hidden border-[15px] border-white shadow-2xl transition-all duration-700 group-hover:scale-[1.03]">
                  <div className="h-[550px] bg-slate-50 flex items-center justify-center">
                    <img 
                      src={slide.img} 
                      alt={slide.title} 
                      className="w-full h-full object-contain" 
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800?text=Check+Asset+Path"; }}
                    />
                  </div>
                </div>
              </div>

            </div>
          </section>
        </React.Fragment>
      ))}
    </main>

      {/* FINAL TECH FOOTER */}
      <section className="bg-slate-900 text-white py-32 rounded-t-[10vw]">
        <div className="max-w-6xl mx-auto px-10 text-center space-y-12">
          <Zap size={80} className="text-orange-500 mx-auto" />
          <h2 className="text-6xl font-black italic tracking-tighter">PROJECT CORE</h2>
          <p className="text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            A specialized reporting architecture designed to bridge the gap between raw PostgreSQL data and actionable business intelligence. 
            The system automates the entire employee settlement lifecycle, from secure authentication and bulk data ingestion to dynamic visual analytics and multi-format exports.
          </p>
          
          <div className="grid md:grid-cols-2 gap-10 text-left pt-10">
             <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-indigo-500 font-bold mb-6 uppercase text-xs tracking-widest">Option 1: Direct Server Sync</p>
                <div className="space-y-8">
                  <div>
                    <h5 className="text-emerald-500 font-bold text-sm mb-4 uppercase text-center border-b border-emerald-500/20 pb-2">Key Advantages</h5>
                    <ul className="space-y-4 text-xl mt-6">
                      <li className="flex items-start gap-4">
                        <div className="mt-2 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        <p><span className="text-white font-bold">Automated Bridge:</span> Zero manual effort needed to fetch data.</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-2 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        <p><span className="text-white font-bold">Real-Time Precision:</span> Always reflects current server state.</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-2 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        <p><span className="text-white font-bold">High Efficiency:</span> Faster processing with zero human intervention.</p>
                      </li>
                    </ul>
                  </div>
                </div>
             </div>

             <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-emerald-500 font-bold mb-6 uppercase text-xs tracking-widest">Option 2: Manual Excel Flow</p>
                <div className="space-y-8">
                  <div>
                    <h5 className="text-emerald-500 font-bold text-sm mb-4 uppercase text-center border-b border-emerald-500/20 pb-2">Key Advantages</h5>
                    <ul className="space-y-4 text-xl mt-6">
                      <li className="flex items-start gap-4">
                        <div className="mt-2 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        <p><span className="text-white font-bold">Full Control:</span> Manual verification of data before it hits the system.</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-2 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        <p><span className="text-white font-bold">Offline Sync:</span> Process data without direct client server access.</p>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-2 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        <p><span className="text-white font-bold">Explicit Audit:</span> Provides a layer for managers to audit uploads.</p>
                      </li>
                    </ul>
                  </div>
                </div>
             </div>
          </div>

          <div className="mt-20 p-12 bg-orange-600/10 rounded-[3rem] border border-orange-600/20 max-w-4xl mx-auto">
             <h3 className="text-4xl font-black mb-6 italic uppercase tracking-tighter">Which is Best?</h3>
             <p className="text-2xl text-slate-300 leading-relaxed">
               While **Option 2** offers more manual control, <span className="text-orange-500 font-bold italic underline">Option 1 (Direct Server Sync) is the superior choice</span> for modern enterprises. It provides a seamless, error-free automated bridge that ensures data is always up-to-date with the latest server records, drastically reducing operational overhead and improving reporting speed.
             </p>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-slate-900 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-left space-y-2">
            <h4 className="text-2xl text-white font-black uppercase tracking-tighter mb-4">
              Prepared By <span className="text-slate-400 font-medium ml-2 normal-case tracking-normal">Yellowbay Technologies Pvt Ltd</span>
            </h4>
            <div className="text-slate-500 text-lg space-y-1 font-medium">
              <p>18C/6, New Ramanathapuram Road</p>
              <p>Opp. Zone 3 Corporation Building</p>
              <p>Madurai, Tamil Nadu 625009</p>
            </div>
          </div>
          <div className="text-slate-800 font-black tracking-[3em] text-[10px] uppercase hidden lg:block">
            Presentation Ready
          </div>
        </div>
      </footer>
      </div>
    </div>
  );    
};

export default App;