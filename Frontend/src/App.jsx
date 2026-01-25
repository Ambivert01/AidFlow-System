import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";

// Public pages
import PublicHomePage from "./pages/public/PublicHomePage";
import HowAidFlowWorksPage from "./pages/public/HowAidFlowWorksPage";
import RoleSelectionPage from "./pages/public/RoleSelectionPage";

// Role journeys
import DonorJourneyPage from "./pages/public/journey/DonorJourneyPage";
import NGOJourneyPage from "./pages/public/journey/NGOJourneyPage";
import MerchantJourneyPage from "./pages/public/journey/MerchantJourneyPage";
import BeneficiaryJourneyPage from "./pages/public/journey/BeneficiaryJourneyPage";
import AuthorityJourneyPage from "./pages/public/journey/AuthorityJourneyPage";
import JourneyGuard from "./guards/JourneyGuard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<PublicHomePage />} />
          <Route path="/how-it-works" element={<HowAidFlowWorksPage />} />
          <Route path="/choose-role" element={<RoleSelectionPage />} />

          {/* Role Journey Pages with Guard */}
          <Route
            path="/journey/donor"
            element={
              <JourneyGuard>
                <DonorJourneyPage />
              </JourneyGuard>
            }
          />
          <Route
            path="/journey/ngo"
            element={
              <JourneyGuard>
                <NGOJourneyPage />
              </JourneyGuard>
            }
          />
          <Route
            path="/journey/merchant"
            element={
              <JourneyGuard>
                <MerchantJourneyPage />
              </JourneyGuard>
            }
          />
          <Route
            path="/journey/beneficiary"
            element={
              <JourneyGuard>
                <BeneficiaryJourneyPage />
              </JourneyGuard>
            }
          />
          <Route
            path="/journey/authority"
            element={
              <JourneyGuard>
                <AuthorityJourneyPage />
              </JourneyGuard>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
