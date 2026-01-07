
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import Workflow from '../components/Workflow';
import SocialProof from '../components/SocialProof';
import Knowledge from '../components/Knowledge';
import NewsSection from '../components/NewsSection';
import Pricing from '../components/Pricing';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <main className="antialiased bg-bg-primary selection:bg-accent-orange selection:text-white">
            <Navbar />
            <Hero />
            <FeaturesGrid />
            <Workflow />
            <SocialProof />
            <Knowledge />
            <NewsSection />
            <Pricing />
            <FinalCTA />
            <Footer />
        </main>
    );
};

export default LandingPage;
