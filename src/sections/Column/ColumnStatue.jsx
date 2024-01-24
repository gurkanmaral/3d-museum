/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react'
import { Column } from '../../models/Column'
import { Canvas } from '@react-three/fiber'

const ColumnStatue = () => {

    
const adjustZeusForScreenSize = ()=>{
    let screenScale = null;
    let screenPosition = [0.24,-2.75,0];
    let zeusRotation = [0.1,4.7,0]
    if(window.innerWidth < 768){
        screenScale = [0.2,0.2,0.2];
    }else{
        screenScale = [0.25,0.25,0.25];
    }
    return [screenScale,screenPosition,zeusRotation]
  }
  const [zeusScale,zeusPosition,zeusRotation] = adjustZeusForScreenSize();


  return (
    <div className='w-full h-screen flex flex-row'>
    <Canvas
     camera={{
         position: [0, 0, 5],
         fov: 100,
         near: 0.1,
         far: 1000,
       }}
       className={`w-full h-screen bg-transparent`}
     >
         <Suspense fallback={"Loading..."}>
         <directionalLight position={[1, 1, 1]} intensity={1} color="#ff0000" />
         <ambientLight intensity={1} />
 <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
  
             <Column
             position={zeusPosition}
             scale={zeusScale}                  
       
             />                    
     </Suspense>
     </Canvas>
</div>
  )
}

export default ColumnStatue