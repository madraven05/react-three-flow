import { Html, Line } from "@react-three/drei";
import * as THREE from "three";
import React from "react";
import EditableText from "../ui/editable-text";
import { WiizflowNodes } from "../../wiizflow-nodes";

interface RectangleProps extends WiizflowNodes {
  height?: number;
  width?: number;
}

const Rectangle: React.FC<JSX.IntrinsicElements["group"] & RectangleProps> = ({
  width = 10,
  height = 8,
  title,
  description,
  ...props
}) => {
  return (
    <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} {...props}>
      <Html transform>
        <div
          className={`flex flex-col border-[2px] border-black p-8 gap-3 items-center justify-start cursor-pointer`}
        >
          <h1><EditableText text={title}/></h1>
          <EditableText text={description} />
        </div>
      </Html>
    </group>
  );
};

export default Rectangle;
