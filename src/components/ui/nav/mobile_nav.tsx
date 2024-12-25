import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { motion } from 'framer-motion'
import { MdCancelPresentation } from "react-icons/md";
import scrollToTop from "../../utils/scroll_to_top";

function MobileNav() {
   const [isScrolled, setIsScrolled] = useState(false)
   const [icon, setIcon] = useState(true)

   // toggle navigation
   const handleIcon = () => {
      setIcon(!icon)
   }

   // close navigation and scroll to page top
   const closeIcon = () => {
      setIcon(true)
      scrollToTop()
   }


   // onscroll event
   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 0)
      }
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);


   // framer motion for animation
   const slideVariants = {
      initial: {
         y: '-10%',
         opacity: 0
      },
      animate: {
         y: 0,
         opacity: 1
      }
   }


   return (
      <nav className={`flex flex-col text-white bg-blue-900 w-full gap-4 fixed z-10 border-b border-b-blue-900 px-4 sm:px-8 min-lg:px-10 xl:px-14 2xl:px-20  ${isScrolled ? 'shadow-lg' : ''} ${!icon ? 'h-[100%] border-b-0' : ''}`}>
         <div className="flex w-full justify-between items-center py-2 md:py-5">
            <Link onClick={closeIcon} to={'/'} className={`font-semibold text-xl`}>
               MACELO AUTO<small className='text-xs'>s</small>
            </Link>
               {
                  icon && <GiHamburgerMenu className="w-7 h-7 cursor-pointer" onClick={handleIcon} />
               }
               {
                  !icon && <MdCancelPresentation className="w-7 h-7 cursor-pointer" onClick={handleIcon} />
               }
         </div>
         {   
            !icon &&                
               <motion.ul 
                  className='text-xs font-medium flex box-border flex-col gap-4 px-4 pb-4'
                  variants={slideVariants}
                  initial='initial'
                  animate='animate'
                  transition= {{
                        ease: 'linear',
                        duration: 0.3
                  }}>
                  <li className={`hover:underline text-xs tracking-wide font-semibold`}>
                     <NavLink onClick={closeIcon} to={'/inventory'}>Inventory</NavLink>
                  </li>
                  <li className={`hover:underline text-xs tracking-wide font-semibold`}>
                     <NavLink onClick={closeIcon} to={'/find'}>
                        Find a Car
                     </NavLink>
                  </li>
                  <li className={`hover:underline text-xs tracking-wide font-semibold`}>
                     <NavLink onClick={closeIcon} to={'/shopping-cart'} className="flex gap-2">
                        <span>
                           Shopping Cart
                        </span>
                     </NavLink>
                  </li>
                  <li className={`hover:underline  text-xs tracking-wide font-semibold}`}>
                     <NavLink onClick={closeIcon} to={'/contact-us'}>
                        Contact Us
                     </NavLink>
                  </li>
               </motion.ul>
         }
      </nav>
   )
}

export default MobileNav
