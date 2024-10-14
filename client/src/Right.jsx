import React from 'react'

const Right = ({message,sender}) => {
    return (
      <div className='flex flex-col items-end justify-end my-2'>
      <div>{sender}</div>
      <div className='max-w-[60%] w-fit border bg-purple-700 text-white p-2 rounded-lg'>
        {message}
      </div>
      </div>
    )
}

export default Right
