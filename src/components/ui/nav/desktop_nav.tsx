import { FaRegHeart, FaChevronDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import scrollToTop from '../../utils/scroll_to_top';
import LoginModal from "./login_modal";
import { FaChevronUp } from "react-icons/fa6";

function DesktopNav() {
   const [isScrolled, setIsScrolled] = useState(false)
   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

   // onscroll event
   useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleModal = () => {
   setIsLoginModalOpen(!isLoginModalOpen);
  }

  
  return (
   <nav className={`flex font-main justify-between text-white bg-blue-900 items-center w-full fixed h-[80px] z-10 border-b border-b-blue-900 px-4 md:px-8 tablet:px-12 ${isScrolled ? ' shadow-lg' : ''}`}>
      <div className='flex gap-14 h-[100%] items-center'>
         <Link onClick={scrollToTop} to={'/'} className={`font-extrabold text-2xl`}>
            MACELO AUTO<small className='text-xs'>s</small>
         </Link>
            <ul className='text-md font-medium flex gap-8 items-center h-[100%]'>
               <NavLink className={`text-[14px] font-semibold flex items-center hover:border-b-4 hover:border-b-white h-[100%]`} onClick={scrollToTop} to={'/buy'}>
                  Buy
               </NavLink>
               <NavLink className={`text-[14px] font-semibold flex items-center hover:border-b-4 hover:border-b-white h-[100%]`} onClick={scrollToTop} to={'/how-it-works'}>
                  How it works
               </NavLink>
               <NavLink className={`text-[14px] font-semibold flex items-center hover:border-b-4 hover:border-b-white h-[100%]`} onClick={scrollToTop} to={'/reviews'}>
                  Reviews
               </NavLink>
            </ul>
         </div>
         <ul className='flex gap-12 relative'>
            <li>
               <FaRegHeart className="cursor-pointer w-5 h-5" />
            </li>
            <li>
               <button className="flex cursor-pointer gap-2 hover:text-blue-200 items-center" onClick={toggleModal}>
                  <CgProfile className="w-6 h-6" />                  
                  <p className="font-bold tracking-wide text-sm">
                     Login
                  </p>
                  { !isLoginModalOpen && <FaChevronDown className="w-3 h-3" /> }
                  { isLoginModalOpen && <FaChevronUp className="w-3 h-3" /> }
               </button>
               {
                  isLoginModalOpen && <LoginModal />
               }
            </li>
         </ul>
   </nav>
  )
}

export default DesktopNav