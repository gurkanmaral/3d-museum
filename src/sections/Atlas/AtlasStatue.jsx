/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useState } from 'react'
import { Apollo } from '../../models/Apollo'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Atlas } from '../../models/Atlas'


const AtlasStatue = () => {
    const orbitControlsRef = useRef();
    const [isRotating, setIsRotating] = useState(true);

const adjustZeusForScreenSize = ()=>{
    let screenScale = null;
    let screenPosition = [0,-0.75,0];
    let zeusRotation = [0.1,4.7,0]
    if(window.innerWidth < 768){
        screenScale = [0,9,0.9,0.9];
    }else{
        screenScale = [0.35,0.35,0.35];
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
         <directionalLight position={[1, 0, 1]} intensity={2} color="#ff0000" />
         <ambientLight intensity={3} />
 <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

     <OrbitControls enableZoom={true} />
             <Atlas
             position={zeusPosition}
             scale={zeusScale}                  
             isRotating={isRotating}
             setIsRotating={setIsRotating}         
             />                    
     </Suspense>
     </Canvas>
    </div>
    <div className='w-[50%] h-full flex items-start justify-center flex-col p-2'>
         <h1 className='text-xl font-semibold'>Atlas</h1>
         <p className='text-base'>
         Atlas was a Titan, one of the ancient race of gods that preceded the Olympians. Titans were the children of Gaia (Earth) and Uranus (Sky).
         </p>          
         <p className='text-base mt-2'>
         After the Olympians, led by Zeus, emerged victorious, Atlas was punished for his role in the rebellion. His punishment was unique and severe.
         </p>      
         <p className='text-base mt-2'>
         Zeus condemned Atlas to hold up the sky for eternity. This was to prevent the sky from resuming its embrace with the Earth, which would have spelled disaster for humanity.
         </p>
         <p className='mt-2'>
         This task was carried out at the western edge of the known world, which in ancient times was considered to be near the Strait of Gibraltar.
         </p>
    </div>
</div>
  )
}

export default AtlasStatue