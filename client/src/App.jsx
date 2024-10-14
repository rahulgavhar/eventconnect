
import { useRef, useState, useEffect } from "react"

import io from 'socket.io-client'
import MessageBlock from "./MessageBlock"
import SendBox from "./SendBox";
import SubmitForm from "./SubmitForm";

const socket = io("http://localhost:4000")

function App() {

  const btnref = useRef();
  const [username, setusername] = useState("");
  const [code, setcode] = useState("");
  const [message, setmessage] = useState("")
  const [messageArray, setMessageArray] = useState([]);
  const [currRomeCode, setcurrRomeCode] = useState("No room joined");



  useEffect(() => {

    if (code !== "" && username !== "") {
      socket.emit("join-room", code)
      setMessageArray([]);
      setmessage("");
      setcurrRomeCode(code)
    }

  }, [code, username])


  useEffect(() => {

    if (message !== "") {

      const info = {
        username: username,
        code: code,
        message: message
      }
      setMessageArray((prev) => [...prev, { s: message }]);
      socket.emit('send-message', info);
      setmessage("");
      btnref.current.value = "";

    }

  }, [message])




  useEffect(() => {

    async function handleReply(data) {

      setMessageArray((prev) => [...prev, { r: data.message,by:data.username }]);

    }

    socket.on('reply', handleReply)
  }, [socket])



  return (
    <>
      <div className="flex flex-row w-full justify-between h-[95vh] overflow-y-hidden">
        <div className="mychatts border h-full w-[30%] p-2">
          <SubmitForm setusername={setusername} setcode={setcode} />
        </div>
        <div className="sendmeassage  w-[70%]  border h-full p-4 relative ">
          <div className="w-full border p-2 my-2">Talking to :{currRomeCode}</div>
          <MessageBlock messagedata={messageArray} />
          <SendBox setmessage={setmessage} btnref={btnref} />

        </div>
      </div >

    </>
  )

}
export default App
