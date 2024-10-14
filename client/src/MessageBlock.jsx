import React, { useEffect, useRef } from 'react'
import Left from './Left'
import Right from './Right'
import { memo } from 'react'

const MessageBlock = ({ messagedata }) => {
    var display=[];
    const chatref = useRef();

    useEffect(()=>{

        chatref.current?.scrollIntoView({ behavior: 'smooth' });

    },[messagedata])

    if (messagedata.length !== 0) {

         display = messagedata.map((e, i) => {
            console.log(e);
            
            if ("s" in e) {
                return <Right key={i * 2.5} message={e.s} sender={"You"} />
            }
            if ("r" in e) {
                return <Left key={i * 4.5} message={e.r} sender={e.by} />
            }
        })

    }


    return (
        <div ref={chatref} className="overflow-y-auto max-h-[80%]">
            {display}
        </div>
    )
}

export default memo(MessageBlock)
