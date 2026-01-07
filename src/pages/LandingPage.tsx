
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import Workflow from '../components/Workflow';
import SocialProof from '../components/SocialProof';
import Knowledge from '../components/Knowledge';
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
            <Pricing />
            <FinalCTA />
            <Footer />
        </main>
    );
};

export default LandingPage;
