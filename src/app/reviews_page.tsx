import { motion } from 'motion/react'

import { IoStar, IoStarHalf } from 'react-icons/io5'
import { SiSubaru, SiChevrolet, SiAudi, SiKia, SiNissan, SiMercedes, SiFord, SiJeep, SiToyota, SiVolkswagen, SiHonda, SiHyundai, SiTesla, SiBmw, SiMazda, SiVolvo, SiPorsche, SiChrysler } from 'react-icons/si';

import reviewImg1 from '../assets/images/reviews.webp'
import { Link } from 'react-router-dom';
import HomeBox from '../components/ui/landing_page/home_box';


const ReviewsPage = () => {
      const carReviews = [
        {
          name: "Alex J.",
          carPurchased: "Subaru Outback",
          title: "An Adventurer’s Best Friend 🏞️🚙",
          content: "This car has taken me from mountain trails to city streets with ease. Reliable, rugged, and just what I needed for my adventures!",
          icon: <SiSubaru className="w-10 h-10" />
        },
        {
          name: "Nina V.",
          carPurchased: "Chevrolet Tahoe",
          title: "Space for the Whole Family 🏡🚗",
          content: "I needed something big enough for my kids, their gear, and groceries. The Tahoe delivered in every way. Comfort and style combined!",
          icon: <SiChevrolet className="w-10 h-10" />
        },
        {
          name: "Sam D.",
          carPurchased: "Audi Q5",
          title: "Smooth, Stylish, and Sophisticated 💼✨",
          content: "Every drive feels like a luxury experience. The sleek design and smooth handling are worth every penny.",
          icon: <SiAudi className="w-10 h-10" />
        },
        {
          name: "Sophia R.",
          carPurchased: "Kia Sorento",
          title: "A Budget-Friendly Luxury Ride 🛍️🚘",
          content: "Who knew affordable could feel this premium? From the tech to the interior, everything screams quality.",
          icon: <SiKia className="w-10 h-10" />
        },
        {
          name: "Carlos T.",
          carPurchased: "Nissan Rogue",
          title: "Safe and Sound All the Way 🛡️🛣️",
          content: "As a safety-first driver, the Rogue checked all my boxes. Plus, it’s so fun to drive!",
          icon: <SiNissan className="w-10 h-10" />
        },
        {
          name: "Ella W.",
          carPurchased: "Mercedes-Benz C-Class",
          title: "A Statement on Wheels 💎🚗",
          content: "This car doesn’t just get me from A to B—it makes an impression. Stylish, classy, and oh-so-smooth.",
          icon: <SiMercedes className="w-10 h-10" />
        },
        {
          name: "Brian L.",
          carPurchased: "Ford F-150",
          title: "Power and Durability in One 💪🚛",
          content: "This truck handles work, play, and everything in between like a champ. The F-150 is unbeatable.",
          icon: <SiFord className="w-10 h-10" />
        },
        {
          name: "Julia C.",
          carPurchased: "Jeep Wrangler",
          title: "Ready for Any Terrain 🌍🚙",
          content: "Whether it's sand, snow, or mud, this car tackles it all with ease. Perfect for an outdoor enthusiast like me!",
          icon: <SiJeep className="w-10 h-10" />
        },
        {
          name: "Ethan G.",
          carPurchased: "Toyota Camry",
          title: "The Definition of Reliability 🔧🚗",
          content: "My Camry has been a trustworthy companion for years now. Low maintenance, great mileage, and always dependable.",
          icon: <SiToyota className="w-10 h-10" />
        },
        {
          name: "Olivia P.",
          carPurchased: "Volkswagen Passat",
          title: "Understated Elegance 🌟🚘",
          content: "I wanted something stylish yet practical, and the Passat hit the mark. It’s a joy to drive.",
          icon: <SiVolkswagen className="w-10 h-10" />
        },
        {
          name: "Zach W.",
          carPurchased: "Honda Accord",
          title: "Timeless and Trusty 🚗⏳",
          content: "This car is like a fine wine—it just gets better with time. Comfortable and fuel-efficient.",
          icon: <SiHonda className="w-10 h-10" />
        },
        {
          name: "Grace M.",
          carPurchased: "Hyundai Kona",
          title: "Compact Yet Mighty 🌈🚙",
          content: "The Kona is zippy, stylish, and perfect for city living. I couldn’t have picked a better car!",
          icon: <SiHyundai className="w-10 h-10" />
        },
        {
          name: "Tyler B.",
          carPurchased: "Tesla Model S",
          title: "Futuristic and Fast 🚀🔋",
          content: "This car feels like driving a spaceship. The tech is unbelievable, and the speed? Incredible!",
          icon: <SiTesla className="w-10 h-10" />
        },
        {
          name: "Chloe H.",
          carPurchased: "BMW X3",
          title: "Luxury Meets Practicality 🏖️💼",
          content: "I love that it’s luxurious but also practical for daily use. The best of both worlds!",
          icon: <SiBmw className="w-10 h-10" />
        },
        {
          name: "Liam F.",
          carPurchased: "Chevrolet Corvette",
          title: "A Sports Car Dream Come True 🏎️🔥",
          content: "Every time I sit behind the wheel, it’s a thrill. The Corvette is truly a driver’s car.",
          icon: <SiChevrolet className="w-10 h-10" />
        },
        {
          name: "Diana Y.",
          carPurchased: "Mazda MX-5 Miata",
          title: "Top-Down Joyrides Await 🌞🚗",
          content: "With the convertible top down, every drive feels like a mini vacation. I’m obsessed!",
          icon: <SiMazda className="w-10 h-10" />
        },
        {
          name: "Henry O.",
          carPurchased: "Toyota Tacoma",
          title: "Built Tough for Any Job 🛠️🚙",
          content: "My Tacoma is the workhorse I needed. It handles my projects without breaking a sweat.",
          icon: <SiToyota className="w-10 h-10" />
        },
        {
          name: "Lara E.",
          carPurchased: "Volvo XC90",
          title: "Safety First, Always 🛡️🚗",
          content: "With kids in tow, safety is my top priority. The XC90’s features give me peace of mind.",
          icon: <SiVolvo className="w-10 h-10" />
        },
        {
          name: "Jason T.",
          carPurchased: "Ford Explorer",
          title: "Ready for Road Trips 🗺️🚙",
          content: "Whether it’s a weekend getaway or a cross-country adventure, the Explorer is my go-to. Spacious and reliable.",
          icon: <SiFord className="w-10 h-10" />
        },
        {
          name: "Ella K.",
          carPurchased: "Honda Fit",
          title: "Small Car, Big Value 💸🚘",
          content: "It’s compact yet roomy and has great mileage. Perfect for my busy city lifestyle.",
          icon: <SiHonda className="w-10 h-10" />
        },
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
        },
        {
          name: "Olivia R.",
          carPurchased: "Subaru Outback",
          title: "Adventure Ready! 🏔️🚙",
          content: "My love for road trips just got an upgrade! The process was seamless, and now I’m hitting the trails with confidence in my new Subaru.",
          icon: <SiSubaru className="w-10 h-10" />
        },
        {
          name: "Michael S.",
          carPurchased: "Audi A4",
          title: "Classy and Convenient ✨",
          content: "From selecting the car to the quick delivery, everything was so professional. My Audi A4 is pure class, and I couldn’t be happier.",
          icon: <SiAudi className="w-10 h-10" />
        },
        {
          name: "Emma D.",
          carPurchased: "Kia Sportage",
          title: "Perfect Family Fit 👨‍👩‍👧‍👦",
          content: "We needed a safe and spacious car for the kids, and this was the best choice. The whole experience was hassle-free and quick.",
          icon: <SiKia className="w-10 h-10" />
        },
        {
          name: "Noah J.",
          carPurchased: "Chevrolet Camaro",
          title: "Living the Muscle Car Dream 💪🔥",
          content: "Owning a Camaro has always been a dream. This team made it happen, and it looks just as powerful as it drives!",
          icon: <SiChevrolet className="w-10 h-10" />
        },
        {
          name: "Sophia B.",
          carPurchased: "Nissan Altima",
          title: "Affordable and Reliable 💼✅",
          content: "I needed a reliable car for commuting, and they delivered both quality and affordability. Highly recommend!",
          icon: <SiNissan className="w-10 h-10" />
        },
        {
          name: "Ethan W.",
          carPurchased: "Jeep Wrangler",
          title: "Off-Road King! 🛻🌄",
          content: "They helped me find the perfect ride for my weekend adventures. The Wrangler was inspected and ready to conquer!",
          icon: <SiJeep className="w-10 h-10" />
        },
        {
          name: "Charlotte H.",
          carPurchased: "Volvo XC90",
          title: "Safe and Stylish 🚸🚘",
          content: "I’m thrilled with my Volvo! As a mom, safety comes first, and this purchase gave me peace of mind and a little luxury.",
          icon: <SiVolvo className="w-10 h-10" />
        },
        {
          name: "Liam C.",
          carPurchased: "Dodge Challenger",
          title: "A Beast on Wheels 🚀",
          content: "Everything about my Challenger screams power. Buying it was just as smooth as its engine. Amazing experience!",
          icon: <SiChrysler className="w-10 h-10" />
        },
        {
          name: "Amelia T.",
          carPurchased: "Ford Explorer",
          title: "Explorer’s Delight 🌍",
          content: "They made the process super easy, and now I have the perfect car for family road trips. Can’t wait for the next adventure!",
          icon: <SiFord className="w-10 h-10" />
        },
        {
          name: "William K.",
          carPurchased: "Mercedes-Benz C-Class",
          title: "Sophistication at Its Best 💼🚗",
          content: "Everything was first-class, from customer service to delivery. My Mercedes exudes luxury, just like the buying experience.",
          icon: <SiMercedes className="w-10 h-10" />
        },
        {
          name: "Isabella M.",
          carPurchased: "Hyundai Tucson",
          title: "Comfort Meets Performance 🔥",
          content: "I couldn’t believe how easy and flexible the buying process was. The Tucson is an all-rounder and perfect for my needs.",
          icon: <SiHyundai className="w-10 h-10" />
        },
        {
          name: "Mason B.",
          carPurchased: "Porsche Cayenne",
          title: "Luxury SUV Goals! 🚙🔥",
          content: "Dreams do come true! The Porsche Cayenne is an absolute head-turner, and the service was flawless.",
          icon: <SiPorsche className="w-10 h-10" />
        },
        {
          name: "Ava R.",
          carPurchased: "Chevrolet Malibu",
          title: "Smooth Operator 🌊",
          content: "My Malibu is a dream to drive. Smooth, reliable, and the purchase was stress-free from start to finish.",
          icon: <SiChevrolet className="w-10 h-10" />
        },
        {
          name: "Lucas N.",
          carPurchased: "Toyota Corolla",
          title: "Fuel Efficiency is Key ⛽💵",
          content: "I needed an efficient car for my daily commute, and they nailed it with the Corolla. Couldn’t be happier!",
          icon: <SiToyota className="w-10 h-10" />
        },
        {
          name: "Mia G.",
          carPurchased: "Honda Civic",
          title: "Style and Comfort Combined 💖🚗",
          content: "The Civic is everything I wanted and more. The whole process was quick and stress-free. Highly recommended!",
          icon: <SiHonda className="w-10 h-10" />
        },
        {
          name: "Elijah O.",
          carPurchased: "Tesla Model Y",
          title: "The Future of Driving 🚀🔌",
          content: "The Tesla blew my mind! From ordering to delivery, everything was seamless. Tech-savvy and eco-friendly.",
          icon: <SiTesla className="w-10 h-10" />
        },
        {
          name: "Harper F.",
          carPurchased: "Lexus RX 350",
          title: "Luxury Meets Comfort 🌟",
          content: "The Lexus is stunning. They made sure the car was in perfect condition and handled everything professionally.",
          icon: <SiToyota className="w-10 h-10" />
        },
        {
          name: "Henry P.",
          carPurchased: "Volkswagen Golf",
          title: "Small but Mighty ⚡",
          content: "For a compact car, the Golf packs a punch. I’m loving every drive and how easy the entire process was.",
          icon: <SiVolkswagen className="w-10 h-10" />
        },
        {
          name: "Evelyn S.",
          carPurchased: "BMW X3",
          title: "Luxury and Performance 🚀",
          content: "I’ve never been happier with a car purchase. The X3 drives like a dream, and their service was top-notch.",
          icon: <SiBmw className="w-10 h-10" />
        },
        {
          name: "Daniel W.",
          carPurchased: "Mazda3",
          title: "Compact and Cool 😎",
          content: "My new Mazda3 is perfect for city life. The service was flawless, and I’m loving every ride!",
          icon: <SiMazda className="w-10 h-10" />
        }
      ];
      
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

      const reviewVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            duration: 2,
            ease: "easeInOut",
          },
        },
      };
      
      const childVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      };

    return (
     <main className='flex flex-col gap-12 pt-[80px] font-main bg-[#F5F7FB]'>
        <motion.section 
            className="flex gap-6 relative"
            initial="hidden"
            animate="visible"
            variants={containerVariants}>
            <div>
                <img src={reviewImg1} alt="Come buy a car with us" className='bg-cover' />
            </div>
            <div 
                className='flex flex-col gap-4 w-[50%] absolute bottom-20 left-12'
                >
                <motion.p
                     className='text-lg font-extrabold text-blue-800'
                     variants={childVariants}>
                    Driveway Dreams
                </motion.p>
                <motion.h1 
                    className='text-[3.8rem] leading-[1.2] font-extrabold text-blue-950'
                    variants={childVariants}>
                    What do our customers say about us?
                </motion.h1>
            </div>
            <motion.div 
                className='flex flex-col gap-6 z-10 bg-white w-[450px] items-center p-6 rounded-lg shadow-lg border border-gray-300 absolute -bottom-32 right-20'
                variants={childVariants}>
                <div className='flex gap-2 items-center'>
                    <div className='flex flex-col gap-0 items-center'>
                        <div className="flex gap-2">
                            <IoStar className="w-10 h-10 text-yellow-400" />
                            <IoStar className="w-10 h-10 text-yellow-400" />
                            <IoStar className="w-10 h-10 text-yellow-400" />
                            <IoStar className="w-10 h-10 text-yellow-400" />
                            <IoStarHalf  className="w-10 h-10 text-yellow-400" />
                        </div>
                        <p className='text-[12px] font-extrabold italic text-blue-950 opacity-70'>
                            1803 reviews
                        </p>
                    </div>
                    <h2 className='text-[4rem] font-extrabold text-blue-950'>
                        4.8
                    </h2>
                </div>
                <p className='text-lg italic font-extrabold text-blue-950'>
                    “If you're not happy, neither are we!”
                </p>
            </motion.div>
        </motion.section>
        
        <motion.section
          className='px-4 md:px-8 lg:px-12 flex w-[100%] flex-wrap gap-6 justify-evenly mt-32 mb-14'
          initial="hidden"
          animate="visible"
          variants={reviewVariants}>
          {
            carReviews.map((review) => (
              <motion.div 
                initial={{ opacity: 0.3, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.5, once: true }}
                key={review.name} 
                className="flex flex-col justify-between w-[100%] lg:w-[350px] flex-shrink-0 shadow-md rounded-lg bg-white py-6 px-4" >
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-extrabold text-blue-950">
                    {review.name}
                  </h3>
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
                    <Link to={`/cars/${review.carPurchased.toLowerCase()}`} className="text-blue-600 underline font-bold text-sm">
                      Check out similar cars
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </motion.section>

        <section className='px-4 md:px-8 lg:px-12 mb-24 w-[100%]  flex justify-center items-center gap-12 flex-col'>
          <motion.h4 
            className='text-3xl uppercase w-[100%] lg:w-[70%] text-center leading-relaxed text-blue-950 font-extrabold'
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 1, once: true }} transition={{ duration: 1 }}>
            Get a car from us and become another happy customer of ours.
          </motion.h4>
          <HomeBox isRelative={false} />
        </section>
     </main>   
    )
}

export default ReviewsPage