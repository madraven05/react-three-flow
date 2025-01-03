import React, { ReactNode } from "react";

const CanvasMenuButton: React.FC<{ children: ReactNode; icon?: ReactNode }> = ({
  children,
  icon,
}) => {
  return (
    <button className="hover:bg-black/10 text-black w-full flex items-center gap-5 rounded-sm justify-start p-2">
      {icon}
      {children}
    </button>
  );
};

export default CanvasMenuButton;
