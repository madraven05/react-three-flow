import { Html } from "@react-three/drei";
import React, { useMemo } from "react";

interface CircleProps {
  radius?: number;
  segments?: number;
}

const Circle: React.FC<JSX.IntrinsicElements["group"] & CircleProps> = ({
  radius = 6,
  segments = 64,
  ...props
}) => {
  const points = useMemo(() => {
    const points: [number, number, number][] = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * 2 * Math.PI;
      points.push([radius * Math.cos(theta), radius * Math.sin(theta), 0]);
    }
    return points;
  }, [radius, segments]);

  return (
    <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} {...props}>
      <lineLoop>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array(points.flatMap((p) => [p[0], p[1], p[2]]))}
            count={points.length}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial linewidth={2} color={"black"} />
      </lineLoop>

      <Html transform>
        <div style={{width: `${radius * 80}px`, height: `${radius * 80}px`}} className={`flex flex-col gap-5 p-14 text-center items-center justify-center rounded-full`}>
          <h1>Title 2</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim qui
            magnam neque dolorem autem officia incidunt facilis quae debitis
            nesciunt! Dolorem soluta optio veritatis recusandae accusamus
            eligendi commodi atque maxime?
          </p>
        </div>
      </Html>
    </group>
  );
};

export default Circle;
