import React, { useContext } from "react";
import { CanvasOperationsContext } from "./canvas-operations-context";
import { ThreeEvent } from "@react-three/fiber";
import { useAppDispatch } from "../hooks/use-app-dispatch";
import { ReactThreeFlowNode } from "../../models/react-three-flow-node";
import { updateNodeProperties } from "../redux/features/nodes/node-action";

const GridPlane: React.FC = () => {
  const canvasOperations = useContext(CanvasOperationsContext);
  const dispatch = useAppDispatch();

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    setTimeout(() => {
      if (canvasOperations?.moveNodeOperation.active) {
        const newNodeProps: Partial<ReactThreeFlowNode> = {
          position: [e.intersections[0].point.x, 0, e.intersections[0].point.z],
        };
        dispatch(
          updateNodeProperties({
            id: canvasOperations.moveNodeOperation.nodeId as string,
            update: newNodeProps,
          })
        );
      }
    }, 200);
  };

  return (
    <mesh onPointerMove={handlePointerMove} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[75, 75]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default GridPlane;
