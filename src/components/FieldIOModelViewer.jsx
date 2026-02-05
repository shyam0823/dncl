import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Bounds } from "@react-three/drei";
import * as THREE from "three";

/* ✅ Model loader – only rendered when model exists */
function Model({ model }) {
  const { scene } = useGLTF(model);

  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  // Center the model
  const box = new THREE.Box3().setFromObject(scene);
  const center = box.getCenter(new THREE.Vector3());
  scene.position.sub(center);

  return <primitive object={scene} />;
}

export default function FieldIOModelViewer({ model }) {
  /* ✅ HARD GUARD */
  if (!model || typeof model !== "string") {
    return null;
  }

  return (
    <div className="model-viewer">
      <Canvas shadows camera={{ fov: 35 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[6, 8, 6]} intensity={1.5} />
        <directionalLight position={[-4, 3, -4]} intensity={0.6} />

        <Bounds fit clip observe margin={1.2}>
          <Model model={model} />
        </Bounds>

        <OrbitControls
          enablePan={false}
          enableZoom
          minDistance={1}
          maxDistance={6}
        />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
