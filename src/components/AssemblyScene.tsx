import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

type PartProps = {
  progress: React.MutableRefObject<number>;
  finalPos: [number, number, number];
  explodeOffset: [number, number, number];
  rotation?: [number, number, number];
  spin?: number;
  children: React.ReactNode;
};

function Part({ progress, finalPos, explodeOffset, rotation = [0, 0, 0], spin = 0, children }: PartProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    const p = THREE.MathUtils.clamp(progress.current, 0, 1);
    // ease
    const e = p * p * (3 - 2 * p);
    ref.current.position.set(
      finalPos[0] + explodeOffset[0] * (1 - e),
      finalPos[1] + explodeOffset[1] * (1 - e),
      finalPos[2] + explodeOffset[2] * (1 - e),
    );
    ref.current.rotation.set(
      rotation[0] + (1 - e) * 0.6,
      rotation[1] + (1 - e) * 1.2,
      rotation[2] + (1 - e) * 0.4,
    );
    if (spin) ref.current.rotation.y += dt * spin * e;
  });
  return <group ref={ref}>{children}</group>;
}

const steel = <meshStandardMaterial color="#c8ccd4" metalness={0.9} roughness={0.28} />;
const dark = <meshStandardMaterial color="#3a4048" metalness={0.85} roughness={0.4} />;
const amber = <meshStandardMaterial color="#f5a524" metalness={0.6} roughness={0.35} emissive="#8a4a00" emissiveIntensity={0.35} />;
const bolt = <meshStandardMaterial color="#8a8f98" metalness={0.95} roughness={0.25} />;

