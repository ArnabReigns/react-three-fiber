import { RoundedBox, Stats } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AmbientLight, Color, Vector3 } from "three";

function Box({ text, ...props }) {
  const ref = useRef();
  const black = useMemo(() => new Color("black"), []);
  const lime = useMemo(() => new Color("lime"), []);
  const [hovered, setHovered] = useState(false);
  const [initialPosition, setInitialPos] = useState(null);
  useEffect(() => {
    setInitialPos(ref.current.position);
  }, []);

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2.5;
    const y = (mouse.y * viewport.height) / 2.5;

    ref.current.lookAt(x, y, 1);

    const targetPosition = new Vector3(
      initialPosition.x,
      initialPosition.y,
      -0.5
    );

    const initPos = new Vector3(initialPosition.x, initialPosition.y, 0);

    // Update the position of the box
    if (hovered) ref.current.position.lerp(targetPosition, 0.1);
    else ref.current.position.lerp(initPos, 0.1);
    console.log(ref.current.position);
  });

  return (
    <mesh
      scale={0.5}
      {...props}
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox args={[3, 3, 1]} radius={0.3}>
        <meshLambertMaterial attach="material" color={"grey"} />
      </RoundedBox>

      {props.children}
    </mesh>
  );
}

function Light({ text, ...props }) {
  const l = useRef();

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2.5;
    const y = (mouse.y * viewport.height) / 2.5;
    l.current.position.set(x, y, 1);
  });

  return <pointLight ref={l} />;
}

export default function Header3d() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }} className="header">
      {/* <directionalLight position={[0, 0, 1]} /> */}
      <ambientLight intensity={0.1} />
      <Light />
      {[...Array(5).keys()].map((i) => (
        <group key={i * 6}>
          <Box position={[-7, -3 + i * 1.5, 0]} text={"S"} />
          <Box position={[-5, -3 + i * 1.5, 0]} text={"S"} />
          <Box position={[-3, -3 + i * 1.5, 0]} text={"B"} />
          <Box position={[-1, -3 + i * 1.5, 0]} text={"C"} />
          <Box position={[1, -3 + i * 1.5, 0]} text={"O"} />
          <Box position={[3, -3 + i * 1.5, 0]} text={"D"} />
          <Box position={[5, -3 + i * 1.5, 0]} text={"E"} />
          <Box position={[7, -3 + i * 1.5, 0]} text={"E"} />
        </group>
      ))}
    </Canvas>
  );
}
