import { Navigate, useLocation } from "react-router-dom";

const JourneyGuard = ({ children }) => {
  const location = useLocation();

  
// If user did NOT come from Choose Role page,
// we gently redirect them back.

  const cameFromChooseRole =
    location.state && location.state.from === "/choose-role";

  if (!cameFromChooseRole) {
    return <Navigate to="/choose-role" replace />;
  }

  return children;
};

export default JourneyGuard;