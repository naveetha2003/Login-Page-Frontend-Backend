import { useState } from 'react'

import './App.css'
import avatar from './assets/avatar.png'
import padlock from './assets/padlock.png'
import people from './assets/people.png'
import { useNavigate } from "react-router-dom"


function App() {


  const [user,setuser] = useState("")
  const [pass,setpass] = useState("")

  const navigate = useNavigate()

  function handleuser(evt)
  {
      setuser(evt.target.value)
  }

  function handlepass(evt)
    {
      setpass(evt.target.value)
    }

    
  

     function handleLogin(evt) {

    fetch("https://login-page-frontend-backend.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: user,
        password: pass
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          navigate("/success")
        } else {
          navigate("/failed")
        }
      })
     }
    

  return(

     <div className='bg-gradient-to-br from-purple-500 via-pink-400 to-indigo-500 h-screen w-screen flex items-center justify-center'>

      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 w-80 ">
      <div >

        <h1 className='text-3xl font-semibold text-center'>Members Login</h1>

       <div className="flex justify-center mt-3">
        <img  src={people} alt="people" className='w-14 h-14' />
       </div>

        <div className='flex items-center border border-gray-400 w-[250px] h-[45px] mt-5'>
          <img src={avatar} alt="avatar" className='w-[45px] h-full p-2 border-r border-gray-700' />
          <input onChange={handleuser} placeholder="Username" className="border border-gray-300 w-full h-full px-3 outline-none border-none"></input>
          </div>

          <div className='flex items-center border border-gray-400 w-[250px] h-[45px]'>
          <img  src={padlock} alt="padlock" className='w-[45px] h-full p-2 border-r border-gray-700'/>
          <input onChange={handlepass} placeholder="Password" className="border border-gray-300 w-full h-full px-3 outline-none border-none"></input>
          </div>

          <label className='block mt-3'>
            <input type="checkbox" className='mr-2' />
            Remember Me
          </label> <br />

          <button onClick={handleLogin} className=' w-full border border-black bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg hover:bg-blue-600'>Login</button>

      </div>
       </div>
     </div>
    
  )
}


export default App