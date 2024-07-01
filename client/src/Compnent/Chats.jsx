import React from 'react'
import { useState } from 'react';

const Chats = ({ data }) => {
  const [image , setImage] = useState("")
  console.log(data);

  return (
    <div>
      <div className="chats">
        {data.length && data.map((chat)=>(
          <>
          {data.image ? setImage(chat.image):(<></>)}
          <div className="user">
            {chat.image ? <div><img src={image.path} alt="" /> {chat.user}</div> : <div></div> }
        </div>
        <div className="assistant">
          <p>{chat.assistant}</p>
        </div>
        </>
        ))}
        
      </div>
    </div>
  )
}

export default Chats
