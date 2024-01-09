interface NavItemProps {
  navItemIcon: string;
  navItemText: string;
  id: number;
  activeItem: number;
  updateActiveItem: (id: number) => void;
}
const NavItem = ({
  navItemIcon,
  navItemText,
  id,
  activeItem,
  updateActiveItem,
}: NavItemProps) => {
  return (
    <button onClick={() => updateActiveItem(id)}>
      <div
        className={`flex items-center gap-3 px-4 py-2 ${
          activeItem === id ? "opacity-100 bg-[#ffffff1a]" : "opacity-80"
        } hover:bg-[#ffffff1a] rounded-[4px] hover:opacity-100`}
      >
        <div className="">
          <img src={navItemIcon} alt="" className="w-5 h-5" />
        </div>
        <div className="text-white text-sm font-medium">{navItemText}</div>
      </div>
    </button>
  );
};

export default NavItem;
