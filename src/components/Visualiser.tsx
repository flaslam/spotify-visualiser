import { Html, OrbitControls, Stars, Cloud } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./Visualiser.css";

interface VisualiserProps {
  artists: any[];
}

const Dodecahedron = (text: string, position: number = 0, img: string = "") => {
  const modifiers: any[] = [-2, -1.5, 0];
  const startingPos: any[] = [modifiers[0], modifiers[1], modifiers[2]];
  const offset: any[] = [
    position * modifiers[0],
    position * modifiers[1],
    position * modifiers[2],
  ];
  const finalPos: any[] = [
    startingPos[0] - offset[0] - 1,
    startingPos[1] - offset[1],
    startingPos[2] - offset[2],
  ];

  const items = 20;
  const percent = (1 - position / (items * 1)) * 100;
  // console.log(percent);
  return (
    // <mesh scale={1 / position} position={finalPos}>
    <mesh scale={1} position={finalPos}>
      <dodecahedronGeometry />
      <meshLambertMaterial roughness={0.75} emissive="#404057" />
      <Html distanceFactor={10}>
        <div className="content">
          <img
            src={img}
            alt={text}
            style={{
              // height: `${percent}%`,
              // width: `${percent}%`,
              zIndex: `-${position}`,
              // TODO: include translate here so that each one moves back by the right %
            }}
          />
          <p>
            {position}. {text}
          </p>
        </div>
      </Html>
    </mesh>
  );
};

const Visualiser: React.FC<VisualiserProps> = (props) => {
  return (
    <div className="visualiser">
      <Canvas>
        <OrbitControls
        // enablePan={false}
        />
        <Stars
          radius={10}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={5}
        />
        <ambientLight intensity={1} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Cloud
          opacity={0.5}
          speed={0.4} // Rotation speed
          width={15} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={20} // Number of particles
          color={"hotpink"}
        />
        {props.artists && props.artists.length > 0
          ? props.artists.map((item, index) => {
              return (
                <>{Dodecahedron(item.name, index + 1, item.images[0].url)}</>
              );
            })
          : null}
      </Canvas>
    </div>
  );
};

export default Visualiser;
