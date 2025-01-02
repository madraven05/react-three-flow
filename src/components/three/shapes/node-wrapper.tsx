import React, { ReactNode, useRef, useState } from "react";

interface NodeWrapperProps {
  children: ReactNode;
  onGrab?: () => void;
  onRelease?: () => void;
}

const NodeWrapper: React.FC<NodeWrapperProps> = ({
  children,
  onGrab,
  onRelease,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isGrabbed, setIsGrabbed] = useState(false);

  const clickCountRef = useRef(0);
  const clickTimeoutRef = useRef<number | null>(null);
  const grabTimeoutRef = useRef<number | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    clickCountRef.current += 1;

    if (clickCountRef.current == 1) {
      console.log(clickCountRef.current);
      clickTimeoutRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 300);
    } else if (clickCountRef.current == 2) {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = null;
      }

      window.addEventListener("pointerup", handlePointerUp);

      grabTimeoutRef.current = setTimeout(() => {
        setIsGrabbed(true);
        document.body.style.cursor = "grabbing";
        if (onGrab) {
          onGrab();
        }
      }, 300);
    }
  };

  const handlePointerUp = () => {
    if (grabTimeoutRef.current) {
      clearTimeout(grabTimeoutRef.current);
      grabTimeoutRef.current = null;
    }

    if (isGrabbed) {
      setIsGrabbed(false);
    }

    if (onRelease) {
      onRelease();
    }

    document.body.style.cursor = "auto";
    clickCountRef.current = 0;
    window.removeEventListener("pointerup", handlePointerUp);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      className={`flex flex-col items-center p-6 hover:${
        isGrabbed ? `cursor-grabbing` : `cursor-grab`
      } `}
    >
      {children}
    </div>
  );
};

export default NodeWrapper;
