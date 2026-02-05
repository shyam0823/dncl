import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Bounds,
  Html,
} from "@react-three/drei";
import Model from "./Model";

/* 🔥 Simple Loader (prevents blank screen) */
function Loader() {
  return (
    <Html center>
      <div style={{ fontSize: "14px", fontWeight: "600" }}>
        Loading 3D Model...
      </div>
    </Html>
  );
}

export default function ModelViewer({ model, scale = 1 }) {

  // ✅ HARD STOP — prevents ALL loader crashes
  if (!model) return null;

  return (
    <div className="model-viewer">
      <Canvas
        shadows
        dpr={[1, 1.8]}   // 🔥 prevents GPU overload on 4K screens
        camera={{
          fov: 38,
          near: 0.1,
          far: 100,
          position: [0, 1, 3], // safer default
        }}
      >
        {/* 🌎 Better lighting balance */}
        <ambientLight intensity={0.7} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize-width={1024}   // 🔥 better performance
          shadow-mapSize-height={1024}
        />

        {/* 🔥 Suspense prevents crashes while loading */}
        <Suspense fallback={<Loader />}>
          
          {/* AUTO FIT MODEL */}
          <Bounds fit clip observe margin={1.25}>
            <Model modelPath={model} scale={scale} />
          </Bounds>

          {/* Realistic floor shadow */}
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.35}
            scale={10}
            blur={2.5}
            far={4}
          />

          {/* Studio reflections */}
          <Environment preset="studio" />
        </Suspense>

        {/* Camera Controls */}
        <OrbitControls
          enableZoom
          enablePan={false}
          minDistance={2}
          maxDistance={6}
        />
      </Canvas>
    </div>
  );
}
