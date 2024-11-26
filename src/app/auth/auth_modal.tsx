import { useState } from "react"
import { GiCancel } from "react-icons/gi";


import SignUp from "../../components/ui/auth/signup"
import Login from "../../components/ui/auth/login"

const AuthModal = () => {
    // toggle between login and sign up components
    const [isSignUp, setIsSignUp] = useState(false)

    const toggleIsSignUp = () => {
        setIsSignUp(!isSignUp)
    }

    
    return (
        <main className="flex flex-col z-50 fixed top-0 backdrop-blur-sm items-center justify-center w-[100%] h-[100vh]">
            <section 
                className={`tablet:w-[450px] tablet:h-[450px] overflow-y-auto scrollbar-hide font-main flex flex-col border border-gray-300 rounded-lg py-10 bg-[rgb(245,247,251)] shadow-2xl`}>
                {
                    isSignUp ? <div className="flex w-[100%] flex-col gap-4 items-center border-b-2 pb-6 border-b-gray-200">
                        <h1 className="text-3xl font-bold text-blue-950">
                            Registration
                        </h1>
                        <p className="text-sm font-semibold text-blue-950">
                            Have an account? <button className="font-extrabold text-sm text-blue-600" onClick={toggleIsSignUp}>Login</button>
                        </p>
                    </div> : <div className="flex w-[100%] flex-col gap-4 items-center border-b-2 pb-6 border-b-gray-200">
                        <h1 className="text-3xl font-bold text-blue-950">
                            Welcome back
                        </h1>
                        <p className="text-sm font-semibold text-blue-950">
                            Don't have an account yet? <button className="font-extrabold text-sm text-blue-600" onClick={toggleIsSignUp}>Register here</button>
                        </p>
                    </div>
                }
                {
                    isSignUp ? <SignUp /> : <Login />
                }
            </section>
        </main>
    )
}

export default AuthModal