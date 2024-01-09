import homeIcon from "../../../assets/homeIcon.svg";
import ordersIcon from "../../../assets/orderIcon.svg";
import productsIcon from "../../../assets/productsIcon.svg";
import deliveryIcon from "../../../assets/deliveryIcon.svg";
import marketingIcon from "../../../assets/marketingIcon.svg";
import analyticsIcon from "../../../assets/analyticsIcon.svg";
import paymentsIcon from "../../../assets/paymentsIcon.svg";
import toolsIcon from "../../../assets/toolsIcon.svg";
import discountsIcon from "../../../assets/discountsIcon.svg";
import audienceIcon from "../../../assets/audienceIcon.svg";
import appearanceIcon from "../../../assets/appearanceIcon.svg";
import pluginsIcon from "../../../assets/pluginsIcon.svg";
import NavItem from "./NavItem";

const NavItemsList = () => {
  const navItemsList = [
    {
      navItemIcon: homeIcon,
      navItemText: "Home",
    },
    {
      navItemIcon: ordersIcon,
      navItemText: "Orders",
    },
    {
      navItemIcon: productsIcon,
      navItemText: "Products",
    },
    {
      navItemIcon: deliveryIcon,
      navItemText: "Delivery",
    },
    {
      navItemIcon: marketingIcon,
      navItemText: "Marketing",
    },
    {
      navItemIcon: analyticsIcon,
      navItemText: "Analytics",
    },
    {
      navItemIcon: paymentsIcon,
      navItemText: "Payments",
    },
    {
      navItemIcon: toolsIcon,
      navItemText: "Tools",
    },
    {
      navItemIcon: discountsIcon,
      navItemText: "Discounts",
    },
    {
      navItemIcon: audienceIcon,
      navItemText: "Audience",
    },
    {
      navItemIcon: appearanceIcon,
      navItemText: "Appearance",
    },
    {
      navItemIcon: pluginsIcon,
      navItemText: "Plugins",
    },
  ];
  return (
    <div className="flex flex-col gap-1">
      {/* mapping navitems  */}
      {navItemsList.map((item, index) => (
        <NavItem
          key={index}
          navItemIcon={item.navItemIcon}
          navItemText={item.navItemText}
        />
      ))}
    </div>
  );
};

export default NavItemsList;
