/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useState } from 'react'
import { Apollo } from '../../models/Apollo'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Atlas } from '../../models/Atlas'
import { Andromeda } from '../../models/Andromeda'
import { Dionysos } from '../../models/Dionysos'
import { Discobolus } from '../../models/Discobolus'


const DiscobolusStatue = () => {
    const orbitControlsRef = useRef();
    const [isRotating, setIsRotating] = useState(true);

const adjustZeusForScreenSize = ()=>{
    let screenScale = null;
    let screenPosition = [-0.24,-2.55,-1];
    let zeusRotation = [0.1,4.7,0]
    if(window.innerWidth < 768){
        screenScale = [0.9,0.9,0.9];
    }else{
        screenScale = [0.003,0.003,0.003];
    }
    return [screenScale,screenPosition,zeusRotation]
  }
  const [zeusScale,zeusPosition,zeusRotation] = adjustZeusForScreenSize();



  return (
    <div className='w-full  h-screen flex flex-col md:flex-row'>
    <div className='w-full md:w-[50%]'>
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
         
         <directionalLight position={[1, 1, 1]} intensity={3} color="#ff0000" />
         <directionalLight position={[-5, 0, 0]} intensity={3} color="#fff" />

     <OrbitControls enableZoom={true} />
             <Discobolus
             position={zeusPosition}
             scale={zeusScale}                  
             isRotating={isRotating}
             setIsRotating={setIsRotating}         
             />                    
     </Suspense>
     </Canvas>
    </div>
    <div className='w-full md:w-[50%] h-full flex items-start justify-center flex-col p-2'>
         <h1 className='text-xl font-semibold'>Discobolus - The Discus Thrower</h1>
         <p className='text-base'>
         The original sculpture was created by the Greek sculptor Myron around 450 BC. It is a prime example of the classical Greek sculptural design which sought to depict the human body in a dynamic yet balanced pose.
         </p>          
         <p className='text-base mt-2'>
         The sculpture depicts a youthful athlete in the act of throwing a discus. The pose is a study in the dynamic expression of movement balanced with symmetry.
         </p>      
         <p className='text-base mt-2'>
         It captures a moment of action in perfect stillness – a characteristic feature of Myron's work, showcasing his ability to encapsulate movement realistically.
         </p>
         <p className='mt-2'>
         The attention to detail in muscular definition and the portrayal of the human anatomy is meticulous, reflecting the Greek ideal of physical perfection.
         </p>
    </div>
</div>
  )
}

export default DiscobolusStatue