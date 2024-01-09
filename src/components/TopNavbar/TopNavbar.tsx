import supportIcon from "../../assets/questionIcon.svg";
import searchIcon from "../../assets/searchIcon.svg";
import announcementIcon from "../../assets/announcementIcon.svg";
import dropdownIcon from "../../assets/headerDropdownIcon.svg";
import { Menu } from "lucide-react";

interface TopNavbarProps {
  toggleSidebar: () => void;
}
const TopNavbar = ({ toggleSidebar }: TopNavbarProps) => {
  return (
    <div className="w-full px-8 py-3 flex justify-between items-center max-lg:gap-2 gap-4 border-b-[#D9D9D9] border-b border-solid bg-white sticky top-0 z-10">
      {/* Left group */}
      <div className="flex justify-between items-center gap-4">
        <button className="max-lg:block hidden" onClick={() => toggleSidebar()}>
          <Menu className="" />
        </button>
        <div className="text-[#1A181E] text-[15px]">Payments</div>
        <div className="text-[#4D4D4D] text-xs flex gap-[6px]">
          <img src={supportIcon} alt="" />
          <span className="max-lg:hidden">How it works</span>
        </div>
      </div>
      {/* center group */}
      <div className="flex items-center gap-2 px-4 py-[9px] w-full max-lg:max-w-[268px] max-w-[368px] bg-[#F2F2F2] rounded-md">
        <img src={searchIcon} alt="" />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="text-[#808080] text-[15px] bg-transparent outline-none focus:outline-none focus:border-none focus:shadow-none w-full grow"
        />
      </div>
      {/* right group */}
      <div className="flex items-center gap-3">
        <button>
          <img src={announcementIcon} alt="" />
        </button>
        <button>
          <img src={dropdownIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
