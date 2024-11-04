import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import scrollToTop from '../../utils/scroll_to_top';

function DesktopNav() {
   const [isScrolled, setIsScrolled] = useState(false)

   // onscroll event
   useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
   <nav className={`flex justify-between text-white bg-[#17B3A6] items-center w-full fixed py-2 md:py-5 z-10 border-b border-b-[#17B3A6] px-4 md:px-8 lg:px-12 ${isScrolled ? ' shadow-lg' : ''}`}>
      <NavLink onClick={scrollToTop} to={'/'} className={`font-semibold text-xl`}>
         MACELO AUTO<small className='text-xs'>s</small>
      </NavLink>
         <ul className='text-md font-medium flex gap-5 items-center'>
            <li className={`text-sm tracking-wide font-semibold hover:underline`}>
               <NavLink onClick={scrollToTop} to={'/inventory'}>Inventory</NavLink>
            </li>
            <li className={`text-sm tracking-wide font-semibold hover:underline`}>
               <NavLink onClick={scrollToTop} to={'/find'}>
                  Find a Car
               </NavLink>
            </li>
            <li className={`text-sm tracking-wide font-semibold hover:underline`}>
               <NavLink onClick={scrollToTop} to={'/shopping-cart'}>
                  Shopping Cart
               </NavLink>
            </li>
            <li className={`text-sm tracking-wide font-semibold hover:underline`}>
               <NavLink onClick={scrollToTop} to={'/contact-us'}>Contact Us</NavLink>
            </li>
         </ul>
   </nav>
  )
}

export default DesktopNav