function Assembly({ progress }: { progress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.2) * 0.35 + progress.current * 0.4;
    group.current.rotation.x = Math.cos(t * 0.15) * 0.05;
  });

  const rungs = useMemo(() => Array.from({ length: 7 }, (_, i) => i), []);
  const bolts = useMemo(() => Array.from({ length: 8 }, (_, i) => i), []);

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* Base plate */}
      <Part progress={progress} finalPos={[0, -2.4, 0]} explodeOffset={[0, -3.5, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3.2, 0.15, 2.2]} />
          {dark}
        </mesh>
        <mesh position={[0, 0.09, 0]}>
          <boxGeometry args={[2.8, 0.04, 1.8]} />
          {amber}
        </mesh>
      </Part>

      {/* Vertical rails (4 corners) */}
      {[
        [-1.3, 0, -0.9],
        [1.3, 0, -0.9],
        [-1.3, 0, 0.9],
        [1.3, 0, 0.9],
      ].map((p, i) => (
        <Part
          key={`rail-${i}`}
          progress={progress}
          finalPos={p as [number, number, number]}
          explodeOffset={[p[0] * 2.5, 2 + i * 0.4, p[2] * 2.5]}
        >
          <mesh castShadow>
            <cylinderGeometry args={[0.08, 0.08, 4.6, 12]} />
            {steel}
          </mesh>
        </Part>
      ))} 

      {/* Ladder rungs */}
      {rungs.map((i) => {
        const y = -1.9 + i * 0.55;
        return (
          <Part
            key={`rung-${i}`}
            progress={progress}
            finalPos={[0, y, 0.9]}
            explodeOffset={[(i % 2 === 0 ? -1 : 1) * (3 + i * 0.3), 0.5, 3 + i * 0.2]}
          >
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.05, 0.05, 2.5, 10]} />
              {steel}
            </mesh>
          </Part>
        );
      })}

      {/* Gearbox housing */}
      <Part progress={progress} finalPos={[0, 1.7, -0.6]} explodeOffset={[-4, 2.5, -3]}>
        <mesh castShadow>
          <boxGeometry args={[1.4, 0.9, 0.9]} />
          {dark}
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1.2, 0.05, 0.7]} />
          {amber}
        </mesh>
      </Part>

      {/* Big gear */}
      <Part progress={progress} finalPos={[-0.55, 1.7, 0]} explodeOffset={[-3.5, 0.5, 2]} spin={0.8}>
        <mesh castShadow>
          <cylinderGeometry args={[0.55, 0.55, 0.14, 24]} />
          {steel}
        </mesh>
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 0.6, 0, Math.sin(a) * 0.6]} rotation={[0, -a, 0]}>
              <boxGeometry args={[0.12, 0.14, 0.1]} />
              {steel}
            </mesh>
          );
        })}
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 0.2, 12]} />
          {amber}
        </mesh>
      </Part>

      {/* Small gear */}
      <Part progress={progress} finalPos={[0.55, 1.7, 0]} explodeOffset={[3.5, 0.5, 2]} spin={-1.4}>
        <mesh castShadow>
          <cylinderGeometry args={[0.32, 0.32, 0.14, 20]} />
          {steel}
        </mesh>
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 0.37, 0, Math.sin(a) * 0.37]} rotation={[0, -a, 0]}>
              <boxGeometry args={[0.09, 0.14, 0.08]} />
              {steel}
            </mesh>
          );
        })}
      </Part>

      {/* Drive shaft */}
      <Part progress={progress} finalPos={[0, 1.7, 0.3]} explodeOffset={[0, 4, 3]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.08, 1.8, 16]} />
          {steel}
        </mesh>
      </Part>

      {/* Bearings */}
      {[-0.7, 0.7].map((x, i) => (
        <Part key={`brg-${i}`} progress={progress} finalPos={[x, 1.7, 0.3]} explodeOffset={[x * 4, -2, 4]}>
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.18, 0.06, 12, 24]} />
            {dark}
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.11, 0.03, 10, 20]} />
            {amber}
          </mesh>
        </Part>
      ))}

      {/* Top platform cage */}
      <Part progress={progress} finalPos={[0, 2.5, 0]} explodeOffset={[0, 5, 0]}>
        <mesh castShadow>
          <torusGeometry args={[1.2, 0.06, 10, 32]} />
          {steel}
        </mesh>
        <mesh position={[0, -0.1, 0]} castShadow>
          <torusGeometry args={[1.2, 0.06, 10, 32]} />
          {steel}
        </mesh>
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 1.2, -0.05, Math.sin(a) * 1.2]}>
              <cylinderGeometry args={[0.03, 0.03, 0.2, 8]} />
              {steel}
            </mesh>
          );
        })}
      </Part>

      {/* Motor cylinder */}
      <Part progress={progress} finalPos={[-1.1, 1.7, -0.6]} explodeOffset={[-5, -1, -3]}>
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 0.9, 20]} />
          {dark}
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]} position={[0.5, 0, 0]}>
          <cylinderGeometry args={[0.36, 0.36, 0.1, 20]} />
          {amber}
        </mesh>
      </Part>

      {/* Bolts around base */}
      {bolts.map((i) => {
        const a = (i / 8) * Math.PI * 2;
        return (
          <Part
            key={`bolt-${i}`}
            progress={progress}
            finalPos={[Math.cos(a) * 1.35, -2.28, Math.sin(a) * 0.95]}
            explodeOffset={[Math.cos(a) * 4, -3, Math.sin(a) * 4]}
          >
            <mesh>
              <cylinderGeometry args={[0.06, 0.06, 0.12, 6]} />
              {bolt}
            </mesh>
            <mesh position={[0, -0.12, 0]}>
              <cylinderGeometry args={[0.035, 0.035, 0.15, 8]} />
              {bolt}
            </mesh>
          </Part>
        );
      })}
    </group>
  );
}

function WindTurbine({ position, scale = 1, speed = 1 }: { position: [number, number, number]; scale?: number; speed?: number }) {
  const rotor = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (rotor.current) rotor.current.rotation.z += dt * speed;
  });
  const towerMat = <meshStandardMaterial color="#eef1f6" metalness={0.35} roughness={0.5} emissive="#2a3550" emissiveIntensity={0.15} />;
  const bladeMat = <meshStandardMaterial color="#ffffff" metalness={0.2} roughness={0.4} emissive="#3a4a70" emissiveIntensity={0.2} />;
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 4, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.5, 8, 20]} />
        {towerMat}
      </mesh>
      <mesh position={[0, 8.2, 0.35]} castShadow>
        <boxGeometry args={[0.7, 0.7, 1.6]} />
        <meshStandardMaterial color="#e2e6ee" metalness={0.4} roughness={0.45} />
      </mesh>
      <group position={[0, 8.2, 1.25]}>
        <mesh castShadow>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#c8ccd4" metalness={0.7} roughness={0.3} />
        </mesh>
        <group ref={rotor}>
          {[0, 1, 2].map((i) => {
            const a = (i / 3) * Math.PI * 2;
            return (
              <mesh key={i} rotation={[0, 0, a]} position={[Math.cos(a + Math.PI / 2) * 2.2, Math.sin(a + Math.PI / 2) * 2.2, 0]} castShadow>
                <boxGeometry args={[0.22, 4.2, 0.08]} />
                {bladeMat}
              </mesh>
            );
          })}
        </group>
      </group>
    </group>
  );
}

