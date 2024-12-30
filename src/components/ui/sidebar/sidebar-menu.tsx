import React, { ReactNode } from "react";
import SidebarButton from "./sidebar-button";

export type SidebarMenuElement = {
    name: string,
    icon: ReactNode
}

interface SidebarMenuProps {
    elements: SidebarMenuElement[] 
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
    elements
}) => {

  return (
    <div className="bg-slate-700/70 backdrop-blur-md border border-white/30 rounded-lg w-12 z-10">
      <div className="flex p-1 w-full h-full items-center justify-around flex-col gap-3">
        {elements.map((node, id) => (
          <SidebarButton key={id} icon={node.icon} />
        ))}
      </div>
    </div>
  );
};

export default SidebarMenu;
