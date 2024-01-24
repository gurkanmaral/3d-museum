import React from 'react'
import ColumnStatue from '../Column/ColumnStatue'

const Header = () => {

  const scrollToNextSection = () => {
    // Scroll down by 100vh (1 viewport height)
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='w-full flex-3 h-screen items-center justify-center flex'>
        <div className='flex-1 w-full h-full hidden md:flex '>
          <ColumnStatue />
        </div>
        <div className='flex flex-col gap-10 '>
        <h1 className='text-4xl font-bold'>GREEK MUSEUM</h1>
          <button className='bg-black rounded-md shadow-md shadow-black/50 p-4 text-white'
          onClick={scrollToNextSection}
          >
              Explore 
          </button>
       </div>
        <div className='flex-1 w-full h-full hidden md:flex'>
          <ColumnStatue />
        </div>
    </div>
  )
}

export default Header
