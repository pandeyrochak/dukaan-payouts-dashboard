import { useState } from "react";
import analyticsIcon from "../../../assets/analyticsIcon.svg";
import appearanceIcon from "../../../assets/appearanceIcon.svg";
import audienceIcon from "../../../assets/audienceIcon.svg";
import deliveryIcon from "../../../assets/deliveryIcon.svg";
import discountsIcon from "../../../assets/discountsIcon.svg";
import homeIcon from "../../../assets/homeIcon.svg";
import marketingIcon from "../../../assets/marketingIcon.svg";
import ordersIcon from "../../../assets/orderIcon.svg";
import paymentsIcon from "../../../assets/paymentsIcon.svg";
import pluginsIcon from "../../../assets/pluginsIcon.svg";
import productsIcon from "../../../assets/productsIcon.svg";
import toolsIcon from "../../../assets/toolsIcon.svg";
import NavItem from "./NavItem";

const NavItemsList = () => {
  const [activeItem, setActiveItem] = useState(6);
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
  const handleActiveItem = (itemKey: number) => {
    setActiveItem(itemKey);
  };
  return (
    <div className="flex flex-col gap-1">
      {/* mapping navitems  */}
      {navItemsList.map((item, index) => (
        <NavItem
          key={index}
          id={index}
          activeItem={activeItem}
          updateActiveItem={handleActiveItem}
          navItemIcon={item.navItemIcon}
          navItemText={item.navItemText}
        />
      ))}
    </div>
  );
};

export default NavItemsList;
