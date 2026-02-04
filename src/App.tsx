import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/landing/HeroSection';
import ProblemSection from './components/landing/ProblemSection';
import SolutionSection from './components/landing/SolutionSection';
import InfiniteLoop from './components/InfiniteLoop';

// Lazy load below-the-fold components
const BenefitsSection = lazy(() => import('./components/landing/BenefitsSection'));
const SocialProofSection = lazy(() => import('./components/landing/SocialProofSection'));
const PricingSection = lazy(() => import('./components/landing/PricingSection'));
const FAQSection = lazy(() => import('./components/landing/FAQSection'));
const FinalCTASection = lazy(() => import('./components/landing/FinalCTASection'));

// Simple loading fallback
const SectionLoader = () => <div className="py-24 bg-black min-h-[400px] flex items-center justify-center text-neutral-500">Loading...</div>;

function App() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 relative">
      <InfiniteLoop />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection onscrollToPricing={scrollToPricing} />
          <ProblemSection />
          <SolutionSection />

          <Suspense fallback={<SectionLoader />}>
            <BenefitsSection />
            <SocialProofSection />
            <PricingSection />
            <FAQSection />
            <FinalCTASection />
          </Suspense>
        </main>

        <footer className="py-8 bg-black border-t border-white/10 text-center text-neutral-500 text-sm">
          <p>© 2024 LongBest AI. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
