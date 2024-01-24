/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useState } from 'react'
import { Apollo } from '../../models/Apollo'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Atlas } from '../../models/Atlas'
import { Andromeda } from '../../models/Andromeda'
import { Athena } from '../../models/Athena'


const AthenaStatue = () => {
    const orbitControlsRef = useRef();
    const [isRotating, setIsRotating] = useState(true);

const adjustZeusForScreenSize = ()=>{
    let screenScale = null;
    let screenPosition = [-0.14,-1.55,0];
    let zeusRotation = [0.1,4.7,0]
    if(window.innerWidth < 768){
        screenScale = [0.9,0.9,0.9];
    }else{
        screenScale = [1,1,1];
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
         fov: 25,
         near: 0.1,
         far: 1000,
       }}
       className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
     >
         <Suspense fallback={"Loading..."}>
         <directionalLight position={[1, 1, 1]} intensity={5} color="#ff0000" />
         <ambientLight intensity={3} />
 <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={4} />

     <OrbitControls enableZoom={true} />
             <Athena
             position={zeusPosition}
             scale={zeusScale}                  
             isRotating={isRotating}
             setIsRotating={setIsRotating}         
             />                    
     </Suspense>
     </Canvas>
    </div>
    <div className='w-full md:w-[50%] h-full flex items-start justify-center flex-col p-2'>
         <h1 className='text-xl font-semibold'>Athena</h1>
         <p className='text-base'>
         Athena is the goddess of wisdom, courage, inspiration, civilization, law and justice, strategic warfare, mathematics, strength, strategy, the arts, crafts, and skill.
         </p>          
         <p className='text-base mt-2'>
         She is known for her calm temperament and is more inclined to settle conflicts peacefully but is relentless when it comes to defending justice.According to mythology, Athena was born from the head of Zeus, fully grown and clad in armor. She emerged after Zeus experienced an immense headache.
         </p>      
         <p className='text-base mt-2'>
         Her symbols include the owl (representing wisdom) and the olive tree.She is often depicted in armor, ready for battle, symbolizing her role as a protector and warrior.
         </p>
         <p className='mt-2'>
         Athena is also known as a virgin goddess and is referred to as Athena Parthenos.
         </p>
    </div>
</div>
  )
}

export default AthenaStatue