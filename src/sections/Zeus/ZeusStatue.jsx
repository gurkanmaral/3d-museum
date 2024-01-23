/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Zeus } from '../../models/Zeus';
import { OrbitControls } from '@react-three/drei';

const ZeusStatue = () => {
    const orbitControlsRef = useRef();
    const [isRotating, setIsRotating] = useState(true);

const adjustZeusForScreenSize = ()=>{
    let screenScale = null;
    let screenPosition = [0,-1.5,0];
    let zeusRotation = [0.1,4.7,0]
    if(window.innerWidth < 768){
        screenScale = [0,9,0.9,0.9];
    }else{
        screenScale = [0.25,0.25,0.25];
    }
    return [screenScale,screenPosition,zeusRotation]
  }
  const [zeusScale,zeusPosition,zeusRotation] = adjustZeusForScreenSize();



  return (
    <div className='w-full  h-screen border border-black flex flex-row'>
           <div className='w-[50%]'>
           <Canvas 
            camera={{
                position: [0, 0, 5],
                fov: 100,
                near: 0.1,
                far: 1000,
              }}
              className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            >
                <Suspense fallback={"Loading..."}>
                <directionalLight position={[10, 10, 5]} intensity={1} color="#fff" />
                <ambientLight intensity={0.5} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.75} />

            <OrbitControls enableZoom={true} />
                    <Zeus
                    position={zeusPosition}
                    scale={zeusScale}                  
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}         
                    />                    
            </Suspense>
            </Canvas>
           </div>
           <div className='w-[50%] h-full flex items-start justify-center flex-col p-2'>
                <p className='text-base'>
                Zeus is one of the most prominent figures in ancient Greek mythology. Known as the king of the gods, he ruled over Mount Olympus and was revered as the god of the sky, thunder, and lightning.
                </p>
                  <h1 className='text-xl font-semibold mt-4'>Origin:</h1>
              
                <p className='text-base'>
                Zeus is the son of the Titans Cronus and Rhea. According to myth, Cronus swallowed each of his children at birth to prevent a prophecy that he would be overthrown by one of them. However, Rhea saved Zeus by hiding him in a cave and giving Cronus a stone wrapped in swaddling clothes to swallow instead. Zeus grew up in secret and eventually forced Cronus to regurgitate his siblings, leading to a battle for control of the universe.
                </p>
           </div>
    </div>
  )
}

export default ZeusStatue