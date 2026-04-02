import React, { useState, useEffect } from 'react';

const getEvents = (onImageClick) => [
  {
    id: 1,
    date: "2026",
    isDarkBadge: true,
    title: "Leadership & Growth",
    description: "Rolling into 2026, we continued our strong physical presence at the SU Job Fair to recruit top talent, while hosting comprehensive Team Lead Training to empower our management.",
    renderExtra: () => (
      <div className="flex gap-4 mt-5">
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2026/d9664b7b-5ee3-490d-ad72-0c0d3087b7dc.jpg")} src="/assets/For Website/2026/d9664b7b-5ee3-490d-ad72-0c0d3087b7dc.jpg" alt="SU Job Fair" className="w-24 h-24 rounded-lg object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2026/658139517_1481195300066431_2591688036358710855_n 1.jpg")} src="/assets/For Website/2026/658139517_1481195300066431_2591688036358710855_n 1.jpg" alt="Team Lead Training" className="w-24 h-24 rounded-lg object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2026/ec6b9fc6-f82f-4618-b9b2-f43a6321538e.jpg")} src="/assets/For Website/2026/ec6b9fc6-f82f-4618-b9b2-f43a6321538e.jpg" alt="Leadership" className="w-24 h-24 rounded-lg object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
      </div>
    )
  },
  {
    id: 2,
    date: "Late 2025",
    isDarkBadge: false,
    title: "Year End Celebrations",
    description: "We securely wrapped up an incredible year with grand Year End Parties across both our Manila and Dumaguete operations, celebrating our collective successes and teams.",
    renderExtra: () => (
      <div className="flex gap-3 mt-5 flex-wrap">
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2025/Lunas Christmas Party 2025 (53).JPG")} src="/assets/For Website/2025/Lunas Christmas Party 2025 (53).JPG" alt="Party" className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2025/Lunas Christmas Party 2025 (65).JPG")} src="/assets/For Website/2025/Lunas Christmas Party 2025 (65).JPG" alt="Party" className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2025/Lunas Christmas Party 2025 (39).JPG")} src="/assets/For Website/2025/Lunas Christmas Party 2025 (39).JPG" alt="Party" className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2025/Lunas Christmas Party 2025 (6).JPG")} src="/assets/For Website/2025/Lunas Christmas Party 2025 (6).JPG" alt="Party" className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
      </div>
    )
  },
  {
    id: 3,
    date: "Mid 2025",
    isDarkBadge: false,
    title: "Community & Engagement",
    description: "From our viral internal TikTok Challenge that boosted team morale, to an outstanding recruitment presence at the 2025 SU Job Fair, community remained at our core.",
    renderExtra: () => (
      <div className="flex gap-3 mt-5">
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2025/Lunas-1954.jpg")} src="/assets/For Website/2025/Lunas-1954.jpg" alt="Community" className="w-20 h-20 rounded-lg object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2025/Lunas-1955.jpg")} src="/assets/For Website/2025/Lunas-1955.jpg" alt="Community" className="w-20 h-20 rounded-lg object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
        <div className="flex items-center gap-3 ml-2 border-l border-slate-100 pl-5">
          <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0 border border-pink-100">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.39.81-4.78 2.62-6.19 1.73-1.35 4.01-1.66 6.07-1.12-.02-1.41-.01-2.82-.01-4.24-1.28-.31-2.61-.17-3.83.27-1.6.58-2.97 1.76-3.72 3.19-.94 1.83-1.02 4.02-.27 5.92.79 1.98 2.55 3.52 4.63 4.11 2.21.61 4.64.39 6.66-.82 1.58-.95 2.71-2.51 3.1-4.3.06-.27.1-.55.1-.82-.03-6.66-.02-13.31-.02-19.96z"/></svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-800 leading-tight">TikTok Challenge</h4>
            <p className="text-xs text-slate-500 mt-0.5">Viral Team Engagement</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    date: "Late 2024",
    isDarkBadge: false,
    title: "Building Strong Foundations",
    description: "We prioritized building deeply connected teams through extensive CDI Team Building activities and our LUNAS Corporate Social Responsibility (CSR) events.",
    renderExtra: () => (
      <div className="flex gap-4 mt-5">
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2024/IMG_7287.jpg")} src="/assets/For Website/2024/IMG_7287.jpg" alt="CDI Team Building" className="w-20 h-20 rounded-lg object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2024/IMG_7466.jpg")} src="/assets/For Website/2024/IMG_7466.jpg" alt="LUNAS CSR" className="w-20 h-20 rounded-lg object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2024/IMG_7274.jpg")} src="/assets/For Website/2024/IMG_7274.jpg" alt="LUNAS CSR" className="w-20 h-20 rounded-lg object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
      </div>
    )
  },
  {
    id: 5,
    date: "Early 2024",
    isDarkBadge: false,
    title: "Empowering Our Leaders",
    description: "We laid the groundwork for robust operational success by hosting our first major 2024 Team Lead Training program and unified our goals during the Year End Party.",
    renderExtra: () => (
      <div className="flex gap-3 mt-5 flex-wrap">
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2024/Year End Party (419).JPG")} src="/assets/For Website/2024/Year End Party (419).JPG" alt="Party" className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2024/Year End Party (76).JPG")} src="/assets/For Website/2024/Year End Party (76).JPG" alt="Party" className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
        <img loading="lazy" decoding="async" onClick={() => onImageClick("/assets/For Website/2024/Year End Party (357).JPG")} src="/assets/For Website/2024/Year End Party (357).JPG" alt="Party" className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-100 cursor-pointer hover:opacity-80 transition-opacity" />
        <div className="w-16 h-16 rounded-xl border-2 border-white bg-brand-navy text-white flex items-center justify-center shadow-sm text-xs font-bold z-10">
          +40
        </div>
      </div>
    )
  }
];

