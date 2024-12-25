import { motion } from 'motion/react'

import { IoMdArrowRoundDown } from "react-icons/io";

import HomeBox from '../components/ui/landing_page/home_box';
import HowItWorksComponent from '../components/ui/htw/htw_component';
import htwImage1 from '../assets/images/how_it_works/how-carvago-works-hero.webp'
import footer_htw from '../assets/images/how_it_works/footer_htw.webp'
import { Link } from 'react-router-dom';
import { useRef } from 'react';





const HowItWorksPage = () => {
    // ref for making the steps get focus once button is clicked
    const stepsRef = useRef<HTMLDivElement>(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
            duration: 2,
            ease: "easeInOut",
          },
        },
      };
      
      const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };

      // function for focusing ref
      const focusSteps = () => {
        if (stepsRef.current)
            stepsRef.current.scrollIntoView({ behavior: 'smooth' })
      }
      
  return (
    <main className='flex flex-col gap-12 pt-[60px] min-lg:pt-[80px] ] font-main'>
        <section className='flex flex-col min-lg:flex-row justify-between w-[100%] relative'>
            <motion.div 
                className='flex flex-col gap-6  px-4 sm:px-8 min-lg:pl-10 xl:pl-14 2xl:pl-20  pt-10 mb-6 sm:mb-36 min-lg:mb-32 w-[100%] xl:w-[600px] 2xl:w-[1500px]'
                initial="hidden"
                animate="visible"
                variants={containerVariants}>
                <motion.h1 
                    variants={childVariants}
                    className='text-blue-950 font-extrabold text-4xl xs:text-5xl md:text-6xl xl:text-7xl 2xl:text-9xl leading-none'
                    >
                    How does Driveway Dreams work?
                </motion.h1>
                <motion.p 
                    variants={childVariants}
                    className='font-medium text-[16px] xl:text-[18px] 2xl:text-[24px] leading-relaxed w-[100%] min-lg:w-[400px] xl:w-[90%] 2xl:w-[70%] text-blue-950'>
                    Simply choose a car. We will arrange a detailed inspection. Based on that you can decide whether you want the car. We then buy it, arrange an extended warranty, register it and deliver it to you.
                </motion.p>
                <motion.button 
                    variants={childVariants}
                    aria-label="Learn more about how Driveway Dreams works"
                    className='flex gap-2 rounded-md bg-gradient-to-r py-4 px-8 w-fit from-blue-700 uppercase to-blue-950 text-white outline-none shadow-md hover:from-blue-900 hover:to-blue-900 font-bold text-[16px] min-lg:text-[18px] xl:text-[20px] 2xl:text-[22px] items-center transition-transform transform hover:scale-105'
                    onClick={focusSteps}
                    >
                    <motion.div initial={{ y: -10 }} animate={{ y: 5 }} transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}>
                        <IoMdArrowRoundDown className='text-white w-5 h-5' />
                    </motion.div>
                    <p>
                        I want to know more
                    </p>
                </motion.button>
            </motion.div>
            <img src={htwImage1} alt="Image of car salesman concluding a deal" className='w-[100%] min-lg:w-[680px] xl:w-[800px] 2xl:w-[1200px] sm:hidden min-lg:block block' />
            <div className='absolute bottom-6 w-[100%]'>
                <HomeBox isRelative={true} />
            </div>
        </section>

        <HowItWorksComponent ref={stepsRef} />

        <section className='bg-[#EDF1F8] clip-htw_conc w-[100%] py-[180px] flex flex-col gap-12 items-center'>
            <h3 className='text-3xl min-lg:text-4xl xl:text-5xl 2xl:text-6xl text-blue-950 font-extrabold w-[90%] sm:w-[600px] text-center leading-12 relative'>
                You don't risk anything by buying through Driveway Dreams
            </h3>
            <div className='w-[94%]'>
                <HomeBox isRelative={false} />
            </div>
            <div className='w-[94%] rounded-2xl mt-12 h-[320px] bg-gradient-to-r from-[#3E47DD] to-[#262A98] relative flex items-center justify-center shadow-2xl shadow-[#3E47DD]'>
                <div className='absolute left-0 z-10 '>
                    <img src={footer_htw} alt="Image description of man checking our Driveway Dreams." className='w-[600px] h-[320px] opacity-80 object-contain' />
                </div>
                <div className='absolute p-2 flex flex-col z-20 gap-6'>
                    <h3 className='text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white'>
                        Try out how Driveway Dreams works.
                    </h3>
                    <p className='text-white font-bold text-[16px] min-lg:text-lg xl:text-xl 2xl:text-2xl opacity-70'>
                        Now all that's left is to pick out your dream car. We'd be so happy to guide you to it.
                    </p>
                    <Link to="/buy" className='bg-gradient-to-r from-[#FF7300] to-[#FF9800] w-fit rounded-md py-3 px-6 text-white  text-[16px] min-lg:text-lg xl:text-xl 2xl:text-2xl self-center font-semibold uppercase'>
                        Show all vehicles
                    </Link>
                </div>
            </div>
        </section>
    </main>
  )
}

export default HowItWorksPage