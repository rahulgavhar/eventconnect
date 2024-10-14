import React, { useRef } from 'react'
import Navbar from './Navbar'
import Login from './Login'
import Signup from './Signup'
import { useState } from 'react'
import Footer from './Footer'

const Authentication = () => {

  const [flag, setflag] = useState(true)
  const loginref = useRef();
  const signupref = useRef();




  return (
    <>
      <Navbar />

      <div className='text-black pt-28 flex flex-row gap-5 justify-center  '>
        <div className='flex flex-row gap-5 justify-center border px-6 py-2 rounded bg-purple-300' >
          <button ref={loginref} className='border bg-violet-700 text-white py-1 text-lg rounded-xl px-3 '

            onClick={(e) => {
              setflag(true);
              e.target.classList.add('bg-violet-700', 'text-white')
              signupref.current.classList.remove('bg-violet-700', 'text-white')
              signupref.current.classList.add("text-black")
            }}>Login</button>

          <button ref={signupref} className='border  text-black py-1 text-lg rounded-xl px-3 '
            onClick={(e) => {
              setflag(false);

              e.target.classList.add('bg-violet-700', 'text-white')
              loginref.current.classList.remove('bg-violet-700', 'text-white')
              loginref.current.classList.add("text-black")

            }}>Signup</button>
        </div>
      </div>

      <div className='mb-10'>


      <div className='flex flex-row justify-center mt-10'>
        {flag ? <Login  /> : <Signup />}
      </div>

      </div>
      <Footer />
    </>
  )
}

export default Authentication