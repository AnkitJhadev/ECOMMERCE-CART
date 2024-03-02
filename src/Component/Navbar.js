import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center text-white py-2 px-3 '>
    
    <h1 className='text-red-500 text-3xl font-bold tracking-wide'>ECOMMERCE.</h1>
    <ul className='flex '>
        <li className='mx-7 cursor-pointer'>Home</li>
        <li className='mx-7 cursor-pointer'>About</li>
        <li className='mx-7 cursor-pointer'>Contact</li>
        <li className='mx-7 cursor-pointer'>Resource</li>

    </ul>
     
    </div>
  )
}

export default Navbar