/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useState } from 'react'
import { Apollo } from '../../models/Apollo'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Atlas } from '../../models/Atlas'
import { Andromeda } from '../../models/Andromeda'
import { Dionysos } from '../../models/Dionysos'


const DionysosStatue = () => {
    const orbitControlsRef = useRef();
    const [isRotating, setIsRotating] = useState(true);

const adjustZeusForScreenSize = ()=>{
    let screenScale = null;
    let screenPosition = [0.24,1.75,0];
    let zeusRotation = [0.1,4.7,0]
    if(window.innerWidth < 768){
        screenScale = [1,1,1];
    }else{
        screenScale = [1,1,1];
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
         <directionalLight position={[1, 1, 1]} intensity={5} color="#ff0000" />
         <ambientLight intensity={3} />
 <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={4} />

     <OrbitControls enableZoom={true} />
             <Dionysos
             position={zeusPosition}
             scale={zeusScale}                  
             isRotating={isRotating}
             setIsRotating={setIsRotating}         
             />                    
     </Suspense>
     </Canvas>
    </div>
    <div className='w-full md:w-[50%] h-full flex items-start justify-center flex-col p-2'>
         <h1 className='text-xl font-semibold'>Torso of Dionysos</h1>
         <p className='text-base'>
         Dionysos is the son of Zeus, the king of the gods, and Semele, a mortal woman. His birth is unique because he was born from Zeus's thigh after his mother died, making him the only god with a mortal parent.
         </p>          
         <p className='text-base mt-2'>
         As a result of his dual heritage, Dionysos is often depicted as an outsider, bridging the gap between the divine and the mortal.
         </p>      
         <p className='text-base mt-2'>
         Dionysos is best known as the god of wine, and his festivals were characterized by their ecstatic and uninhibited nature.
         </p>
         <p className='mt-2'>
         He is also recognized as a patron of the theater and performing arts. The festivals held in his honor, known as the Dionysia, were a breeding ground for Greek theater.
         </p>
    </div>
</div>
  )
}

export default DionysosStatue