import React, { useContext } from "react";
import { CanvasOperationsContext } from "./canvas-operations-context";
import { ThreeEvent } from "@react-three/fiber";
import { useAppDispatch } from "../hooks/use-app-dispatch";
import { ReactThreeFlowNode } from "../../models/react-three-flow-node";
import { updateNodeProperties } from "../redux/features/nodes/node-action";
import * as THREE from "three";
import { fragmentShader, vertexShader } from "./shaders/grid-shaders";
import { Plane } from "@react-three/drei";

interface GridPlaneProps {
  interval?: number,
  lineThickness?: number,
  planeColor?: string
}

const GridPlane: React.FC<GridPlaneProps> = ({
  interval = 0.02,
  lineThickness = 0.002,
  planeColor = "white"
}) => {
  const canvasOperations = useContext(CanvasOperationsContext);
  const dispatch = useAppDispatch();

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uInterval: { value: interval },
      uLineThickness: { value: lineThickness },
      uColor: { value: new THREE.Color(planeColor) },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });

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
    <Plane onPointerMove={handlePointerMove} args={[50,50]} rotation={[-Math.PI/2, 0, 0]}>
      <primitive attach="material" object={shaderMaterial}/>
    </Plane>
  );
};

export default GridPlane;
