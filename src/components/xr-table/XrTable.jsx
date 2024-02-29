import { OrbitControls, Stage } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Model } from "./Table";
import { Interactive, useHitTest, useXR } from "@react-three/xr";

const XrTable = () => {
  const reticleRef = useRef();
  const { isPresenting } = useXR()
  const [table, setTable] = useState();

  useHitTest((hitMatrix, hit) => {
    if(reticleRef.current){

      hitMatrix.decompose(
        reticleRef.current.position,
        reticleRef.current.quaternion,
        reticleRef.current.scale
      );
  
      reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
    }
  });


  const placeTable = (e) => {
    let position = e.intersection.object.position.clone();
    
    setTable(position);
  };

  return (
    < >
      <OrbitControls minDistance={0.5} minZoom={0.1}/>
      <Stage environment="night" intensity={0.1} castShadow={false}>
      {!isPresenting && <Model />}
      {isPresenting && <Model 
      // position={table} 
      />
      }

        {/* {isPresenting && (
        <Interactive onSelect={placeTable}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry scale={2} args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )} */}

      </Stage>
    </>
  );
};

export default XrTable;
