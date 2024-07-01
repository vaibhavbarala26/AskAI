import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IsFile from './Compnent/IsFile'
import Sidebar from './Sidebar/Sidebar'
import img from "./assets/send.png"
import up from "./assets/image-.png"
import { useEffect } from 'react'
import Chats from './Compnent/Chats'
function App() {
  const [prompt , setPrompt] = useState("")
  const [isloading , setisLoading] = useState(true)
  const [file , setFile] = useState("")
  const [immage , setImage] = useState("")
  const [result , setResult] = useState("")
  const[aftermath , setAftermath] = useState("")
  const [chats , setChats] = useState("")
      const handletext = async(e)=>{
        console.log(file);
        setAftermath(prompt)
if(file){
  setisLoading(true)
  const data = new FormData()
  data.set("file" , immage)
  data.set("prompt" , prompt)
  const response = await fetch("http://localhost:1042/image" , {
    method:"POST",
    body:data,
  })
  .then((res)=>res.json())
  .then((res)=>{setResult(res)
    console.log(res);
  })
  .then(()=>{
    setisLoading(false)
    setFile("")
    
  })
  
}
else{
        console.log("kjnkjnj");
          setisLoading(true)
          const response = fetch("http://localhost:1042/chat" , {
              method:"POST", 
              body:JSON.stringify({prompt}),
              headers:{"Content-Type" : "application/json"},
          })
          .then((res)=>res.json())
          .then((res)=>{setResult(res) 
            console.log(res);
              setisLoading(false)
              console.log(isloading);
          })
      }
    }
    useEffect(()=>{
      const ch = async()=>{
      const resp = await fetch("http://localhost:1042/chat" , {
        method:"GET"
      })
      .then((res)=>res.json())
      .then((res)=>setChats(res))
    }
    ch();
    
    },[])
    
  return (
    <>
    <div className="mainss">
    
    <div className="gemini">
      <h1>gemini</h1>
    </div>
    <div className="content">
      <div className="header">
      </div>
      <div className="hero">
      {prompt || file ? (<>{isloading ? (<><div className="ff"><div className="prompt">{file?(<><img src={file} alt="" /></>):(<></>)}<span>{prompt}</span></div><IsFile></IsFile></div></>):(<><div className="inter">{result  ? (<><div className='sexy'><span id='user'>{prompt}</span><div className="ass">{result.assistant}</div></div></>):(<></>)}</div></>)}</>):(<><div className="inter">{result  ? (<><Chats data={chats}/></>):(<><Chats data={chats}/></>)}</div></>)}
      </div>
    </div>
    </div>
    <div className="footer">
        <form action="" className='form'>
          <input type="text" placeholder='write the prompt' value={prompt} onChange={(e)=>(setPrompt(e.target.value))} />
          <input type="file" style={{display:"none"} } id='file' name='file'onChange={(e)=>{setImage(e.target.files[0]) 
            setFile(URL.createObjectURL(e.target.files[0]))
          }}></input>
          <label htmlFor="file" >
            <img src={up} alt="" style={{height:"6vh"}} />
          </label>
          <img src={img} alt="" style={{height:"6vh"}} onClick={handletext} />
        </form>
      </div>
    </>
  )
}

export default App
