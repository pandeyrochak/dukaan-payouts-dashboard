import navbarLogo from "../../../assets/navbar-logo.png";
import downArrow from "../../../assets/downArrow.svg";

const NavbarLogo = () => {
  const NavbarLogoData = {
    storeName: "Nishyan",
    storeLogo: navbarLogo,
  };
  return (
    <div className="w-full flex justify-between items-center px-2">
      {/* logo image */}
      <div className="bg-white rounded-[4px] max-w-[40px]">
        <img src={NavbarLogoData.storeLogo} alt="Navbar Logo"  className="w-full aspect-square"/>
      </div>

      {/* brand name and visit store link */}
      <div className="flex flex-col">
        <h5 className=" text-white text-[15px] font-medium">
          {NavbarLogoData.storeName}
        </h5>
        <a
          href="#"
          className="text-white text-[13px] leading-4 underline opacity-80"
        >
          Visit store
        </a>
      </div>
      {/* down arrow */}
      <img src={downArrow} alt="Down Arrow" />
    </div>
  );
};

export default NavbarLogo;