const DateBadge = ({ date, isDark, align }) => {
  return (
    <div className={`flex w-full ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm
        ${isDark 
          ? 'bg-slate-900 text-white' 
          : 'bg-slate-200 text-slate-700'
        }`}
      >
        {date}
      </span>
    </div>
  );
};

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-[24px] p-8 border border-slate-200 shadow-xl shadow-slate-200/50 w-full max-w-[460px] mx-auto hover:-translate-y-1 transition-transform duration-300">
      <h3 className="text-xl font-bold text-slate-800 mb-3">{event.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{event.description}</p>
      {event.renderExtra && event.renderExtra()}
    </div>
  );
};

const Timeline = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const onImageClick = (src) => {
    setSelectedImage(src);
  };

  const events = getEvents(onImageClick);

  return (
    <>
      <div className="relative max-w-[1000px] mx-auto py-16 px-4 md:px-8 w-full z-10">
        {/* Central Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2"></div>
        
        <div className="space-y-12 md:space-y-24 relative">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={event.id} className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                
                {/* Mobile Layout (Visible only on small screens) */}
                <div className="md:hidden flex w-full relative">
                   {/* Circle marker on mobile line */}
                   <div className="absolute left-0 top-6 -translate-x-[5px] w-[11px] h-[11px] rounded-full bg-slate-400 border-[2px] border-slate-50 shadow-sm z-10"></div>
                   
                   <div className="pl-12 w-full space-y-4">
                     <DateBadge date={event.date} isDark={event.isDarkBadge} align="left" />
                     <EventCard event={event} />
                   </div>
                </div>

                {/* Desktop Layout (Hidden on small screens) */}
                <div className={`hidden md:flex items-center w-full relative ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  
                  {/* Left (or Right if reversed) Column */}
                  <div className={`w-1/2 flex items-center ${isEven ? 'pr-16' : 'pl-16'}`}>
                    {isEven ? (
                       <DateBadge date={event.date} isDark={event.isDarkBadge} align="right" />
                    ) : (
                       <EventCard event={event} />
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-slate-400 border-[3px] border-slate-50 shadow-sm z-10"></div>

                  {/* Right (or Left if reversed) Column */}
                  <div className={`w-1/2 flex items-center ${isEven ? 'pl-16' : 'pr-16'}`}>
                    {isEven ? (
                       <EventCard event={event} />
                    ) : (
                       <DateBadge date={event.date} isDark={event.isDarkBadge} align="left" />
                    )}
                  </div>
                  
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-brand-navy/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="fixed top-4 right-4 md:top-8 md:right-8 text-white hover:text-slate-300 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2 z-[110]"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <svg className="w-8 h-8 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <div className="relative w-full h-full max-w-6xl flex items-center justify-center animate-in fade-in zoom-in duration-300">
            <img 
              src={selectedImage} 
              alt="Enlarged event view" 
              className="w-auto h-auto max-w-full max-h-[90vh] md:max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image itself
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Timeline;
