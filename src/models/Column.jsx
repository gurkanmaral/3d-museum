/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ChrisCLP (https://sketchfab.com/ChrisCLP)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/greek-doric-column-d294f4a24b834f418c7d01daeb49c727
Title: Greek Doric Column
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import column from "../assets/3d/column.glb"

export function Column({...props}) {


  const { nodes, materials } = useGLTF(column);


  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/greek_doric_column.glb");