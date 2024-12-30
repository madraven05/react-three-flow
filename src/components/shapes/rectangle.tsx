import { Html, Line, Shape } from "@react-three/drei";
import * as THREE from "three";
import React, { ReactNode, useEffect, useState } from "react";

interface RectangleProps {
  height?: number;
  width?: number;
  title?: string;
  description?: string;
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

  const [hover, setHover] = useState(false);
  const [lineWidth, setLineWidth] = useState(2);

  useEffect(() => {
    setLineWidth(hover ? 4 : 2);
  }, [hover]);

  return (
    <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} {...props}>
      <Line
        points={points}
        color="black"
        lineWidth={lineWidth} // Note: Line width might not work as expected in some browsers
        dashed={false}
      ></Line>
      <Html transform>
        <div
          onPointerOverCapture={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          style={{ height: `${height * 40}px`, width: `${width * 40}px` }}
          className={`flex flex-col p-8 gap-3 items-center justify-start cursor-pointer`}
        >
          <h1>{title}</h1>
          {description}
        </div>
      </Html>
    </group>
  );
};

export default Rectangle;
