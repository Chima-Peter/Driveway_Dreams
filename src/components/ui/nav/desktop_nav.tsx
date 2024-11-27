import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { motion } from 'motion/react'

import { FaRegHeart, FaChevronDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


import scrollToTop from '../../utils/scroll_to_top';
import LoginModal from "./login_modal";


function DesktopNav() {
   const [isScrolled, setIsScrolled] = useState(false)
   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

   const location = useLocation();

   // onscroll event
   useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // whenever user navigates away from current window, close the minor login tab
  useEffect(() => {
   setIsLoginModalOpen(false)
  }, [location.pathname])

  const toggleModal = () => {
   setIsLoginModalOpen(!isLoginModalOpen);
  }

  
  return (
   <nav className={`flex font-main justify-between text-blue-950 bg-white items-center w-full fixed h-[80px] border-b border-b-gray-300 px-4 z-30 md:px-8 tablet:px-12 ${isScrolled ? ' shadow-lg' : ''}`}>
      <div className='flex gap-14 h-[100%] items-center'>
         <Link onClick={scrollToTop} to={'/'} className={`font-extrabold text-2xl`}>
            Driveway Dreams
         </Link>
            <ul className='text-md font-medium flex gap-8 items-center h-[100%]'>
               <NavLink className={`text-[14px] font-semibold flex items-center hover:border-b-4 hover:border-b-[#172554] h-[100%]`} onClick={scrollToTop} to={'/cars'}>
                  Buy
               </NavLink>
               <NavLink className={`text-[14px] font-semibold flex items-center hover:border-b-4 hover:border-b-[#172554] h-[100%]`} onClick={scrollToTop} to={'/how-it-works'}>
                  How it works
               </NavLink>
               <NavLink className={`text-[14px] font-semibold flex items-center hover:border-b-4 hover:border-b-[#172554] h-[100%]`} onClick={scrollToTop} to={'/reviews'}>
                  Reviews
               </NavLink>
            </ul>
         </div>
         <ul className='flex gap-12 relative'>
            <li>
               <FaRegHeart className="cursor-pointer w-5 h-5" />
            </li>
            <li>
               <button className="flex cursor-pointer gap-2 hover:text-blue-600 items-center" onClick={toggleModal}>
                  <CgProfile className="w-6 h-6" />                  
                  <p className="font-bold tracking-wide text-sm">
                     Login
                  </p>
                  <motion.div 
                     animate={{ rotate: isLoginModalOpen ? 180 : 0 }} // Rotate arrow on toggle
                     transition={{ duration: 0.3 }}>
                     <FaChevronDown className="w-3 h-3" />
                  </motion.div>
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