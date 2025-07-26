import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Mesh, Vector3 } from "three";

function FloatingBox({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color="#3b82f6"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
}

function FloatingSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y =
        position[1] + Math.cos(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial
        color="#06b6d4"
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
}

const FloatingElements = () => {
  const boxes = useMemo(
    () =>
      Array.from(
        { length: 8 },
        (_, i) =>
          [
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ] as [number, number, number],
      ),
    [],
  );

  const spheres = useMemo(
    () =>
      Array.from(
        { length: 6 },
        (_, i) =>
          [
            (Math.random() - 0.5) * 25,
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 8,
          ] as [number, number, number],
      ),
    [],
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />

        {boxes.map((position, index) => (
          <FloatingBox key={`box-${index}`} position={position} />
        ))}

        {spheres.map((position, index) => (
          <FloatingSphere key={`sphere-${index}`} position={position} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingElements;
