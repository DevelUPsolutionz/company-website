import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, Sparkles, PerspectiveCamera, MeshDistortMaterial, Sphere, Box, Torus, Html } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NeuralSphere = () => {
  const meshRef = useRef();
  const outerRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.2;
    outerRef.current.rotation.y = -t * 0.1;
    outerRef.current.rotation.z = t * 0.05;
  });

  return (
    <group>
      {/* Central Core */}
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#2563FF"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#8B5CF6"
          emissiveIntensity={1}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
      
      {/* Neural Lines / Outer Shell */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2, 2]} />
        <meshStandardMaterial 
          color="#2563FF" 
          wireframe 
          transparent 
          opacity={0.15} 
          emissive="#2563FF" 
          emissiveIntensity={0.2} 
        />
      </mesh>

      {/* Rotating Panels */}
      {[0, 1, 2, 3].map((i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1}>
          <mesh position={[Math.cos(i * Math.PI / 2) * 3, Math.sin(i * Math.PI / 2) * 1, 0]}>
            <boxGeometry args={[0.8, 0.5, 0.05]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.35} roughness={0.15} metalness={0.2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const DigitalHighway = ({ position }) => {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 100; i++) {
      p.push(new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, -i * 2));
    }
    return p;
  }, []);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <group position={position}>
      <gridHelper args={[100, 50, "#2563FF", "#cbd5e1"]} rotation={[Math.PI / 2, 0, 0]} position={[0, -5, -50]} opacity={0.3} transparent />
      <line geometry={lineGeometry}>
        <lineBasicMaterial color="#8B5CF6" transparent opacity={0.25} />
      </line>
      {/* Data Streams */}
      {[0, 1, 2, 3, 4].map((i) => (
        <Float key={i} speed={5}>
          <mesh position={[(i - 2) * 3, -4.8, -Math.random() * 100]}>
            <boxGeometry args={[0.1, 0.1, 5]} />
            <meshBasicMaterial color="#2563FF" opacity={0.6} transparent />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const Scene = () => {
  const { camera } = useThree();
  const sceneRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      }
    });

    // Unified Camera Journey - Centered
    tl.to(camera.position, { z: 5, ease: "power2.inOut" }) // Hero
      .to(camera.position, { x: 0, y: -15, z: 15, ease: "power2.inOut" }) // About
      .to(camera.position, { x: 0, y: -35, z: 20, ease: "power2.inOut" }) // Services
      .to(camera.position, { x: 0, y: -60, z: 30, ease: "power2.inOut" }) // Process
      .to(camera.position, { x: 0, y: -85, z: 15, ease: "power2.inOut" }) // WhyChooseUs
      .to(camera.position, { x: 0, y: -110, z: 5, ease: "power2.inOut" }); // Contact

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [camera]);

  return (
    <group ref={sceneRef}>
      <NeuralSphere />
      
      <group position={[0, -15, 0]}>
        <mesh rotation={[0.5, 0.5, 0]}>
          <torusKnotGeometry args={[3, 0.5, 128, 16]} />
          <meshStandardMaterial color="#2563FF" wireframe transparent opacity={0.15} />
        </mesh>
      </group>

      <DigitalHighway position={[0, -60, 0]} />

      <Sparkles count={150} scale={[30, 30, 30]} size={2} speed={0.4} color="#2563FF" opacity={0.3} />
      <Sparkles count={150} scale={[30, 30, 30]} size={2} speed={0.4} color="#8B5CF6" opacity={0.3} />
      
      {/* Generate environment map dynamically via local virtual lights instead of remote preset */}
      <Environment resolution={256}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#2563FF" />
        <pointLight position={[-5, 5, -5]} intensity={1.5} color="#8B5CF6" />
      </Environment>
    </group>
  );
};

const Experience = () => {
  const [mountCanvas, setMountCanvas] = useState(false);

  useEffect(() => {
    const update = () => {
      setMountCanvas(window.innerWidth >= 768);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (!mountCanvas) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#f8fafc]">
      <Canvas 
        shadows 
        dpr={[1, 1.5]} 
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
        <color attach="background" args={["#f8fafc"]} />
        <fog attach="fog" args={["#f8fafc", 10, 55]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2.0} />
        <React.Suspense fallback={null}>
          <Scene />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default Experience;
