import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import "./Bee.css";

/* ------------------------------------------------------------------
   A small procedural bee. No model file to download, no license to
   track: everything below is built from primitive geometry so it
   ships with the bundle and loads instantly.
------------------------------------------------------------------ */

const BODY = "#f5b62b";
const DARK = "#1b1508";
const WING = "#eaf0ff";
const BEE_SCALE = 0.34;

const Wing = ({ side, flapRef }) => (
  // pivot sits at the wing root so the flap rotates like a hinge
  <group ref={flapRef} position={[0.18, 0.34, 0.12 * side]}>
    <mesh
      position={[-0.34, 0.02, 0.42 * side]}
      rotation={[0, 0, side > 0 ? 0.18 : -0.18]}
      scale={[0.46, 0.13, 0.46]}
    >
      <sphereGeometry args={[1, 24, 16]} />
      <meshStandardMaterial
        color={WING}
        transparent
        opacity={0.22}
        roughness={0.15}
        metalness={0}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  </group>
);

const BeeBody = () => {
  const leftWing = useRef();
  const rightWing = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const flap = Math.sin(t * 34) * 0.7;
    if (leftWing.current) leftWing.current.rotation.x = -flap;
    if (rightWing.current) rightWing.current.rotation.x = flap;
  });

  return (
    <group>
      {/* abdomen */}
      <mesh position={[-0.5, 0, 0]} scale={[1.25, 0.92, 0.92]}>
        <sphereGeometry args={[0.52, 32, 24]} />
        <meshStandardMaterial color={BODY} roughness={0.45} metalness={0.05} />
      </mesh>

      {/* stripes */}
      {[-0.16, -0.52, -0.88].map((x, i) => (
        <mesh key={x} position={[x, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.47 - i * 0.06, 0.075, 12, 32]} />
          <meshStandardMaterial color={DARK} roughness={0.6} />
        </mesh>
      ))}

      {/* stinger */}
      <mesh position={[-1.26, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.1, 0.34, 16]} />
        <meshStandardMaterial color={DARK} roughness={0.5} />
      </mesh>

      {/* thorax */}
      <mesh position={[0.32, 0.03, 0]}>
        <sphereGeometry args={[0.44, 28, 20]} />
        <meshStandardMaterial color={"#3a2d10"} roughness={0.65} />
      </mesh>

      {/* head */}
      <mesh position={[0.86, 0.02, 0]} scale={[0.95, 1, 1]}>
        <sphereGeometry args={[0.34, 28, 20]} />
        <meshStandardMaterial color={DARK} roughness={0.5} />
      </mesh>

      {/* eyes */}
      {[0.2, -0.2].map((z) => (
        <mesh key={z} position={[1.05, 0.08, z]}>
          <sphereGeometry args={[0.1, 16, 12]} />
          <meshStandardMaterial color={"#fdfbf4"} roughness={0.2} />
        </mesh>
      ))}

      {/* antennae */}
      {[0.14, -0.14].map((z) => (
        <group key={z} position={[1.02, 0.26, z]} rotation={[0, 0, -0.5]}>
          <mesh position={[0.14, 0.1, 0]} rotation={[0, 0, Math.PI / 2.4]}>
            <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
            <meshStandardMaterial color={DARK} />
          </mesh>
          <mesh position={[0.3, 0.24, 0]}>
            <sphereGeometry args={[0.055, 12, 10]} />
            <meshStandardMaterial color={BODY} />
          </mesh>
        </group>
      ))}

      <Wing side={1} flapRef={leftWing} />
      <Wing side={-1} flapRef={rightWing} />
    </group>
  );
};

const FlyingBee = ({ progressRef, visibleRef }) => {
  const outer = useRef();
  const tilt = useRef();
  const inner = useRef();
  const heading = useRef(0);
  const smoothed = useRef(0);
  const last = useMemo(() => new THREE.Vector2(0, 0), []);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!outer.current) return;
    const t = state.clock.getElapsedTime();

    // ease toward the current scroll position so the bee lags behind
    smoothed.current += (progressRef.current - smoothed.current) * Math.min(1, delta * 2.4);
    const p = smoothed.current;

    // flight path across the viewport
    const halfW = (viewport.width / 2) * 0.82;
    const halfH = (viewport.height / 2) * 0.62;
    const x = Math.sin(p * Math.PI * 3.1 - 0.6) * halfW + Math.sin(t * 0.9) * 0.08;
    const y = Math.cos(p * Math.PI * 4.4) * halfH + Math.sin(t * 1.7) * 0.12;

    const vx = x - last.x;
    const vy = y - last.y;
    last.set(x, y);

    outer.current.position.set(x, y, 0);

    // point the nose along the direction of travel, keep it upright
    if (Math.abs(vx) + Math.abs(vy) > 0.00005) {
      const goingLeft = vx < 0;
      // vertical tilt only, capped so the bee never stands on its head
      const pitch = THREE.MathUtils.clamp(Math.atan2(vy, Math.abs(vx)), -0.55, 0.55);
      const target = goingLeft ? Math.PI - pitch : pitch;
      heading.current += (target - heading.current) * Math.min(1, delta * 6);
      tilt.current.rotation.z = heading.current;
      inner.current.scale.y = goingLeft ? -1 : 1;
      inner.current.rotation.x = Math.sin(t * 2.2) * 0.12;
    }

    // fade in once the hero is out of the way
    const target = visibleRef.current ? 1 : 0;
    const s = THREE.MathUtils.lerp(outer.current.scale.x / BEE_SCALE, target, Math.min(1, delta * 4));
    outer.current.scale.setScalar(s * BEE_SCALE);
    outer.current.visible = s > 0.02;
  });

  return (
    <group ref={outer} scale={0}>
      <group ref={tilt}>
        <group ref={inner}>
          <BeeBody />
        </group>
      </group>
    </group>
  );
};

const BeeCanvas = () => {
  const progressRef = useRef(0);
  const visibleRef = useRef(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    setEnabled(true);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      visibleRef.current = window.scrollY > window.innerHeight * 0.55;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className='bee-layer' aria-hidden='true'>
      <Canvas camera={{ position: [0, 0, 9], fov: 42 }} dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 5, 6]} intensity={1.6} />
        <pointLight position={[-4, -2, 4]} intensity={30} color='#915eff' distance={18} />
        <FlyingBee progressRef={progressRef} visibleRef={visibleRef} />
      </Canvas>
    </div>
  );
};

export default BeeCanvas;
