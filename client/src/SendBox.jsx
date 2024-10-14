import React from 'react'
import { useState } from 'react';

const SendBox = ({ setmessage, btnref }) => {

    const [currmessage, setcurrmessage] = useState("")

    function sendMessage() {
        setmessage(currmessage);
    }


    return (
        <div className=" border p-2 absolute bottom-4 w-4/5 flex flex-row gap-3">
            <input ref={btnref} className="w-full bg-slate-900 text-white p-1 " placeholder='Type message' type="text" onChange={(e) => {
                setcurrmessage(e.target.value)
            }} />
            <button className="bg-green-400 text-black py-1 px-3 font-bold rounded" onClick={sendMessage}>Send</button>
        </div>
    )
}

export default SendBox
