import React, { useState } from "react";

import {
  LibraryIcon,
  SecurityIcon,
  SchedulesIcon,
  ActivityIcon,
  PayoutsIcon,
  SettingsIcon,
  DashboardIcon,
} from "../constants/styleConstant";

const SidebarItem = ({ icon, text, active, onClick }) => {
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-400"
        }
    `}
      onClick={onClick}
    >
      {icon}
      <span className="w-52 ml-3">{text}</span>
      {active && (
        <div className="absolute right-0 top-0 h-full w-1 bg-indigo-600 rounded-tr-md rounded-br-md"></div>
      )}
    </li>
  );
};

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navItems = [
    { icon: <DashboardIcon />, text: "Dashboard" },
    { icon: <ActivityIcon />, text: "Activity" },
    { icon: <LibraryIcon />, text: "Library" },
    { icon: <SecurityIcon />, text: "Security" },
    { icon: <SchedulesIcon />, text: "Schedules" },
    { icon: <PayoutsIcon />, text: "Payouts" },
    { icon: <SettingsIcon />, text: "Settings" },
  ];

  return (
    <aside className="h-screen w-64 flex flex-col bg-white fixed  shadow-sm">
      <div className="p-4 pb-2 flex justify-between items-center">
        <span className="text-2xl font-bold text-indigo-800">Venus</span>
      </div>

      <ul className="flex-1 px-3">
        {navItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            active={activeItem === item.text}
            onClick={() => setActiveItem(item.text)}
          />
        ))}
      </ul>

      <div className="p-4">
        <div className="p-4 rounded-lg bg-indigo-600 text-white text-center">
          <p className="font-semibold text-sm">Upgrade to PRO</p>
          <p className="text-xs text-indigo-200 mt-1">
            to get access to all features!
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
