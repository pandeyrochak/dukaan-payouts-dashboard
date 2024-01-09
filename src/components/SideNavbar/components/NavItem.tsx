interface NavItemProps {
  navItemIcon: string;
  navItemText: string;
}
const NavItem = ({ navItemIcon, navItemText }: NavItemProps) => {
  return (
    <div className="flex items-center gap-3 px-4 py-2 opacity-80 cursor-pointer hover:bg-[#ffffff1a] rounded-[4px] hover:opacity-100">
      <div className="">
        <img src={navItemIcon} alt="" className="w-5 h-5" />
      </div>
      <div className="text-white text-sm font-medium">{navItemText}</div>
    </div>
  );
};

export default NavItem;
