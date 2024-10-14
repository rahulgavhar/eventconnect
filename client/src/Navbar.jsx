import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-purple-950 h-16 flex flex-row justify-between px-10 items-center py-10 fixed w-full z-50'>
      <div>
        <img src="/image.png" className='size-1/4' alt="" />
      </div>
      <div >
        <ul className='flex flex-row gap-6 text-white'>
          <li className='border-none rounded-lg hover:bg-purple-500 p-3 font-bold'>Developers</li>
          <li className='border-none rounded-lg hover:bg-purple-500 p-3 font-bold'>About</li>
          <li className='border-none rounded-lg hover:bg-purple-500 p-3 font-bold'>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
