import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";
import { FaFileImport } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import CanvasMenuButton from "./canvas-menu-button";
import { FaFileExport, FaShareAlt } from "react-icons/fa";

const CanvasMenu: React.FC = () => {
  const menuElements = [
    {
      label: "Import File",
      icon: <FaFileImport />,
    },
    {
      label: "Export File",
      icon: <FaFileExport />,
    },
    {
      label: "Share",
      icon: <FaShareAlt />,
    },
  ];

  return (
    <Menu>
      <MenuButton
        className={`hover:cursor-pointer hover:bg-white/10 text-xl text-white p-3 rounded-md border border-white/10`}
      >
        <MdMenu />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom start"
        className="origin-top-right flex flex-col items-start w-52 z-30 rounded-sm border border-white/5 bg-black/50 backdrop-blur-md p-4 gap-2 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {menuElements.map((el, id) => (
          <MenuItem key={id}>
            <CanvasMenuButton icon={el.icon}>{el.label}</CanvasMenuButton>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default CanvasMenu;
