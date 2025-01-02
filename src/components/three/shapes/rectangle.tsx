import { Html } from "@react-three/drei";
import React, { useContext, useEffect } from "react";
import EditableText from "../ui/editable-text";
import NodeWrapper from "./node-wrapper";
import { CanvasOperationsContext } from "../canvas-operations-context";
import { ReactThreeFlowNode } from "../../../models/react-three-flow-node";

interface RectangleProps extends ReactThreeFlowNode {

}

const Rectangle: React.FC<RectangleProps> = ({
  data,
  id,
  type,
  height,
  width,
  rotation = [-Math.PI / 2, 0, Math.PI / 2],
  ...props
}) => {
  const canvasOperations = useContext(CanvasOperationsContext);

  if(!canvasOperations) {
    throw new Error("Component should be wrapped around a provider!");
  }
  
  useEffect(() => {
    if(canvasOperations.isNodeGrabbed) {
      console.log("Node grabbed!");
    }
  }, [canvasOperations])

  return (
    <group rotation={rotation} key={id} {...props}>
      <Html transform>
        <NodeWrapper>
          <div
            onDoubleClick={() => canvasOperations.setIsNodeGrabbed(true)}
            className={`flex flex-col border-[2px] border-black rounded-md p-8 gap-3 items-center justify-start`}
          >
            <EditableText text={data.label} />
          </div>
        </NodeWrapper>
      </Html>
    </group>
  );
};

export default Rectangle;
