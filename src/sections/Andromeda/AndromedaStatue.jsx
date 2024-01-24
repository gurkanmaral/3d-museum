/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useState } from 'react'
import { Apollo } from '../../models/Apollo'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Atlas } from '../../models/Atlas'
import { Andromeda } from '../../models/Andromeda'


const AndromedaStatue = () => {
    const orbitControlsRef = useRef();
    const [isRotating, setIsRotating] = useState(true);

const adjustZeusForScreenSize = ()=>{
    let screenScale = null;
    let screenPosition = [-1,-1.75,0];
    let zeusRotation = [0.1,4.7,0]
    if(window.innerWidth < 768){
        screenScale = [0.03,0.03,0.03];
    }else{
        screenScale = [0.03,0.03,0.03];
    }
    return [screenScale,screenPosition,zeusRotation]
  }
  const [zeusScale,zeusPosition,zeusRotation] = adjustZeusForScreenSize();



  return (
    <div className='w-full  h-screen flex flex-col md:flex-row'>
    <div className='w-full md:w-[50%]'>
    <Canvas
     camera={{
         position: [-20, 0, 5],
         fov: 100,
         near: 0.1,
         far: 1000,
       }}
       className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
     >
         <Suspense fallback={"Loading..."}>
        
         <directionalLight position={[1, 1, 1]} intensity={2} color="#ff0000" />
         <directionalLight position={[-5, 0, 0]} intensity={1} color="#fff" />
     <OrbitControls enableZoom={true} />
             <Andromeda
             position={zeusPosition}
             scale={zeusScale}                  
             isRotating={isRotating}
             setIsRotating={setIsRotating}         
             />                    
     </Suspense>
     </Canvas>
    </div>
    <div className='w-full md:w-[50%] h-full flex items-start justify-center flex-col p-2'>
         <h1 className='text-xl font-semibold'>Andromeda</h1>
         <p className='text-base'>
         Andromeda was the daughter of King Cepheus and Queen Cassiopeia of Ethiopia. Her story is closely linked with that of Perseus, a famous hero in Greek mythology.
         </p>          
         <p className='text-base mt-2'>
         The tale begins with Andromeda's mother, Cassiopeia, boasting that she or her daughter was more beautiful than the Nereids, sea nymphs. This boast angered Poseidon, the god of the sea, who was protective of the Nereids.
         </p>      
         <p className='text-base mt-2'>
         As punishment, Poseidon sent a sea monster, Cetus, to ravage the coast of Ethiopia, including the kingdom ruled by Cepheus and Cassiopeia.
         </p>
         <p className='mt-2'>
         Desperate to save their land, Cepheus and Cassiopeia consulted the Oracle of Ammon, who told them that the only way to appease Poseidon was to sacrifice Andromeda to Cetus.
         </p>
    </div>
</div>
  )
}

export default AndromedaStatue