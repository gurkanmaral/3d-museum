import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-screen items-center justify-center flex'>
       <div className='flex flex-col gap-10'>
       <h1 className='text-4xl font-bold'>GREEK MUSEUM</h1>
        <button className='bg-black rounded-md shadow-md shadow-black/50 p-4 text-white'>
            Explore 
        </button>
       </div>
    </div>
  )
}

export default Header