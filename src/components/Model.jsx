import { useGLTF } from "@react-three/drei";

export default function Model({ modelPath, scale = 1 }) {

  // 🛑 Never attempt loading if path missing
  if (!modelPath) return null;

  const { scene } = useGLTF(modelPath);

  return (
    <primitive
      object={scene}
      dispose={null}
      scale={scale}   // ✅ allows per-model scaling
      castShadow
      receiveShadow
    />
  );
}



useGLTF.preload("/models/15.6_03.glb");
useGLTF.preload("/models/DIinput.glb");
useGLTF.preload("/models/DOoutput.glb");
useGLTF.preload("/models/7-inch.glb");
