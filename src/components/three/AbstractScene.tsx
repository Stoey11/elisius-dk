"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  Lightformer,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * A glossy chrome "knot" — the hero object. Slowly rotates and reacts
 * subtly to the pointer for a premium, studio-rendered feel.
 */
function ChromeKnot() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.18;
    ref.current.rotation.x += delta * 0.05;
    // gentle pointer parallax
    const px = state.pointer.x * 0.25;
    const py = state.pointer.y * 0.25;
    ref.current.position.x += (px - ref.current.position.x) * 0.04;
    ref.current.position.y += (-py - ref.current.position.y) * 0.04;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref} scale={1.25}>
        <torusKnotGeometry args={[0.75, 0.26, 220, 36]} />
        {/* Slight roughness + lighter base keeps the metal reading as
            bright silver/pearl rather than a black void on a light page. */}
        <meshPhysicalMaterial
          color="#eef1ff"
          metalness={0.9}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.1}
          iridescence={0.8}
          iridescenceIOR={1.6}
          iridescenceThicknessRange={[120, 500]}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

/** A pearlescent chrome sphere that floats alongside the knot. */
function PearlSphere({
  position,
  scale = 1,
  color = "#f0f2ff",
}: {
  position: [number, number, number];
  scale?: number;
  color?: string;
}) {
  return (
    <Float speed={2.2} rotationIntensity={1.2} floatIntensity={1.6}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.85}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.08}
          iridescence={0.9}
          iridescenceIOR={1.5}
          iridescenceThicknessRange={[100, 480]}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  );
}

/** A small iridescent capsule that adds a pop of colour. */
function IridescentPill({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.2}>
      <mesh position={position} scale={scale} rotation={[0.6, 0.3, 0.4]}>
        <capsuleGeometry args={[0.22, 0.5, 16, 32]} />
        <meshPhysicalMaterial
          color="#6366f1"
          metalness={0.6}
          roughness={0.1}
          iridescence={1}
          iridescenceIOR={1.8}
          iridescenceThicknessRange={[100, 560]}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

export default function AbstractScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      {/* Soft key + fill lighting tuned for a bright, airy studio look */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} />
      <directionalLight position={[-5, -2, -3]} intensity={0.6} color="#a5b4fc" />

      <ChromeKnot />
      <PearlSphere position={[2.0, 1.0, -0.3]} scale={0.8} color="#eef1ff" />
      <PearlSphere position={[-2.1, -0.9, 0.3]} scale={0.58} color="#dfe6ff" />
      <IridescentPill position={[1.8, -1.2, 0.5]} scale={1.0} />
      <IridescentPill position={[-1.8, 1.3, -0.3]} scale={0.75} />

      {/* A bright, enveloping studio so the metal reflects light, not void.
          The coloured strips give the iridescent gradient highlights. */}
      <Environment resolution={512}>
        {/* large soft white backdrop wrapping most of the hemisphere */}
        <Lightformer
          intensity={1.6}
          position={[0, 0, -6]}
          scale={[18, 18, 1]}
          color="#ffffff"
        />
        <Lightformer
          intensity={2.4}
          position={[0, 5, 3]}
          scale={[10, 8, 1]}
          color="#ffffff"
        />
        <Lightformer
          intensity={2}
          position={[-5, 1, 3]}
          scale={[4, 8, 1]}
          color="#818cf8"
        />
        <Lightformer
          intensity={2}
          position={[5, -1, 2]}
          scale={[4, 8, 1]}
          color="#c4b5fd"
        />
        <Lightformer
          intensity={1.4}
          position={[0, -4, 2]}
          scale={[8, 4, 1]}
          color="#93c5fd"
        />
      </Environment>

      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.18}
        scale={12}
        blur={3}
        far={4}
        color="#4338ca"
      />
    </Canvas>
  );
}
