import { Environment, Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Rectangle from "./components/shapes/rectangle";
import Circle from "./components/shapes/circle";

const WizFlowCanvas = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-black/60">
      <Canvas camera={{ position: [10, 10, 10] }}>
        <ambientLight />
        <directionalLight />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial />
        </mesh>

        <Rectangle
          position={[3, 0, 5]}
          title="Title 1"
          height={4}
          description="This is a description of the text box"
        />

        <Circle
          position={[-7, 0, 5]}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default WizFlowCanvas;
