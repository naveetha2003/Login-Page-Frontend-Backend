import { useNavigate } from "react-router-dom"

function Failed() {

  const navigate = useNavigate()

  function goHome() {
    navigate("/")
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-red-400 to-pink-600">

      <div className="bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center">

        
        <h1 className="text-3xl font-bold text-white mt-3"> Login Failed</h1>

        
        <p className="text-white mt-2"> Invalid username or password </p>

        
        <button onClick={goHome}
          className="mt-5 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100" > Try Again</button>

      </div>

    </div>
  )
}

export default Failed