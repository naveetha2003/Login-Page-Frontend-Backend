import { useNavigate } from "react-router-dom"

function Success() {

  const navigate = useNavigate()

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-600">

      <div className="bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center">

        
        

       
        <h1 className="text-3xl font-bold text-white mt-3">
          Login Successful
        </h1>

        
        <p className="text-white mt-2">
          Welcome back 
        </p>

        
        <button
          onClick={() => navigate("/")}
          className="mt-5 bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
        >
          Back to Login
        </button>

      </div>

    </div>
  )
}

export default Success