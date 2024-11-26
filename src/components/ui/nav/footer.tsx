import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import scrollToTop from "../../utils/scroll_to_top";

function Footer() {
  return (
   <footer  className="flex gap-16 w-[100%] font-main px-4 md:px-8 tablet:px-12 bg-[#F5F7FB] border-t border-t-gray-300 py-12 items-start">
      <div className="flex flex-col gap-6">
         <h6 className="text-3xl text-blue-950 font-extrabold">
            Driveway Dreams
         </h6>
         <p className="text-sm font-medium text-blue-950 opacity-60">
            Driveway Dreams. 2024. All rights reserved.
         </p>
         <div className="flex gap-6">
            <FaTwitter className="w-7 h-7 text-blue-600" />
            <FaInstagram className="w-7 h-7 text-blue-600" />
            <FaFacebook className="w-7 h-7 text-blue-600" />
            <FaLinkedin className="w-7 h-7 text-blue-600" />
         </div>
      </div>
      <div className="flex flex-col ml-10 gap-6">
         <h6 className="text-xl font-bold opacity-90 text-blue-950">
            Driveway Dreams
         </h6>
         <div className="flex flex-col gap-4">
            <Link  onClick={scrollToTop}  to={'/buy'} className="text-sm text-blue-950 font-medium opacity-60 hover:opacity-100 hover:font-bold" >
               Buy
            </Link>
            <Link  onClick={scrollToTop}  to={'/how-it-works'} className="text-sm text-blue-950 font-medium opacity-60 hover:opacity-100 hover:font-bold" >
               How it works
            </Link>
            <Link  onClick={scrollToTop}  to={'/reviews'} className="text-sm text-blue-950 font-medium opacity-60 hover:opacity-100 hover:font-bold" >
               Reviews
            </Link>
         </div>
      </div>
      <div className="flex flex-col gap-6">
         <h6 className="text-xl font-bold opacity-90 text-blue-950">
            Services
         </h6>
         <div className="flex flex-col gap-4">
            <p className="text-sm text-blue-950 font-medium opacity-60 hover:opacity-100 hover:font-bold" >
               Car inspection
            </p>
            <p className="text-sm text-blue-950 font-medium opacity-60 hover:opacity-100 hover:font-bold" >
               Delivery
            </p>
            <p  className="text-sm text-blue-950 font-medium opacity-60 hover:opacity-100 hover:font-bold" >
               Warranty
            </p>
            <p  className="text-sm text-blue-950 font-medium opacity-60 hover:opacity-100 hover:font-bold" >
               Insurance
            </p>
            <p  className="text-sm text-blue-950 font-medium opacity-60 hover:opacity-100 hover:font-bold" >
               Car registration
            </p>
         </div>
      </div>
      <div className="flex flex-col gap-6">
         <h6 className="text-xl font-bold opacity-90 text-blue-950">
            Company
         </h6>
         <div className="flex flex-col gap-4">
            <Link  onClick={scrollToTop}  to={'/about-us'} className="text-sm text-blue-950 font-medium opacity-60 hover:opacity-100 hover:font-bold" >
               About us
            </Link>
            <Link  onClick={scrollToTop}  to={'/contact'} className="text-sm text-blue-950 font-medium opacity-60 hover:opacity-100 hover:font-bold" >
               Contact
            </Link>
         </div>
      </div>
   </footer> 
  )
}

export default Footer
