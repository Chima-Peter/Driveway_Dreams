import { Link } from "react-router-dom";
import { motion } from 'motion/react'

import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import AuthModal from "../../../app/auth/auth_modal";
import useModalContext from "../../hooks/modal_hook";



const LoginModal = () => {
    // collect the state and set state from the context
    const { auth, setAuth } = useModalContext()

    const openAuth = () => {
        setAuth(true) // user clicks on login button and modal is opened
    }

  return (
    <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity : 1 }} transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="sm:w-[300px] xl:w-[400px] 2xl:w-[500px] rounded-md p-6 bg-white font-main flex flex-col gap-3 mt-2 min-[1001px]:mt-0 min-[1001px]:absolute top-0 right-0 min-[1001px]:top-8 min-[1001px]:left-[-120px] xl:-left-[170px] xl:top-12 2xl:left-[-220px] shadow-lg border border-gray-100">
        <ul className="flex flex-col gap-3 py-4 border-b border-b-gray-500">
            <Link to={'/favorite-cars'} className="flex gap-4 px-4 py-2 group/item: hover:bg-blue-50 hover:font-semibold items-center">
                <FaRegHeart className="w-5 h-5 xl:w-8 xl:h-8 text-black" />
                <p className="text-black text-[16px] xl:text-[20px] 2xl:text-[24px] group-hover/item:font-extrabold">
                    Favorite cars
                </p>
            </Link>
            <Link to={'/orders'} className="flex group/item gap-4 px-4 py-2 hover:bg-blue-50 hover:font-semibold items-center">
                <IoCartOutline className="w-5 h-5 xl:w-8 xl:h-8 text-black" />
                <p className="text-black text-[16px] xl:text-[20px] 2xl:text-[24px] group-hover/item:font-bold">
                    Orders in progress
                </p>
            </Link>
        </ul>
        <div className="pt-6 flex flex-col gap-4">
            <button 
                className="w-[100%] py-2 font-main text-white bg-gradient-to-r from-blue-500 to-blue-800 rounded-sm outline-none text-center font-semibold  text-[16px] xl:text-[20px] 2xl:text-[24px] shadow-sm items-center flex gap-2 justify-center shadow-blue-900"
                onClick={openAuth}>
                <CgProfile className="w-5 h-5 xl:w-8 xl:h-8" />   
                <p>
                    Login
                </p>
            </button>
            <p className=" text-[14px] xl:text-[18px] 2xl:text-[22px] text-blue-900 text-center tracking-wide">
                Don't have an account? <button onClick={openAuth}  className="outline-none underline font-semibold text-blue-700">Register</button>
            </p>
        </div>
        {
            auth &&  <AuthModal />
        }
    </motion.div>
  )
}

export default LoginModal
