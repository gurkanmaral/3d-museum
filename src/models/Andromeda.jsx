/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Haddonstone (https://sketchfab.com/robint1)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/e640-andromeda-8d05ae85be0942faa1e9e5b078b94fe6
Title: E640 - Andromeda
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import andromeda from "../assets/3d/andromeda.glb"
import { useFrame, useThree } from "@react-three/fiber";

export function Andromeda({isRotating,setIsRotating,...props}) {

  const { nodes, materials } = useGLTF(andromeda);
  const andromedaRef = useRef();

  const {gl,viewport} = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
 const dampingFactor = 0.95;

 useFrame(() => {
    if (isRotating) {
        andromedaRef.current.rotation.y += 0.01;
    }
    
});
const isDragging = useRef(false);

useEffect(() => {
    const handlePointerDown = () => {
      isDragging.current = true;
      setIsRotating(false);
    };

    const handlePointerUp = () => {
      isDragging.current = false;
      setIsRotating(true);
    };

    gl.domElement.addEventListener('pointerdown', handlePointerDown);
    gl.domElement.addEventListener('pointerup', handlePointerUp);

    return () => {
      gl.domElement.removeEventListener('pointerdown', handlePointerDown);
      gl.domElement.removeEventListener('pointerup', handlePointerUp);
    };
  }, [gl.domElement]);

  return (
    <group {...props}  ref={andromedaRef}>
      <group rotation={[-1.941, -0.242, 0.279]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/e640_-_andromeda.glb");
