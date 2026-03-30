import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import CompanyOverview from '../components/CompanyOverview';
import CoreValues from '../components/CoreValues';
import CultureTeam from '../components/CultureTeam';
import Benefits from '../components/Benefits';
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
        <TrustedBy />
        <CompanyOverview />
        <CoreValues />
        <CultureTeam />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
