/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: LZ Creation (https://sketchfab.com/jmch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/zeus-782f99eadca041b8b52d9e0a2c6f4e3f
Title: Zeus
*/


import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import zeusScene from "../assets/3d/zeus.glb"
import { useFrame, useThree } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";


export function Zeus({isRotating,setIsRotating,...props}) {

  const { nodes, materials } = useGLTF(zeusScene);

  const zeusRef = useRef();

  const {gl,viewport} = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
 const dampingFactor = 0.95;

 useFrame(() => {
    if (isRotating) {
        zeusRef.current.rotation.y += 0.01;
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
    <group {...props} ref={zeusRef}>
      <group
       position={[-2.011, -15.631, 0]}
       rotation={[-Math.PI, -Math.PI / 2, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Zeus_300k_ZR_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Zeus_300k_ZR_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Zeus_300k_ZR_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Zeus_300k_ZR_Material_u2_v1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/zeus.glb");


