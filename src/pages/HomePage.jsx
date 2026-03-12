import Header from '../components/Header';
import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import Features from '../components/Features';
import Protocol from '../components/Protocol';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import NoiseOverlay from '../components/NoiseOverlay';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 selection:bg-brand-red selection:text-white">
      <NoiseOverlay />
      <Header />
      <main className="">
        <Hero />
        <Manifesto />
        <Features />
        <Protocol />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
