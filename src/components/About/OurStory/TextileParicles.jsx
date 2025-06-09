// TextileParticles.jsx
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const FiberParticles = () => {
  const ref = useRef();

  const particles = useMemo(() => {
    const count = 130;
    const temp = [];

    for (let i = 0; i < count; i++) {
      const x = THREE.MathUtils.randFloatSpread(20);
      const y = THREE.MathUtils.randFloatSpread(10);
      const z = THREE.MathUtils.randFloatSpread(20);
      temp.push(x, y, z);
    }

    return new Float32Array(temp);
  }, []);

  useFrame(() => {
    ref.current.rotation.y += 0.001;
    ref.current.rotation.x += 0.0005;
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={particles}>
        {" "}
        {/* Removed extra 'positions' prop */}
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color="#1fa951"
          size={0.1}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const TextileParticles = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <ambientLight intensity={0.5} />
      <FiberParticles />
    </Canvas>
  );
};

export default TextileParticles;
