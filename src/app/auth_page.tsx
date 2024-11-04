import { useState } from "react"
import SignUp from "../components/ui/auth/signup"
import Login from "../components/ui/auth/login"

const Auth = () => {
    // toggle between login and sign up components
    const [isSignUp, setIsSignUp] = useState(true)

    const toggleIsSignUp = () => {
        setIsSignUp(!isSignUp)
    }
  return (
    <main>
        <section className="w-[400px] flex flex-col gap-6">
            <div className="w-[100%] flex">
                <button className="text-sm bg-black text-white font-medium" onClick={toggleIsSignUp}>
                    Sign up
                </button>
                <button className="text-sm bg-gray-400 text-white font-medium" onClick={toggleIsSignUp}>
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

export default Auth