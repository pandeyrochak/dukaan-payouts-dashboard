import AvailableCredits from "./components/AvailableCredits";
import NavItemsList from "./components/NavItemsList";
import NavbarLogo from "./components/NavbarLogo";
interface SideNavbarProps {
  isOpen: boolean;
}
const SideNavbar = ({ isOpen }: SideNavbarProps) => {
  return (
    <div
      className={`bg-secondaryNavbar px-[10px] py-4 min-w-[224px] flex flex-col gap-6 lg:sticky top-0 h-screen fixed z-10 transition-transform ${
        isOpen ? "" : "transform -translate-x-full"
      }`}
    >
      <NavbarLogo />
      <NavItemsList />
      <AvailableCredits creditBalance="222.10" />
    </div>
  );
};

export default SideNavbar;
