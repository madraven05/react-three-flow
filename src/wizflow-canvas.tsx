import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Rectangle from "./components/three/shapes/rectangle";
import Circle from "./components/three/shapes/circle";
import { useContext } from "react";
import { CanvasOperationsContext } from "./components/three/canvas-operations-context";

const WizFlowCanvas: React.FC = () => {
  const canvasOperations = useContext(CanvasOperationsContext);

  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-black/60">
      <Canvas camera={{ position: [10, 10, 10] }}>
        <ambientLight />
        <directionalLight />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[200, 200]} />
          <meshStandardMaterial />
        </mesh>

        <Rectangle
          position={[3, 0, 1]}
          title="Title 1"
          height={5}
          description="This is a description of the text box"
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
