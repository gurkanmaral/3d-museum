/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useState } from 'react'
import { Apollo } from '../../models/Apollo'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const ApolloStatue = () => {
    const orbitControlsRef = useRef();
    const [isRotating, setIsRotating] = useState(true);

const adjustZeusForScreenSize = ()=>{
    let screenScale = null;
    let screenPosition = [0,-0.5,0];
    let zeusRotation = [0.1,4.7,0]
    if(window.innerWidth < 768){
        screenScale = [0.2, 0.2, 0.2];
    }else{
        screenScale = [0.35,0.35,0.35];
    }
    return [screenScale,screenPosition,zeusRotation]
  }
  const [zeusScale,zeusPosition,zeusRotation] = adjustZeusForScreenSize();



  return (
    <div className='w-full  h-screen  flex flex-col md:flex-row'>
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
         <directionalLight position={[1, 1, 5]} intensity={3} color="#fff" />
         <ambientLight intensity={3} />
 <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

     <OrbitControls enableZoom={true} />
             <Apollo
             position={zeusPosition}
             scale={zeusScale}                  
             isRotating={isRotating}
             setIsRotating={setIsRotating}         
             />                    
     </Suspense>
     </Canvas>
    </div>
    <div className='w-full md:w-[50%] h-full flex items-start justify-center flex-col p-2'>
         <h1 className='text-xl font-semibold'>Apollo and Daphne</h1>
         <p className='text-base'>
         Characters:
         </p>
            <ul>
                <li>
                <span className='text-base font-semibold'>Apollo:</span> The god of the sun, music, and poetry.
                </li>
                <li>
                <span className='text-base font-semibold'>Daphne:</span> A nymph, daughter of the river god Peneus.
                </li>
            </ul>
         <p className='text-base mt-4'>
         The story begins after Apollo, proud of his recent victory over the Python, sees Cupid and mockingly tells him that archery is a more suitable task for a warrior like Apollo than for a love god like Cupid. In retaliation, Cupid shoots Apollo with a golden arrow (inciting love) and Daphne with a leaden arrow (inciting aversion).
         </p>      
         <p className='text-base mt-2'>
         Apollo pursues Daphne relentlessly, driven by desire. Daphne flees, determined not to be caught. As Apollo gains on her, Daphne calls to her father, the river god Peneus, for help.
         </p>
         <p className='mt-2'>
         In response to her pleas, Peneus transforms Daphne into a laurel tree. Apollo, heartbroken by the transformation, vows to honor Daphne forever. He takes some of her laurel leaves to create a laurel wreath, which becomes a symbol of victory and honor.
         </p>
    </div>
</div>
  )
}

export default ApolloStatue