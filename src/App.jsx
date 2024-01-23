import React from 'react'
import Header from './sections/Header/Header'
import ZeusStatue from './sections/Zeus/ZeusStatue'
import ApolloStatue from './sections/Apollo/ApolloStatue'
import AtlasStatue from './sections/Atlas/AtlasStatue'


const App = () => {
  return (
    <div className='w-full min-h-screen flex flex-col' >
       <Header />
       <ZeusStatue />
        <ApolloStatue />
        <AtlasStatue />
    </div>
  )
}

export default App