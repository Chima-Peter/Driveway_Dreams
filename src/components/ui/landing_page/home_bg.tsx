import { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'

import HomeBox from './home_box'

import desktopImage from '../../../assets/images/landing_page/bg-desktop.webp'
import tabletImage from '../../../assets/images/landing_page/bg-tablet.webp'
import mobileImage from '../../../assets/images/landing_page/bg-mobile.webp'


const HomeBg = () => {

    const imageRef = useRef<HTMLImageElement>(null); // ref for image
    const containerRef = useRef<HTMLDivElement>(null); // ref for container over image
    const [containerWidth, setContainerWidth] = useState(0); // ref for changing container width

    // get container width on resize event and store in containerWidth state variable
    useEffect(() => {
        const handleResize = () => {
        if (containerRef.current) {
            const newWidth = containerRef.current.clientWidth;
            setContainerWidth(newWidth);
        
        }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    })


     // on containerWidth change, calculate and update the container's height
     useEffect(() => {
        if (imageRef.current && containerWidth > 0) {
        const image = imageRef.current;
        const newHeight = containerWidth / (image.naturalWidth / image.naturalHeight);
        if (containerRef.current) containerRef.current.style.height = `${newHeight}px`;
        }
    }, [containerWidth])
    
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
            ease: "easeInOut",
        },
        },
    }
    
    const childVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    }


    return (
        <motion.section 
            className="relative font-main"
            initial="hidden"
            animate="visible"
            variants={containerVariants}>
            <img 
                src={mobileImage} 
                ref={imageRef}
                srcSet={`${mobileImage} 300w, ${tabletImage} 600w, ${desktopImage} 1200w`}
                sizes='(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px'
                alt="Image of car." className='w-[100%]' />
            <div ref={containerRef} className="w-[100%] bg-[rgba(0,0,0,0.5)] absolute top-0" />
            <div className="flex flex-col gap-3 w-[80%] md:w-[600px] tablet:w-[800px] absolute left-4 md:left-8 tablet:left-10 top-10 md:top-16 tablet:top-20">
                <motion.h1  
                    className='text-white text-2xl md:text-[44px] md:leading-[46px] tablet:text-[55px] tracking-normal tablet:leading-[52px] lg:leading-[60px] font-bold'
                    variants={childVariants}
                    transition={{ duration: 0.5 }}>
                    Drive Your Dream Today: Unbeatable Deals on Cars You'll Love!
                </motion.h1>
            </div>
            <motion.div
                variants={childVariants}
                transition={{ duration: 0.5 }}>
                <HomeBox isRelative={true} />
            </motion.div>
        </motion.section>
    )
}

export default HomeBg