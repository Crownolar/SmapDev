import CollaborationCTA from "../components/home/CollaborationCTA";
import Hero from "../components/home/Hero";
import ImpactSection from "../components/home/ImpactSection";
import ResearchHighlights from "../components/home/ResearchHighlights";
import WelcomeSection from "../components/home/WelcomeSection";

const Home = () => {
  return (
    <>
    <Hero />
    <WelcomeSection />
    <ResearchHighlights />
    <ImpactSection />
    <CollaborationCTA />
    </>
  );
};

export default Home;
