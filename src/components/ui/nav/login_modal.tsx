import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const LoginModal = () => {
  return (
    <div className="w-[300px] rounded-md p-6 bg-white font-main flex flex-col gap-3 absolute top-8 left-[-120px]">
        <ul className="flex flex-col gap-3 py-4 border-b border-b-gray-500">
            <Link to={'/favorite-cars'} className="flex gap-4 px-4 py-2 group/item: hover:bg-blue-50 hover:font-semibold items-center">
                <FaRegHeart className="w-5 h-5 text-black" />
                <p className="text-black text-[14px] group-hover/item:font-extrabold">
                    Favorite cars
                </p>
            </Link>
            <Link to={'/orders'} className="flex group/item gap-4 px-4 py-2 hover:bg-blue-50 hover:font-semibold items-center">
                <IoCartOutline className="w-5 h-5 text-black" />
                <p className="text-black text-[14px] group-hover/item:font-bold">
                    Orders in progress
                </p>
            </Link>
        </ul>
        <div className="pt-6 flex flex-col gap-4">
            <button className="w-[100%] py-2 font-main text-white bg-gradient-to-r from-blue-500 to-blue-800 rounded-sm outline-none text-center font-semibold text-[16px] shadow-sm items-center flex gap-2 justify-center shadow-blue-900">
                <CgProfile className="w-5 h-5" />   
                <p>
                    Login
                </p>
            </button>
            <p className="text-[14px] text-blue-900 text-center tracking-wide">
                Don't have an account? <button className="outline-none underline font-semibold text-blue-700">Register</button>
            </p>
        </div>
    </div>
  )
}

export default LoginModal