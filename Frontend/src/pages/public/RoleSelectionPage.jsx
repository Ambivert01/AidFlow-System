import RoleSelectionIntro from "../../components/public/role-selection/RoleSelectionIntro";
import RoleOverview from "../../components/public/role-selection/RoleOverview";
import RoleList from "../../components/public/role-selection/RoleList";
import RoleSelectionFooter from "../../components/public/role-selection/RoleSelectionFooter";

const RoleSelectionPage = () => {
  return (
    <main className="w-full overflow-hidden">
      <RoleSelectionIntro />
      <RoleOverview />
      <RoleList />
      <RoleSelectionFooter />
    </main>
  );
};

export default RoleSelectionPage;