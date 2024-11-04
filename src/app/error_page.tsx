import { Link } from 'react-router-dom'
import mobileImg from './assets/404-error_mobile.webp'
import tabletImg from './assets/404-error_tablet.webp'
import desktopImg from './assets/404-error_desktop.webp'


const ErrorPage = () => {

   
   return (
      <div className='flex items-center justify-center bg-white w-full h-screen lg:h-auto md:h-auto'>
         <Link to={'/'}>
            <img 
               src={`${desktopImg}`} 
               srcSet={`${mobileImg} 300w, ${tabletImg} 600w, ${desktopImg} 1200w`} 
               sizes='(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px' 
               alt="ERROR PAGE" 
               rel='preload' />
         </Link>
      </div>
   )
}

export default ErrorPage