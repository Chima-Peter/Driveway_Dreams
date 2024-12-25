import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { useState, useEffect } from 'react';

import { FaChevronDown } from 'react-icons/fa6';
import { CgClose, CgProfile } from "react-icons/cg";

import useModalContext from '../../hooks/modal_hook';
import scrollToTop from '../../utils/scroll_to_top';
import LoginModal from './login_modal';




const SideBar = () => {
    const { setNav } = useModalContext()
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    
    const location = useLocation();
    
    
    // whenever user navigates away from current window, close the minor login tab
    useEffect(() => {
        setIsLoginModalOpen(false)
    }, [location.pathname])

    const toggleModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    }

    const closeNavbar = () => {
        setNav(false)
    }
  return (
    <AnimatePresence mode='wait'>
        <motion.section 
            className="bg-white fixed top-0 w-[100vw] z-50 overflow-x-hidden min-h-[100vh] px-4 sm:px-6 lg:px-12 xl:px-14 2xl:px-24 py-8 font-main flex flex-col gap-16"
            >
            <div className='w-[100%] flex justify-between'>
                <Link onClick={scrollToTop} to={'/'} className={`font-extrabold text-2xl xl:text-3xl 2xl:text-4xl`}>
                    Driveway Dreams
                </Link>
                <button onClick={closeNavbar} className='p-3 bg-gray-100 rounded-lg'>
                    <CgClose className='w-6 h-6' />
                </button>
            </div>
            <section className='flex w-[100%] min-lg:w-[70%] 2xl:w-[50%] flex-col gap-24 sm:gap-0 sm:flex-row sm:justify-between sm:items-end'>
                <ul className='text-md font-medium flex flex-col gap-8 h-[100%]'>
                    <NavLink className={`text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold flex items-center hover:border-b-4 hover:border-b-[#172554] h-[100%]`} onClick={scrollToTop} to={'/cars'}>
                        Buy
                    </NavLink>
                    <NavLink className={`text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold flex items-center hover:border-b-4 hover:border-b-[#172554] h-[100%]`} onClick={scrollToTop} to={'/how-it-works'}>
                        How it works
                    </NavLink>
                    <NavLink className={`text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold flex items-center hover:border-b-4 hover:border-b-[#172554] h-[100%]`} onClick={scrollToTop} to={'/reviews'}>
                        Reviews
                    </NavLink>
                    <li>
                        <button className="flex cursor-pointer gap-2 hover:text-blue-600 items-center" onClick={toggleModal}>
                            <CgProfile className="w-6 h-6 xl:w-10 xl:h-10" />                  
                            <p className="font-bold tracking-wide text-[16px] xl:text-[20px] 2xl:text-[22px]">
                                Login
                            </p>
                            <motion.div 
                                animate={{ rotate: isLoginModalOpen ? 180 : 0 }} // Rotate arrow on toggle
                                transition={{ duration: 0.3 }}>
                                <FaChevronDown className="w-3 h-3 xl:w-7 xl:h-7" />
                            </motion.div>
                        </button>
                        {
                            isLoginModalOpen && <LoginModal />
                        }
                    </li>
                </ul>
            </section>
        </motion.section>
    </AnimatePresence>
  )
}

export default SideBar