import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdHelp } from "react-icons/io";
import { IoMdTimer } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
const Sidebar = () => {
    const [extend, setExtend] = useState(false)

    return (
        <div className='Side'>

            <div className="duug">
            <div onClick={(() => setExtend(!extend))} className={extend ? "menuicon" : "icon"}>
                <CiMenuBurger />
            </div>
            {extend ? (<div className="sidebar">
                <div className="upper">

                    <div className="newchat">
                        <div className="help">
                            <span><FaPlus></FaPlus>
                                New Chat</span>
                        </div>

                        <div className="recent">
                            <p>Recent</p>
                            <div className="chat">
                                <FaRegMessage />
                                what is react...
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : null}
            </div>
           
        </div>
    )
}

export default Sidebar
