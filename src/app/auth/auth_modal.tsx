import { useState } from "react"
import { motion } from 'motion/react'
import { AiOutlineClose } from "react-icons/ai";


import SignUp from "../../components/ui/auth/signup"
import Login from "../../components/ui/auth/login"
import useModalContext from "../../components/hooks/modal_hook";

const AuthModal = () => {
    // toggle between login and sign up components
    const [isSignUp, setIsSignUp] = useState(false)

    const toggleIsSignUp = () => {
        setIsSignUp(!isSignUp)
    }

    // collect the states from context
    const { auth, setAuth } = useModalContext()

    // function to control it
    const toggleModal = () => {
        setAuth(false) // user clicks on close and modal is closed
    }
    
    return (
        <main className={`flex-col z-50 fixed top-0 backdrop-blur-sm items-center justify-center w-[100%] h-[100vh] right-0 ${auth ? 'flex' : 'hidden'}`}>
            <motion.section 
                initial={{ opacity: 0, y: -60 }} animate={{ opacity : auth ? 1 : 0, y : auth ? 0 : -60 }} transition={{ duration: 0.5, ease: 'easeInOut' }}
                className={`min-lg:w-[500px] xl:h-[500px] xl:w-[600px] 2xl:w-[800px] min-lg:h-[450px] overflow-y-auto customScroll font-main flex flex-col border border-gray-300 rounded-lg py-14 bg-[rgb(245,247,251)] shadow-2xl relative`}>
                    <button className="absolute right-4 top-3" onClick={toggleModal}>
                        <AiOutlineClose className="w-6 h-6 xl:w-8 xl:h-8 text-blue-600" />
                    </button>
                {
                    isSignUp ? <div className="flex w-[100%] flex-col gap-4 items-center border-b-2 pb-6 border-b-gray-200">
                        <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-blue-950">
                            Registration
                        </h1>
                        <p className="text-[16px] xl:text-[20px] 2xl:text-[24px] font-semibold text-blue-950">
                            Have an account? <button className="font-extrabold text-[16px] xl:text-[20px] 2xl:text-[24px] text-blue-600" onClick={toggleIsSignUp}>Login</button>
                        </p>
                    </div> : <div className="flex w-[100%] flex-col gap-4 items-center border-b-2 pb-6 border-b-gray-200">
                        <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-blue-950">
                            Welcome back
                        </h1>
                        <p className="text-[16px] xl:text-[20px] 2xl:text-[24px] font-semibold text-blue-950">
                            Don't have an account yet? <button className="font-extrabold text-[16px] xl:text-[20px] 2xl:text-[24px] text-blue-600" onClick={toggleIsSignUp}>Register here</button>
                        </p>
                    </div>
                }
                {
                    isSignUp ? <SignUp /> : <Login />
                }
            </motion.section>
        </main>
    )
}

export default AuthModal