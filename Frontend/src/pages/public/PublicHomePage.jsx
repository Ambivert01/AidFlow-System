import HeroSection from "../../components/public/home/HeroSection";
import ProblemStatementSection from "../../components/public/home/ProblemStatementSection";
import CoreIdeaSection from "../../components/public/home/CoreIdeaSection";
import HowItWorksSection from "../../components/public/home/HowItWorksSection";
import TransparencySection from "../../components/public/home/TransparencySection";
import ImpactSection from "../../components/public/home/ImpactSection";
import AudienceSection from "../../components/public/home/AudienceSection";
import ExploreNextSection from "../../components/public/home/ExploreNextSection";

const PublicHomePage = () => {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <ProblemStatementSection />
      <CoreIdeaSection />
      <HowItWorksSection />
      <TransparencySection />
      <ImpactSection />
      <AudienceSection />
      <ExploreNextSection />
    </main>
  );
};

export default PublicHomePage;
