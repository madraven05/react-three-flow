import React, { ReactNode, useState } from "react";

interface NodeWrapperProps {
  children: ReactNode;
}

const NodeWrapper: React.FC<NodeWrapperProps> = ({ children }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onPointerOver={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
      className="flex flex-col items-center p-6 hover:cursor-grab"
    >
      {children}
      <div className={`${isHover ? `flex` : 'hidden'}`}>
        <button className="absolute hover:cursor-crosshair top-0 w-4 h-4 bg-blue-700/60 hover:outline hover:outline-white rounded-full" />
        <button className="absolute hover:cursor-crosshair left-0 top-1/2 w-4 h-4 bg-blue-700/60 hover:outline hover:outline-white rounded-full" />
        <button className="absolute hover:cursor-crosshair right-0 top-1/2 w-4 h-4 bg-blue-700/60 hover:outline hover:outline-white rounded-full" />
        <button className="absolute hover:cursor-crosshair bottom-0 w-4 h-4 bg-blue-700/60 hover:outline hover:outline-white rounded-full" />
      </div>
    </div>
  );
};

export default NodeWrapper;
