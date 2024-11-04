import { useState } from "react"
import SignUp from "../components/ui/auth/signup"
import Login from "../components/ui/auth/login"

const AuthPage = () => {
    // toggle between login and sign up components
    const [isSignUp, setIsSignUp] = useState(true)

    const toggleIsSignUp = () => {
        setIsSignUp(!isSignUp)
    }

    
  return (
    <main className="flex items-center justify-center pt-[50px] bg-gradient-to-tl from-[#157D91] via-[#14718C] to-[#17B3A6] min-h-[100vh] w-[100%]">
        <section className="w-[450px] flex flex-col border gap-10 border-white shadow-md bg-white rounded-lg p-6">
            <div className="w-[100%] flex">
                <button className={`text-sm rounded-l-md w-[50%] py-2 text-white font-medium ${isSignUp ? 'bg-black': 'bg-gray-400'}`} onClick={toggleIsSignUp}>
                    Sign up
                </button>
                <button className={`text-sm rounded-r-md w-[50%] py-2 text-white font-medium ${!isSignUp ? 'bg-black': 'bg-gray-400'}`} onClick={toggleIsSignUp}>
                    Log in
                </button>
            </div>
            {
                isSignUp ? <SignUp /> : <Login />
            }
        </section>
    </main>
  )
}

export default AuthPage