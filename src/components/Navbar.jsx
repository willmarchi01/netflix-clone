import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-2 z-[100] absolute w-full h-12 mt-3'>
        <h1 className='text-green-600 text-4xl font-bold cursor-pointer ml-6'>TELEFLIX</h1>
        <div className='mr-6'>
            <button className='text-white pr-4'>Sign In</button>
            <button className='bg-green-600 px-6 py-2 rounded cursor-pointer text-white hover:rounded-lg ease-in duration-200'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar