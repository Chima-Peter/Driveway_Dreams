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
    <main className='flex flex-col gap-12 pt-[80px] font-main'>
        <section className='flex justify-between w-[100%] relative'>
            <motion.div 
                className='flex flex-col gap-6 pl-4 md:pl-8 tablet:pl-24 pt-10 mb-32'
                initial="hidden"
                animate="visible"
                variants={containerVariants}>
                <motion.h1 
                    variants={childVariants}
                    className='text-blue-950 font-extrabold text-[50px] leading-[52px]'
                    >
                    How does Driveway Dreams work?
                </motion.h1>
                <motion.p 
                    variants={childVariants}
                    className='font-bold text-[16px] leading-8 w-[400px] text-blue-950'>
                    Simply. Choose a car. We will arrange a detailed inspection. Based on that you can decide whether you want the car. We then buy it, arrange an extended warranty, register it and deliver it to you.
                </motion.p>
                <motion.button 
                    variants={childVariants}
                    aria-label="Learn more about how Driveway Dreams works"
                    className='flex gap-2 rounded-md bg-gradient-to-r py-4 px-8 w-fit from-blue-700 uppercase to-blue-950 text-white outline-none shadow-md hover:from-blue-900 hover:to-blue-900 font-bold text-sm items-center transition-transform transform hover:scale-105'
                    onClick={focusSteps}
                    >
                    <IoMdArrowRoundDown className='text-white w-5 h-5' />
                    <p>
                        I want to know more
                    </p>
                </motion.button>
            </motion.div>
            <img src={htwImage1} alt="Image of car salesman concluding a deal" className='w-[680px]' />
            <div className='absolute bottom-6 w-[100%]'>
                <HomeBox isRelative={true} />
            </div>
        </section>

        <HowItWorksComponent ref={stepsRef} />

        <section className='bg-[#EDF1F8] clip-htw_conc w-[100%] py-[180px] flex flex-col gap-12 items-center'>
            <h3 className='text-3xl text-blue-950 font-extrabold w-[600px] text-center leading-12 relative'>
                You don't risk anything by buying through Driveway Dreams
            </h3>
            <div className='w-[94%]'>
                <HomeBox isRelative={false} />
            </div>
            <div className='w-[94%] rounded-2xl mt-12 h-[320px] bg-gradient-to-r from-[#3E47DD] to-[#262A98] relative flex items-center justify-center shadow-2xl shadow-[#3E47DD]'>
                <div className='absolute left-0 z-10 '>
                    <img src={footer_htw} alt="Image description of man checking our Driveway Dreams." className='w-[600px] h-[320px] opacity-80 object-contain' />
                </div>
                <div className='absolute flex flex-col z-20 gap-6'>
                    <h3 className='text-4xl font-extrabold text-white'>
                        Try out how Driveway Dreams works.
                    </h3>
                    <p className='text-white font-bold text-lg opacity-70'>
                        Now all that's left is to pick out your dream car. We'd be so happy to guide you to it.
                    </p>
                    <Link to="/buy" className='bg-gradient-to-r from-[#FF7300] to-[#FF9800] w-fit rounded-md py-3 px-6 text-white text-sm self-center font-semibold uppercase'>
                        Show all vehicles
                    </Link>
                </div>
            </div>
        </section>
    </main>
  )
}

export default HowItWorksPage