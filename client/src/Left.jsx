import React from 'react'

const Left = ({message,sender}) => {
  return (
    <div className='flex flex-col justify-start my-2'>
    <div>{sender}</div>
    <div className='max-w-[60%] w-fit border bg-purple-700 text-white p-2 rounded-lg'>
      {message}
    </div>
    </div>
  )
}

export default Left
