import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Rectangle from "./components/three/shapes/rectangle";
import Circle from "./components/three/shapes/circle";
import { useAppSelector } from "./components/hooks/use-app-dispatch";
import { generateUUID } from "three/src/math/MathUtils.js";
import { useContext } from "react";
import { CanvasOperationsContext } from "./components/three/canvas-operations-context";
import GridPlane from "./components/three/grid-plane";

const WizFlowCanvas: React.FC = () => {
  const nodes = useAppSelector((state) => state.nodes);
  const canvasOperations = useContext(CanvasOperationsContext);

  return (
    <div className="absolute top-0 left-0 w-full h- bg-black/10">
      <Canvas camera={{ position: [10, 20, -10] }}>
        <ambientLight />
        <directionalLight />

        <GridPlane />
        {nodes.map((nodeProps, idx) => (
          <Rectangle key={idx} {...nodeProps} />
        ))}

        <Rectangle
          id={generateUUID()}
          rotation={[0, 0, 0]}
          type="rectangle"
          position={[3, 0, 5]}
          data={{ label: "this is not from the state" }}
        />

        <Circle
          title="Circle Node"
          description="This is a circle node"
          position={[-7, 0, 5]}
        />
        {!canvasOperations?.freezeOrbitControls ? <OrbitControls /> : null}
      </Canvas>
    </div>
  );
};

export default WizFlowCanvas;
