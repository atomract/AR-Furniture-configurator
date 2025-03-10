import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrTable from "./XrTable";
import { CustomContextProvider } from "../contexts/Context";
import HtmlConfigurator from "../HTML/HtmlConfigurator";
import { Loader } from "@react-three/drei";
import { useState } from "react";


const XrTableContainer = () => {

  const [pos, setPos] = useState(false)

  return (
    <>
    <CustomContextProvider>
      <div className="App">

      <ARButton
      onClick={() => setPos(!pos)}
      />
      <Canvas camera={{fov: 90, position: [0,0.00005,0.0025]}}>
          <color attach="background" args={["#313747"]} />
        <XR>
          <XrTable />
        </XR>
      </Canvas>
      <Loader/>
      <HtmlConfigurator/>
      </div>
    </CustomContextProvider>
    </>
  );
};

export default XrTableContainer;
