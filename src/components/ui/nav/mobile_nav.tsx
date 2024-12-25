import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TiThMenu } from "react-icons/ti";

import useModalContext from '../../hooks/modal_hook';

import SideBar from './sidebar';
import scrollToTop from '../../utils/scroll_to_top';




const MobileNav = () => {
    const { nav, setNav } = useModalContext()

    const openNavbar = () => {
        setNav(true)
    }

    const location = useLocation()


   useEffect(() => {
      setNav(false);
   }, [location])

    const [isScrolled, setIsScrolled] = useState(false)

    // add bg and shadow for nav onscroll event
   useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
        <nav className={`flex font-main justify-between text-blue-950 bg-white items-center w-[100%] fixed h-fit border-b border-b-gray-300 z-30 px-4 sm:px-8 min-lg:px-10 xl:px-14 py-4 2xl:px-20 ${isScrolled ? ' shadow-lg' : ''}`}>
            <Link onClick={scrollToTop} to={'/'} className={`font-extrabold text-2xl xl:text-3xl 2xl:text-4xl`}>
               Driveway Dreams
            </Link>
            <div className='flex items-center gap-2 xs:gap-4 justify-between'>
                {/* <button type="button" className='p-3 xs:p-4 bg-gray-100 hover:bg-black group/btn rounded-xl'>
                    <RiShoppingBasketLine className='w-4 h-4 xs:w-6 xs:h-6 group-hover/btn:text-white' />
                </button> */}
                <button onClick={openNavbar} type="button" className=''>
                    <TiThMenu className='w-4 h-4 xs:w-7 xs:h-7 md:w-8 h-8 text-blue-950' />
                </button>
            </div>
        </nav>
        <AnimatePresence mode="sync">
            {nav ? (
                <motion.div
                    key="sidebar"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className='bg-white fixed top-0 w-[100vw] z-50 overflow-hidden min-h-[100vh] '
                >
                    <SideBar />
                </motion.div>
            ) : (
                <motion.div
                    key="empty"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <div />
                </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}

export default MobileNav