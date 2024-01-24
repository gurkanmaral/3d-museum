import React, { useRef, useState } from 'react'
import Header from './sections/Header/Header'
import ZeusStatue from './sections/Zeus/ZeusStatue'
import ApolloStatue from './sections/Apollo/ApolloStatue'
import AtlasStatue from './sections/Atlas/AtlasStatue'
import AndromedaStatue from './sections/Andromeda/AndromedaStatue'
import AthenaStatue from './sections/Athena/AthenaStatue'
import DionysosStatue from './sections/Dionysos/DionysosStatue'
import DiscobolusStatue from './sections/Discobolus/DiscobolusStatue'



const App = () => {


  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Header />
      <div className='mt-10' >
        <ZeusStatue  />
      </div>
      <div className='mt-10'>
        <ApolloStatue />
      </div>
      <div className='mt-10'>
        <AtlasStatue />
      </div>
      <div className='mt-10'>
        <AndromedaStatue />
      </div>
      <div className='mt-10'>
        <AthenaStatue />
      </div>
      <div className='mt-10'>
        <DionysosStatue />
      </div>
      <div className='mt-10'>
        <DiscobolusStatue />
      </div>
    </div>
  )
}

export default App