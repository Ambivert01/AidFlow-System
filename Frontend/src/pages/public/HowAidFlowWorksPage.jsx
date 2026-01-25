import GovernanceSection from "../../components/public/how-it-works/GovernanceSection";
import DecisionMakingSection from "../../components/public/how-it-works/DecisionMakingSection";
import ExecutionMonitoringSection from "../../components/public/how-it-works/ExecutionMonitoringSection";
import AccountabilitySection from "../../components/public/how-it-works/AccountabilitySection";

const HowAidFlowWorksPage = () => {
  return (
    <main className="w-full overflow-hidden">
      <GovernanceSection />
      <DecisionMakingSection />
      <ExecutionMonitoringSection />
      <AccountabilitySection />
    </main>
  );
};

export default HowAidFlowWorksPage;