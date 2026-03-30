const TrustedBy = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8 font-mono">
          Trusted By Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Fictional partner SVGs / placeholders representing healthcare networks */}
          <div className="text-xl font-bold font-serif text-brand-navy">Healthcare Partners Solutions</div>
          <div className="text-xl font-bold font-serif text-brand-navy">MedCore Network</div>
          <div className="text-xl font-bold font-serif text-brand-navy">Summit Healthcare</div>
          <div className="text-xl font-bold font-serif text-brand-navy">Global Care Systems</div>
          <div className="text-xl font-bold font-serif text-brand-navy">Apex Medical Review</div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