function FloatingGear({ position, size, speed, color = "#c8ccd4" }: { position: [number, number, number]; size: number; speed: number; color?: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * speed;
  });
  const teeth = 14;
  return (
    <group ref={ref} position={position} rotation={[Math.PI / 2, 0, 0]}>
      <mesh>
        <cylinderGeometry args={[size, size, size * 0.25, 24]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.35} />
      </mesh>
      {Array.from({ length: teeth }).map((_, i) => {
        const a = (i / teeth) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * size * 1.08, 0, Math.sin(a) * size * 1.08]} rotation={[0, -a, 0]}>
            <boxGeometry args={[size * 0.22, size * 0.25, size * 0.18]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.35} />
          </mesh>
        );
      })}
      <mesh>
        <cylinderGeometry args={[size * 0.22, size * 0.22, size * 0.4, 16]} />
        <meshStandardMaterial color="#f5a524" metalness={0.6} roughness={0.3} emissive="#8a4a00" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

function Piston({ position }: { position: [number, number, number] }) {
  const rod = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (rod.current) rod.current.position.y = Math.sin(state.clock.elapsedTime * 1.8) * 0.35;
  });
  return (
    <group position={position} rotation={[0, 0, Math.PI / 6]}>
      <mesh>
        <cylinderGeometry args={[0.35, 0.35, 1.4, 16]} />
        <meshStandardMaterial color="#3a4048" metalness={0.85} roughness={0.4} />
      </mesh>
      <mesh ref={rod} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 1.8, 12]} />
        <meshStandardMaterial color="#e8ecf2" metalness={0.95} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Scenery() {
  return (
    <group>
      {/* Wind turbines — pulled closer & to the sides so they read clearly */}
      <WindTurbine position={[-7, -2.5, -4]} scale={0.85} speed={0.7} />
      <WindTurbine position={[8.5, -2.5, -6]} scale={1} speed={0.5} />
      <WindTurbine position={[-11, -2.5, -9]} scale={1.2} speed={0.4} />
      <WindTurbine position={[13, -2.5, -10]} scale={0.9} speed={0.6} />

      {/* Multi-discipline mechanical background — signals "all mech things" */}
      <FloatingGear position={[-6, 4.5, -3]} size={0.9} speed={0.6} />
      <FloatingGear position={[-5.2, 4.5, -3]} size={0.55} speed={-1} color="#f5a524" />
      <FloatingGear position={[7, 5.2, -4]} size={0.7} speed={0.8} />
      <Piston position={[8, 3, -3]} />
      <Piston position={[-8, 2, -4]} />

      {/* Bracket / structural I-beam floating far back */}
      <mesh position={[0, 6, -12]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[6, 0.15, 0.4]} />
        <meshStandardMaterial color="#c8ccd4" metalness={0.7} roughness={0.4} />
      </mesh>
      <mesh position={[0, 6, -12]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[0.4, 1.2, 0.15]} />
        <meshStandardMaterial color="#c8ccd4" metalness={0.7} roughness={0.4} />
      </mesh>
    </group>
  );
}

export function AssemblyScene({ progress }: { progress: React.MutableRefObject<number> }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      camera={{ position: [5.5, 1.5, 6.5], fov: 46 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Sky gradient — dawn workshop tint */}
      <color attach="background" args={["#152238"]} />
      <fog attach="fog" args={["#152238", 22, 55]} />
      <hemisphereLight args={["#7ba3d8", "#0a1220", 0.6]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[6, 8, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-6, 4, -3]} intensity={0.7} color="#6a95c8" />
      <pointLight position={[0, 2, 3]} intensity={0.9} color="#f5a524" />
      <Suspense fallback={null}>
        <Scenery />
        <Float speed={0.6} rotationIntensity={0.15} floatIntensity={0.35}>
          <Assembly progress={progress} />
        </Float>
        <Environment preset="warehouse" />
      </Suspense>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, -6]} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color="#0f1c30" metalness={0.1} roughness={0.9} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.49, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <shadowMaterial opacity={0.5} />
      </mesh>
    </Canvas>
  );
}

