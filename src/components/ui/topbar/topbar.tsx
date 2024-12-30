import React from "react";
import CanvasMenu from "./canvas-menu";
import CanvasTitle from "./canvas-title";

const Topbar = () => {
  return (
    <div className="relative mb-2 flex gap-5 z-50 justify-start items-center">
      <CanvasMenu />
      <CanvasTitle />
    </div>
  );
};

export default Topbar;
