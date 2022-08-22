import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-2 z-[100] absolute w-full h-12 mt-3'>
      <Link to='/'>
        <h1 className='text-green-600 text-4xl font-bold cursor-pointer ml-6'>TELEFLIX</h1>
      </Link>
        <div className='mr-6'>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-green-600 px-6 py-2 rounded cursor-pointer text-white hover:rounded-lg ease-in duration-200'>Sign Up</button>
          </Link>
        </div>
    </div>
  )
}

export default Navbar