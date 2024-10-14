import React from 'react'
import { useState } from 'react';

const SubmitForm = ({setusername,setcode}) => {

    const [currusername, setcurrusername] = useState("");
    const [currcode, setcurrcode] = useState("");

    function Submit(e){
        e.preventDefault();
        setusername(currusername);
        setcode(currcode);
    }

  return (

    <form onSubmit={Submit}>

    <div className=" p-2 ">
      <button className="bg-violet-600 text-white text-center font-bold rounded-lg p-4 w-full">Start Chatting </button>
    </div>

    <div className="p-2  flex flex-col gap-4 ">


      <div className="flex flex-col gap-2">
        <div className="font-bold">Enter Username</div>
        <input className="bg-slate-800 username text-white p-2" placeholder="TYPE..." type="text" onChange={(e) => { setcurrusername(e.target.value) }} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="font-bold">Enter RoomCode to chat</div>
        <input className="bg-slate-800 code text-white p-2" placeholder="TYPE..." type="text" onChange={(e) => {
          setcurrcode(e.target.value)
        }} />
      </div>
    </div>


  </form>

  )
}

export default SubmitForm
