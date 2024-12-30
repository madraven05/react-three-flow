import React, { ReactNode } from "react";

interface SidebarButtonProps {
  icon: ReactNode;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon }) => {
  return (
    <div className="text-white text-lg w-full rounded-md p-2 my-2 flex items-center justify-center hover:bg-white/20 hover:cursor-pointer">
      {icon}
    </div>
  );
};

export default SidebarButton;
