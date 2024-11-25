import { Link } from "react-router-dom";
import { motion } from 'motion/react'
import { FaHandHoldingDollar, FaPhoneVolume, FaScrewdriverWrench } from "react-icons/fa6";
import { FcInspection } from "react-icons/fc";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillInsurance } from "react-icons/ai";
import { IoReceiptSharp, IoStar, IoStarHalf } from "react-icons/io5";
import { IoIosCheckmarkCircle, IoMdMail } from "react-icons/io";
import { SiBmw, SiFord, SiHonda, SiHyundai, SiMazda, SiTesla, SiToyota, SiVolkswagen } from "react-icons/si";


import CarSlides from "../components/ui/landing_page/car_slides";
import HomeBg from "../components/ui/landing_page/home_bg";

import htwImage1 from '../assets/images/landing_page/how_it_works_1.webp'
import htwImage2 from '../assets/images/landing_page/how_it_works_2.webp'
import htwImage3 from '../assets/images/landing_page/how_it_works_3.webp'
import contactImage from '../assets/images/landing_page/contact-bg.webp'
import HomeBox from "../components/ui/landing_page/home_box";





const HomePage = () => {
  // list for how it works section
  const howItWorks = [
    {
      image: htwImage1,
      header: 'Choose any cars from our collection',
      paragraph: "Browse through our extensive collection of vehicles, carefully curated to suit a variety of preferences and needs."
    },
    {
      image: htwImage2,
      header: 'Schedule an inspection with us',
      paragraph: "Once you've picked your ideal car, schedule a thorough inspection at your convenience. Set a time, and we’ll walk you through every detail"
    },
    {
      image: htwImage3,
      header: "We'll deliver it to your home",
      paragraph: "Sit back and relax while we handle the logistics. After completing the inspection and paperwork, we’ll deliver your new car straight to your doorstep. "
    }
  ]

  // list for services section
  const servicesList = [
    {
      icon: <FaHandHoldingDollar className="w-16 h-16 text-[#3E47DD]" />,
      header: 'Installmental Payments',
      list: ['Flexible payment options', 'Completely transparent']
    },
    {
      icon: <FcInspection className="w-16 h-16 text-[#3E47DD]" />,
      header: 'Car Inspection',
      list: ['Thorough car inspection', 'Qualified mechanics and technicians']
    },
    {
      icon: <TbTruckDelivery className="w-16 h-16 text-[#3E47DD]" />,
      header: 'Delivery',
      list: ['To your doorstep or a pick-up point', 'Fast delivery']
    },
    {
      icon: <FaScrewdriverWrench className="w-16 h-16 text-[#3E47DD]" />,
      header: 'Warranty',
      list: ['Up to 36-months warranty', 'Major repairs covered']
    },
    {
      icon: <AiFillInsurance className="w-16 h-16 text-[#3E47DD]" />,
      header: 'Insurance',
      list: ['100% coverage', 'Comprehensive coverage']
    },
    {
      icon: <IoReceiptSharp className="w-16 h-16 text-[#3E47DD]" />,
      header: 'Car Registration',
      list: ['Everything from emission-test to MOT', 'Free registration']
    }
  ]
  
  // list for reviews section
  const carReviews = [
    {
      name: "Sarah L.",
      carPurchased: "Toyota RAV4",
      title: "A Dream Come True 🚗✨",
      content: "I never thought buying a car could be this simple. Browsing through their sleek website was a joy, and the delivery felt like a cherry on top! It was like they brought my dream car straight to my doorstep.",
      icon: <SiToyota className="w-10 h-10" />
    },
    {
      name: "James K.",
      carPurchased: "BMW 5 Series",
      title: "Luxury Without Breaking the Bank 🤑",
      content: "I snagged a luxury car for a price that didn’t make my wallet cry. Plus, the installment options made the entire process stress-free. Who says luxury can’t be affordable?",
      icon: <SiBmw className="w-10 h-10" />
    },
    {
      name: "Maria G.",
      carPurchased: "Honda CR-V",
      title: "Customer Service That Truly Cares 💬❤️",
      content: "From my first inquiry to the final handshake, I felt like royalty. Their team answered all my (endless!) questions patiently and helped me find the perfect family car. Can’t thank them enough!"
      ,
      icon: <SiHonda className="w-10 h-10" />
    },
    {
      name: "Derek P.",
      carPurchased: "Ford Mustang (2018)",
      title: "Secondhand? Feels Like Brand New! 🎉",
      content: "I went in for a used car and drove away feeling like I just bought it straight out of the showroom. The quality checks and care they put into their cars are unmatched.",
      icon: <SiFord className="w-10 h-10" />
    },
    {
      name: "Linda W.",
      carPurchased: "Tesla Model 3",
      title: "Delivered Right to My Doorstep 🚙📦",
      content: "I’ll admit—I was skeptical about online car buying. But wow, these folks blew me away! My shiny new car showed up at my house on time, looking stunning. Such a game-changer!",
      icon: <SiTesla className="w-10 h-10" />
    },
    {
      name: "Roberto H.",
      carPurchased: "Hyundai Elantra",
      title: "Perfect for Budget Buyers 🏦✅",
      content: "I wasn’t sure I could afford my dream car, but their flexible payment plans turned it into reality. No stress, no compromise—just pure happiness behind the wheel!",
      icon: <SiHyundai  className="w-10 h-10" />
    },
    {
      name: "Emily T.",
      carPurchased: "Volkswagen Tiguan",
      title: "Transparency That Builds Trust 🌟",
      content: "Every step was as clear as a sunny day—no hidden fees, no sketchy fine print. It’s refreshing to work with a company that values honesty as much as I do.",
      icon: <SiVolkswagen className="w-10 h-10" />
    },
    {
      name: "John M.",
      carPurchased: "Mazda CX-5",
      title: "First-Time Buyer Bliss 🎉🚘",
      content: "As someone new to buying a car, I couldn’t have asked for a better experience. Their guidance was priceless, and I drove off with confidence and a car I adore!",
      icon: <SiMazda className="w-10 h-10" />
    }
  ];
    

  return (
    <main className="font-main pt-[5%] w-[100%] flex flex-col gap-16">
      <HomeBg />

      <CarSlides />

      <section className="bg-[#F5F7FB] w-[100%] pt-[150px] pb-[200px] clip-htw font-main px-4 md:px-8 tablet:px-12 flex flex-col items-center gap-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-blue-950">
          How does it work?
        </h2>
        <div className="flex justify-between w-[100%]">
          {
            howItWorks.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 w-[350px]" >
                <img src={item.image} alt={item.header} className="w-[100%]" />
                <p className="text-blue-600 font-extrabold text-[16px]">
                  0{index + 1}.
                </p>
                <h3 className="text-xl font-extrabold text-blue-950">
                  {item.header}
                </h3>
                <p className="text-blue-950 text-sm">
                  {item.paragraph}
                </p>
              </div>
            ))
          }
        </div>
        <button className="w-fit outline-none rounded-md text-white font-main font-extrabold text-[15px] bg-gradient-to-r from-blue-600 to-blue-950 py-3 px-6 hover:from-blue-600 hover:to-blue-600 mt-6">
          Want to know more?
        </button>
      </section>

      <section className="w-[100%] flex justify-between items-center gap-8">
        <div className="flex flex-col gap-4 w-[40%] pl-4 md:pl-8 tablet:pl-24">
          <h3 className="text-blue-950 text-2xl font-extrabold">
            Unlock Your Dream Ride at an Affordable Price! 🚗💨
          </h3>
          <p className="text-blue-950 leading-relaxed text-[15px] font-semibold">
            New cars are expensive, but that doesn't mean you have to miss out on owning a high-quality vehicle. With used cars, you can drive away with your dream car without the eye-watering price tag. Why pay full price for a new car when you can choose from a wide selection of well-maintained, feature-packed pre-owned vehicles?
          </p>
        </div>
        <div className="w-[55%] flex flex-col gap-0 justify-center relative h-[450px]" >
          <div className="clip-used bg-[#F5F7FB] h-[80%] w-[100%]" />
          <div className="clip-under bg-[rgb(215,225,239)] h-[25%] w-[100%]" />
          <motion.div className="flex flex-col gap-6 rounded-xl py-8 px-12 opacity-50 hover:opacity-100 bg-white shadow-2xl w-[90%] absolute" whileInView={{ opacity: 100 }} viewport={{ amount: 1, once: false }} transition={{ duration: 0.5, ease: 'anticipate' }}>
            <h3 className="text-blue-900 font-extrabold text-2xl tracking-tight">
              Buy a car from your sofa
            </h3>
            <Link to="/buy" className="w-[100%] bg-gradient-to-r tracking-wider from-blue-600 to-blue-950 shadow-md hover:shadow-lg hover:from-blue-900 hover:to-blue-900 text-white font-extrabold text-[12px] py-3 text-center px-6 rounded-lg">
              GET ONE TODAY!
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="w-[100%] flex justify-between items-center gap-4 h-fit">
        <div className='relative flex w-[100%]'>
          <div className="clip-installment w-[100%] h-[650px] bg-[#EDF1F8]" />
          <div className="rounded-2xl border flex flex-col gap-0 items-center border-gray-200 shadow-lg saturate-100 px-12 py-8 w-[80%] absolute top-16 left-24 bg-white">
            <div className="h-[35px] -top-9 opacity-30 absolute w-[80%] rounded-t-2xl bg-[rgba(72,88,133,0.16)]" />
            <div className="text-blue-900 flex flex-col gap-12 w-[100%] bg-white opacity-10">
              <ul className="flex flex-col gap-8">
                <li className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <p className="text-[14px] font-semibold">
                      Price of the car
                    </p>
                    <p className="font-extrabold text-sm">
                      $10,000
                    </p>
                  </div>
                  <input type="range" value={'15'} name="progress" id="progress" readOnly />
                </li>
                <li className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <p className="text-[14px] font-semibold">
                      Payback period
                    </p>
                    <p className="font-extrabold text-sm">
                      48 months
                    </p>
                  </div>
                  <input type="range" name="progress" id="progress"  readOnly />
                </li>
                <li className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <p className="text-[14px] font-semibold">
                      Down payment (%)
                    </p>
                    <p className="font-extrabold text-sm">
                      30% = $3,000
                    </p>
                  </div>
                  <input type="range" value={'30'} name="progress" id="progress"  readOnly />
                </li>
                <li className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-[12px] font-semibold">
                      Interest rate / APR
                    </p>
                    <p className="font-extrabold text-[14px]">
                      7.79% / 8.01%
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[12px] font-semibold">
                      Loan amount
                    </p>
                    <p className="font-extrabold text-[14px]">
                      $7,000
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[12px] font-semibold">
                      Total price
                    </p>
                    <p className="font-extrabold text-[14px]">
                      $8,160
                    </p>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <p className="text-[14px] font-bold">
                    Monthly installment
                  </p>
                  <p className="font-extrabold text-[18px]">
                    $170
                  </p>
                </li>
              </ul>
              <p className="text-[13px] leading-6 font-medium">
                This calculated amount only represents a ballpark figure and does not represent a binding commercial quote. The exact installment amount and interest may vary based on your location.
              </p>
            </div>
            <motion.div 
              className="flex flex-col opacity-30 w-[100%] gap-6 items-center justify-center absolute top-[30%] "
              initial={{ y: 30 }} whileInView={{ y: 0, opacity: 100 }} viewport={{ amount: 0.5, once: false }} transition={{ duration: 1, ease: 'anticipate' }}
              >
              <div className="border-4 animate-bounce border-[#3E47DD] p-4 rounded-full">
                <FaHandHoldingDollar className="w-14 h-14 text-[#3E47DD]" />
              </div>
              <h4 className="text-[18px] font-extrabold tracking-tight text-[#3E47DD]">
                We are always ready to help you get that dream car
              </h4>
              <p className="text-[16px] font-medium text-blue-900">
                Call us, and let's get started today
              </p>
              <div className="flex gap-2 items-center">
                <FaPhoneVolume className="w-5 h-5 text-[#3E47DD]" />
                <a href="tel:+8075310346" className="text-blue-900 font-bold text-[16px]">+234-807-531-0346</a>
              </div>
            </motion.div>
          </div>
        </div>
        <div className='flex flex-col gap-6 items-center w-[50%] pr-4 md:pr-8 tablet:pr-16'>
          <h4 className='text-2xl text-blue-900 font-extrabold'>
            Drive Now, Pay Later with Our Flexible Installment Plans!
          </h4>
          <div className='flex flex-col gap-4'>
            <p className='text-blue-900 font-semibold tracking-wide leading-6 text-[14px]'>
              Owning your dream car has never been easier! With our installment payment options, you can break down the cost into manageable monthly payments that fit your budget. No need to pay the full price upfront—choose the plan that works for you and enjoy the car you’ve always wanted without the financial strain.
            </p>
            <ul className='flex flex-col gap-2'>
              <li className='text-blue-900 font-semibold tracking-wide leading-relaxed text-sm'>
              ✨ Affordable Payment Options
              </li>
              <li className='text-blue-900 font-semibold tracking-wide leading-relaxed text-sm'>
              ✨ Zero Hidden Fees
              </li>
              <li className='text-blue-900 font-semibold tracking-wide leading-relaxed text-sm'>
              ✨ Quick and Easy Financing
              </li>
              <p className='text-blue-900 font-semibold tracking-wide leading-6 text-[14px]'>
                Start your journey today—apply now and drive home your car with confidence!
              </p>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 px-4 md:px-8 tablet:px-12">
        <h4 className="text-4xl text-blue-950 font-extrabold mb-2">
          Comprehensive services just a few clicks away
        </h4>
        <p className="text-[16px] font-light text-blue-950">
          One-stop solution for all your needs, from the comfort of your home.
        </p>
        <motion.div 
          className="flex flex-wrap justify-between gap-y-6 mt-12"
          transition={{ staggerChildren: 0.3 }}
          >
          {
            servicesList.map((service, index) => (
              <motion.div 
              key={index} 
              className="flex flex-col gap-8 px-2 py-6 tablet:w-1/3 lg:w-[32%] items-center hover:shadow-xl shadow-sm border border-gray-200 rounded-lg h-[400px] opacity-100"
              initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.5, once: false }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                {service.icon}
                <h4 className="text-[26px] font-extrabold text-blue-950 tracking-wide">
                  {service.header}
                </h4>
                <ul className="flex flex-col gap-2">
                  {
                    service.list.map((item, index) => (
                      <li key={index} className="text-[16px] items-center tracking-wide font-medium leading-relaxed text-blue-950 flex gap-2">
                        <IoIosCheckmarkCircle className="w-5 h-5 text-green-600" />
                        <p className="text-[16px]">
                          {item}
                        </p>
                      </li>
                    ))
                  }
                </ul>
              </motion.div>
            ))
          }
        </motion.div>
      </section>

      <motion.section 
        className="bg-[#EDF1F8] flex py-24 flex-col gap-6 w-[100%] clip-reviews mt-6 px-4 md:px-8 tablet:px-12 overflow-hidden"
        transition={{
          staggerChildren: 0.2,
        }}>
        <motion.h5 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 1, once: false }} transition={{ duration: 0.5, ease: 'linear' }}
          className="text-4xl font-extrabold mt-24 text-blue-950">
          What do our customers think?
        </motion.h5>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 1, once: false }} transition={{ duration: 0.5, ease: 'linear' }}
          className="flex gap-3 mb-8 items-center">
          <p className="text-4xl font-extrabold text-blue-950">
            4.8
          </p>
          <div className="flex gap-1">
            <IoStar className="w-5 h-5 text-yellow-400" />
            <IoStar className="w-5 h-5 text-yellow-400" />
            <IoStar className="w-5 h-5 text-yellow-400" />
            <IoStar className="w-5 h-5 text-yellow-400" />
            <IoStarHalf  className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-[14px] font-extrabold text-gray-500 self-center h-4">
            1803 reviews
          </p>
        </motion.div>
        <motion.div 
          className="flex gap-4 overflow-x-scroll scrollbar-hide" onScroll={(e) => e.preventDefault()}>
          {
            carReviews.map(review => (
              <motion.div 
                animate={{ x: ["0%", `-${(carReviews.length - 1) * 100}%`] }} transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} viewport={{ amount: 0.3, once: false }}
                key={review.name} className="flex flex-col justify-between flex-shrink-0 shadow-md w-[330px] rounded-lg bg-white py-6 px-4" >
                <img src="" alt="" />
                <div className="flex flex-col gap-4">
                  <h5 className="text-lg font-extrabold text-blue-950">
                    {review.name}
                  </h5>
                  <div className="flex gap-1">
                    <IoStar className="w-5 h-5 text-yellow-400" />
                    <IoStar className="w-5 h-5 text-yellow-400" />
                    <IoStar className="w-5 h-5 text-yellow-400" />
                    <IoStar className="w-5 h-5 text-yellow-400" />
                    <IoStar  className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-[16px] font-medium leading-6 text-blue-950">
                    {review.content}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-t-gray-500">
                  {review.icon}
                  <div className="flex flex-col gap-1">
                    <p className="text-blue-950 font-bold text-sm">
                      {review.carPurchased}
                    </p>
                    <Link to={`/${review.carPurchased.toLowerCase()}`} className="text-blue-600 underline font-bold text-sm">
                      Check out similar cars
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </motion.div>
        <h5 className="uppercase font-extrabold opacity-70 text-sm my-16 text-blue-950 self-center">
          They also trust us in the media...
        </h5>
        <div className="w-[100%] flex items-center justify-center flex-col gap-0">
          <div className="flex justify-between w-[70%] rounded-t-xl shadow-2xl bg-white">
            <div className="flex flex-col gap-10 px-8 py-14">
              <h5 className="uppercase text-blue-950 leading-16 tracking-wide text-3xl font-extrabold">
                Your next car is waiting here...
              </h5>
              <Link to={'/buy'} className="text-white outline-none bg-gradient-to-r from-blue-600 to-blue-950 font-bold w-fit py-3 px-6 rounded-md shadow-2xl hover:to-blue-600 animate-bounce hover:animate-none hover:shadow-blue-600">
                GET STARTED
              </Link>
            </div>
            <img src={contactImage} alt="Contact us to get a car today" className="w-[250px]" />
          </div>
          <div className="border-t border-t-gray-300 flex justify-center gap-16 bg-[#F5F7FB] w-[70%] px-4 py-10 shadow-2xl rounded-b-xl">
            <div className="flex gap-4 items-center">
              <div className="p-5 bg-white rounded-full">
                <FaPhoneVolume className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-light text-blue-950">
                  Call us
                </p>
                <a href="tel:+2348075310346" className="text-sm font-extrabold text-blue-950">
                  +234-807-531-0346
                </a>
                <p className="text-sm font-light text-blue-950">
                  Mo–Su 8 am-8 pm
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="p-5 bg-white rounded-full">
                <IoMdMail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-light text-blue-950">
                  Email
                </p>
               <a href="mailto:chimaojimma@gmail.com" className="text-sm font-extrabold text-blue-950 underline">
                chimaojimma@gmail.com
               </a>
              </div>
            </div>
          </div>
        </div>
        <h5 className="font-extrabold text-blue-950 text-2xl my-10 text-center uppercase self-center leading-relaxed w-[60%]">
          You’re not risking anything when you buy a vehicle on Driveway Dreams
        </h5>
        <HomeBox isRelative={false} />
      </motion.section>
    </main>
  );
};

export default HomePage;
