import { Html } from "@react-three/drei";
import React from "react";
import { WiizflowNodes } from "../../wiizflow-nodes";
import EditableText from "../ui/editable-text";
import NodeWrapper from "./node-wrapper";

interface CircleProps extends WiizflowNodes {
  radius?: number;
  segments?: number;
}

const Circle: React.FC<JSX.IntrinsicElements["group"] & CircleProps> = ({
  radius = 6,
  segments = 64,
  title,
  description,
  ...props
}) => {
  return (
    <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} {...props}>
      <Html transform>
        <NodeWrapper>
          <div
            className={`flex flex-col min-h-80 min-w-80 gap-5 p-14 border-[2px] border-black text-center items-center justify-center rounded-full`}
          >
            <h1>
              <EditableText text={title} />
            </h1>
            <EditableText text={description} />
          </div>
        </NodeWrapper>
      </Html>
    </group>
  );
};

export default Circle;
