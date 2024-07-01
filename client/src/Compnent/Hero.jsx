import React, { useEffect, useState } from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6";
import img from "../assets/image-.png"
import send from "../assets/send.png"
const Hero = () => {
    
    
  return (
    <div>
        <div className="maini">
        <div className="between">
            <h1>AskiAI</h1>
        </div>
        <div className="khai">
        <div className="mainbetween">
            <span id='helo'>
                Hello, Dev.
            </span>
            <span id='help'>How can I help you today</span>
        </div>

        </div>
        <div className="inputs">
            <form action="" className='sex'>
                <input type="text" placeholder='write the prompt'  value={prompt} onChange={(e)=>setPrompt(e.target.value)}/>
                <input type="file" name="file" id="file" class="inputfile" style={{display:"none"}} />
                <label htmlFor="file"><img src={img} alt="" /></label>
                <img src={send} alt=""  />
            </form>
        </div>
        </div>

    </div>
  )
}

export default Hero
