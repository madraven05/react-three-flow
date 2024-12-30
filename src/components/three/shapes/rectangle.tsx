import { Html, Line } from "@react-three/drei";
import * as THREE from "three";
import React, { useEffect, useState } from "react";
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
  const points: THREE.Vector3[] = [
    new THREE.Vector3(-width / 2, height / 2, 0),
    new THREE.Vector3(width / 2, height / 2, 0),
    new THREE.Vector3(width / 2, -height / 2, 0),
    new THREE.Vector3(-width / 2, -height / 2, 0),
    new THREE.Vector3(-width / 2, height / 2, 0),
  ];


  return (
    <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} {...props}>
      <Line
        points={points}
        color="black"
        lineWidth={2} // Note: Line width might not work as expected in some browsers
        dashed={false}
      ></Line>
      <Html transform>
        <div
          style={{ height: `${height * 40}px`, width: `${width * 40}px` }}
          className={`flex flex-col p-8 gap-3 items-center justify-start cursor-pointer`}
        >
          <h1><EditableText text={title}/></h1>
          <EditableText text={description} />
        </div>
      </Html>
    </group>
  );
};

export default Rectangle;
