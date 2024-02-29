import { OrbitControls, Stage } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Model } from "./Table";
import { useHitTest, useXR } from "@react-three/xr";

const XrTable = () => {
  const reticleRef = useRef();
  const { isPresenting } = useXR()


  return (
    < >
      <OrbitControls minDistance={0.5} minZoom={0.1}/>
      <Stage environment="night" intensity={0.1} castShadow={false}>
      <Model />
  

      

      </Stage>
    </>
  );
};

export default XrTable;
