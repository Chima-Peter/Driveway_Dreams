import { useState } from "react"
import SignUp from "../../components/ui/auth/signup"
import Login from "../../components/ui/auth/login"

const AuthPage = () => {
    // toggle between login and sign up components
    const [isSignUp, setIsSignUp] = useState(false)

    const toggleIsSignUp = () => {
        setIsSignUp(!isSignUp)
    }

    
  return (
    <main className="flex items-center justify-center pt-[50px] bg-gradient-to-tl from-[#157D91] via-[#14718C] to-[#17B3A6] min-h-[100vh] w-[100%]">
        <section className={`tablet:w-[450px] font-main flex flex-col border border-white shadow-md rounded-lg py-10 bg-[rgb(245,247,251)]`}>
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

export default AuthPage