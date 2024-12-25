import { forwardRef } from 'react';
import { motion } from 'motion/react'

import { CiClock2 } from "react-icons/ci";
import { IoCar } from "react-icons/io5";
import { FaAward, FaScrewdriverWrench } from "react-icons/fa6";
import { TbCoinEuroFilled, TbTruckDelivery } from "react-icons/tb";

import HtwDrop from "./htw_drop"

import htw1 from '../../../assets/images/how_it_works/htw1.webp'
import htw2 from '../../../assets/images/how_it_works/htw2.webp'
import htw3 from '../../../assets/images/how_it_works/htw3.webp'
import htw4 from '../../../assets/images/how_it_works/htw4.webp'

import sub_htw1 from '../../../assets/images/how_it_works/sub_htw1.webp'
import sub_htw2 from '../../../assets/images/how_it_works/sub_htw2.webp'
import sub_htw3 from '../../../assets/images/how_it_works/sub_htw3.webp'



const HowItWorksComponent = forwardRef<HTMLDivElement, unknown>((_props, ref) => {
    const how_it_works = [
        [
            {
                header: 'Why do you not show cars from all of the dealers?',
                paragraph: 'We only work with tried and tested dealers and only select cars which meet strict criteria. From 7 million adverts, we only recommend 1 000 000 cars for purchase, which is however still 10x more than the number of cars on offer in the Czech Republic. In addition to that, each vehicle must pass a thorough technical inspection consisting of more than 270 parameters before it can be sold. You will receive the result of the entire inspection and photo documentation together with our recommendation in advance.'
            },
            {
                header: 'Do you sell only vetted cars?',
                paragraph: "Each vehicle must pass a thorough technical inspection consisting of more than 270 parameters before it can be sold. In addition to this, Driveway Dreams becomes the owner of the car before it is delivered to the customer and assumes all risks associated with the vehicle. And if there is any problem, you can return the car to us at any time within 14 days of purchase."
            },
            {
                header: "Where do the cars in your offers come from?",
                paragraph: "The size of the offer often determines whether or not you find the car you are looking for. So far, customers in the Czech Republic have been able to choose from 70,000 cars. However, Driveway Dreams offers more than 1 000 000. And each car is just as close as the next - one click away. And since you are buying the car from us, communication is always only in Czech, regardless where the car is located. We will take care of any language and legal issues. If you're looking for a 2017 Volkswagen Golf with a diesel engine and a mileage of at most 50,000 kilometers, you will find about 10 of them for sale in the Czech Republic. You will find at least 153 cars with these parameters at Driveway Dreams. And a lot of them at a better price, with better equipment or better looking."
            }
        ],
        [
            {
                header: 'Which things do we check?',
                paragraph: 'You can inspect the car using our CarAudit service which includes 270 inspection points, VIN verification and detailed photos of any damage. Where possible, we request complete service documentation which we compare with the physical condition of the car and the records from the authorized dealers. We also compare the car with other cars on the market of a similar age and with a similar mileage. We only recommend cars in excellent technical condition.'
            },
            {
                header: 'What if the car fails inspection',
                paragraph: "Despite the fact that we analyze more than 7 million adverts every day and only pass 10% of them for inclusion in our offer, the result of the vehicle inspection need not necessarily be satisfactory. We will tell you quite transparently why the car didn’t pass and why we are not recommending that you purchase it. If we find the car to be unsuitable, you will not lose any money and we will refund the inspection fee. You also have the option of choosing another car."
            },
            {
                header: "How much does a CarAudit cost?",
                paragraph: "The actual inspection of the car will cost you €79 and we are usually able to arrange this within 2 working days. You will receive a detailed report from the inspection together with our recommendation and you can then decide for yourself whether you want to buy the car. The vehicle inspection fee is a one-off fee and covers our costs for the call out of the technician, physical inspection, test drive, verification of the vehicle’s origin and condition, and the recommendation to purchase. If we find the car to be unsuitable, you will not lose any money and we will refund the CarAudit™ payment. You also have the option of choosing another car."
            }
        ],
        [
            {
                header: 'I like the car. What comes next?',
                paragraph: 'Once you have chosen your car and decided to have it inspected, you then choose the method of payment, either bank transfer or using financing from one of our partners. In the last step of the order, you can choose from a wide range of additional services.'
            },
            {
                header: 'Can I buy the car on credit?',
                paragraph: "Yes, you can either pay the whole purchase price of the car or choose the option of financing with a down payment. First of all, you order and pay for the inspection of the car to confirm your interest in the chosen car. We will pass on your request, together with your chosen car details to our financial partners for evaluation. You don’t have to worry about anything. As soon as we receive the result we will let you know."
            },
            {
                header: "I have already received the documentation showing the result of the inspection. What happens next?",
                paragraph: "If you have decided to buy the car, confirm the order. We will issue you a proforma invoice for the remaining price of the car and handle all the formalities, so that you can have your chosen car as soon as possible."
            }
        ],
        [
            {
                header: 'Only cars from trusted and tested merchants',
                paragraph: 'We select cars from tried and tested dealers and only cars which meet strict criteria. In addition to this, we inspect the cars thoroughly.'
            },
            {
                header: 'All cars thoroughly inspected',
                paragraph: "The very highest quality of our cars is crucial to us and this is why we thoroughly inspect each vehicle in 270 points and document everything. We only recommend purchase of cars in excellent technical condition."
            },
            {
                header: "Option of returning car within 14 days",
                paragraph: "The most important thing for us is that you have only positive feelings about buying a car from us. That you as the customer are completely satisfied just like the many customers before you.."
            }
        ],
        [
            {
                header: 'Where will you deliver my car to?',
                paragraph: 'Would you like the car to be delivered to your work, your home, or would you like to collect in from our pick-up point? The decision is yours and yours alone. We will show you the car, hand over the keys and documents and you can finally start enjoying your car to the full.'
            },
            {
                header: 'How long will it take for you to deliver my car?',
                paragraph: "The process from receiving the payment to delivering the car typically takes 20 workdays. In some cases delivery may be delayed slightly due to administrative processes in individual European countries. However, we will always do our utmost to ensure you receive your vehicle as soon as possible. We will inform you immediately in the event of a delay or any other unexpected complications."
            },
            {
                header: "Option of returning car within 14 days",
                paragraph: "The most important thing for us is that you have only positive feelings about buying a car from us. That you as the customer are completely satisfied just like the many customers before you.."
            }
        ]   
    ]
      


    return (
        <section 
            className="flex flex-col gap-8 px-4 sm:px-8 min-lg:pr-0 min-lg:pl-10 xl:pl-14 2xl:pl-20  w-[100%] mt-28 overflow-hidden" >
            <div className="flex justify-between flex-col min-lg:flex-row gap-6 min-lg:gap-0" ref={ref}>
                <motion.div 
                    className='flex w-[100%] min-lg:w-fit min-lg:gap-12 items-start gap-4 '
                    initial={{ opacity: 0.5, x: -200 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ ease: 'easeInOut' }}>
                    <h2 className="text-blue-600 font-extrabold text-3xl min-lg:text-4xl xl:text-5xl">
                        01.
                    </h2> 
                    <div className="flex flex-col gap-4 w-[90%] min-lg:w-[400px] lg:w-[550px] xl:w-[580px] min-[2000px]:w-[1000px]">
                        <h2 className="text-blue-950 font-extrabold text-3xl xl:text-4xl 2xl:text-5xl">
                            1 000 000 cars per click
                        </h2>
                        <p className="text-blue-950 font-normal text-[18px] xl:text-[20px] 2xl:text-[24px] mb-6">
                            We process over 7 million ads every day, but we recommend only 10% of them for purchase. With the remaining cars, something often "doesn't fit" us.
                        </p>
                        {
                            how_it_works[0].map((item) => (
                                <HtwDrop key={item.header} paragraph={item.paragraph} header={item.header} />
                            ))
                        }
                        <div className='flex gap-4 bg-[#C7FFE9] h-fit w-[100%] border border-[#95E7CE] pr-4 mt-8'>
                            <div className='bg-[#95E7CE] w-[500px] pr-2 flex items-center'>
                                <img src={sub_htw1} alt="We are your trusted advisor" />
                            </div>
                            <div className='flex flex-col gap-1 py-4'>
                                <h2 className='text-blue-950 text-2xl xl:text-3xl 2xl:text-4xl font-extrabold'>
                                    We are your trusted advisor 
                                </h2>
                                <p className='text-blue-950 text-[16px] xl:text-[18px] 2xl:text-[20px] font-normal leading-6'>
                                        We offer vehicles from trustworthy sellers, we are not their owners. This is why we are always pleased to advise you objectively.
                                    We don’t need to get rid of any unsellable vehicles which have been standing in the car lot for half a year.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    className='relative w-[100%] min-lg:w-[420px] h-[500px] xl:w-[580px] xl:h-[600px] self-end'
                    initial={{ opacity: 0.5, x: 200 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ ease: 'easeInOut' }}>
                    <div className="w-[100%] h-[63%] bg-[#EDF1F8] clip-htw_comp" />
                    <div className="w-[100%] h-[150px] bg-[#D7E1EF] clip-under" />
                    <div className="w-[100%] absolute top-0 left-0">
                        <img src={htw1} alt="1,000,000 cars per click." className='w-[250px] xl:w-[300px]' />
                    </div>
                </motion.div>
            </div>

            <div className="flex justify-between flex-col min-lg:flex-row gap-6 min-lg:gap-0 lg:mt-20">
                <motion.div 
                className='flex min-lg:gap-12 items-start gap-4 '
                initial={{ opacity: 0.5, x: -200 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.2, once: true }}
                transition={{ ease: 'easeInOut' }}>
                    <h2 className="text-blue-600 font-extrabold text-3xl min-lg:text-4xl xl:text-5xl">
                        02.
                    </h2>
                    <div className="flex flex-col gap-4 w-[190%] min-lg:w-[400px] lg:w-[550px] xl:w-[580px] min-[2000px]:w-[1000px]">
                        <h2 className="text-blue-950 font-extrabold text-3xl xl:text-4xl 2xl:text-5xl">
                            We arrange a vehicle inspection
                        </h2>
                        <p className="text-blue-950 font-normal text-[18px] xl:text-[20px] 2xl:text-[24px] mb-6">
                            We do not own cars in our offer, so we must first thoroughly check them. We know specific models and motorizations perfectly and we know what to focus on for each of them.
                        </p>
                        {
                            how_it_works[1].map((item) => (
                                <HtwDrop paragraph={item.paragraph} header={item.header} key={item.paragraph} />
                            ))
                        }
                    </div>
                </motion.div>
                <motion.div 
                    className='self-end w-[100%] sm:w-[370px] relative h-[320px] '
                    initial={{ opacity: 0.5, x: 200 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ ease: 'easeInOut' }}>
                    <img src={htw2} alt="We arrange a vehicle inspection." className='w-[330px] xl:w-[400px]' />
                    <div className="flex gap-4 pl-4 pr-2 py-6 border border-gray-300 shadow-xl rounded-sm absolute w-[270px] xl:w-[330px] -bottom-24 bg-white">
                        <div>
                            <CiClock2 className="w-14 h-14 text-blue-600" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-[16px] font-extrabold text-blue-950 xl:text-[20px]">
                                Result of inspection within 2 working days
                            </h2>
                            <p className="text-[15px] font-medium text-blue-950 leading-6 xl:text-[20px]">
                                We are able to supply the result of the inspection within 2 working days of it being ordered in 93% of the cases.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="flex justify-between flex-col min-lg:flex-row gap-6 min-lg:gap-0 lg:mt-32 xl:mt-44 mt-36">
                <motion.div 
                    className='flex min-lg:gap-12 items-start gap-4'
                    initial={{ opacity: 0.5, x: -200 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ ease: 'easeInOut' }}>
                    <h2 className="text-blue-600 font-extrabold text-3xl min-lg:text-4xl xl:text-5xl">
                        03.
                    </h2>
                    <div className="flex flex-col gap-4 w-[190%] min-lg:w-[400px] lg:w-[550px] xl:w-[580px] min-[2000px]:w-[1000px]">
                        <h2 className="text-blue-950 font-extrabold text-3xl xl:text-4xl 2xl:text-5xl">
                            Seamless and Fast Payments
                        </h2>
                        <p className="text-blue-950 font-normal text-[18px] xl:text-[20px] 2xl:text-[24px] mb-6">
                            You can either pay for the car all at once or Installmentally. We have above-standard conditions agreed with many verified banks and financial service providers.
                        </p>
                        {
                            how_it_works[2].map((item) => (
                                <HtwDrop paragraph={item.paragraph} header={item.header} key={item.paragraph} />
                            ))
                        }
                        <div className='flex gap-4 bg-[#C7FFE9] w-[100%] border border-[#95E7CE] pr-4 mt-8 h-fit'>
                            <div className='bg-[#95E7CE] pr-2 flex items-center'>
                                <img src={sub_htw2} alt="We are your trusted advisor" />
                            </div>
                            <div className='flex flex-col gap-1 py-4'>
                                <h2 className='text-blue-950 text-2xl xl:text-3xl 2xl:text-4xl font-extrabold'>
                                    Driveway Dreams warranty
                                </h2>
                                <p className='text-blue-950  text-[16px] xl:text-[18px] 2xl:text-[20px] font-normal leading-6'>
                                    Because we are buying the car from us, we assume the warranty ourselves. &nbsp;
                                    <strong>
                                    Ensure you only purchase your cars from us, &nbsp;
                                    </strong>
                                    not via an intermediary.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    className='relative w-[100%] min-lg:w-[420px] h-[550px]  xl:w-[700px] xl:h-[700px]'
                    initial={{ opacity: 0.5, x: 200 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ ease: 'easeInOut' }}>
                    <div className="w-[100%] h-[360px] bg-[#EDF1F8] clip-htw_comp" />
                    <div className="w-[100%] h-[150px] bg-[#D7E1EF] clip-under" />
                    <div className="absolute w-[100%] flex flex-col gap-4 top-0">
                        <img src={htw3} alt="We arrange a vehicle inspection." className='w-[300px]' />
                        <div className="flex gap-4 pl-4 pr-2 py-6 border border-gray-300 shadow-xl rounded-sm absolute w-[300px] -bottom-2 bg-white">
                            <div>
                                <IoCar className="w-14 h-14 text-blue-600" />
                            </div>
                            <div className="flex flex-col gap-3 pr-4">
                                <h2 className="text-[16px] font-extrabold text-blue-950">
                                    Installmental payments for all cars
                                </h2>
                                <p className="text-[15px] font-medium text-blue-950 leading-6">
                                    For each car, we can fix a specific monthly amount convenient for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="flex justify-between flex-col min-lg:flex-row gap-6 min-lg:gap-0 lg:mt-20">
                <motion.div 
                    className='flex min-lg:gap-12 items-start gap-4 '
                    initial={{ opacity: 0.5, x: -200 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ ease: 'easeInOut' }}>
                    <h2 className="text-blue-600 font-extrabold text-3xl min-lg:text-4xl xl:text-5xl">
                        04.
                    </h2>
                    <div className="flex flex-col gap-4 w-[190%] min-lg:w-[400px] lg:w-[550px] xl:w-[580px] min-[2000px]:w-[1000px]">
                        <h2 className="text-blue-950 font-extrabold text-3xl xl:text-4xl 2xl:text-5xl">
                            Risk-free purchase
                        </h2>
                        <p className="text-blue-950 font-normal text-[18px] xl:text-[20px] 2xl:text-[24px] mb-6">
                            There's no risk to you when you buy a car on Driveway Dreams. We pride ourselves on transparency and the perfect condition of the cars, and we provide our customers with maximum guarantees.
                        </p>
                        {
                            how_it_works[3].map((item) => (
                                <HtwDrop paragraph={item.paragraph} header={item.header} key={item.paragraph} />
                            ))
                        }
                    </div>
                </motion.div>
                <motion.div 
                    className='w-[100%] min-lg:w-[400px] h-[330px] bg-white relative  xl:w-[700px] xl:h-[400px]'
                    initial={{ opacity: 0.5, x: 200 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ ease: 'easeInOut' }}>
                    <div className="w-[100%] h-[100%] bg-[#EDF1F8] clip-htw_comp" />
                    <div className="w-[100%] h-[150px] bg-[#D7E1EF] clip-under" />
                    <div className="flex flex-col gap-4 absolute top-10">
                        <div className="bg-white flex gap-4 items-center w-[270px] shadow-xl border border-gray-200 rounded-lg">
                            <div className="bg-[#EDF1F8] p-4">
                                <FaAward className="w-10 h-10 text-blue-600" />
                            </div>
                            <p className="text-[16px] font-extrabold text-blue-950 pr-2">
                                Only tried and tested dealers
                            </p>
                        </div>
                        <div className="bg-white flex gap-4 items-center w-[270px] shadow-xl border border-gray-200 rounded-lg translate-x-8">
                            <div className="bg-[#EDF1F8] p-4">
                                <FaScrewdriverWrench className="w-10 h-10 text-blue-600" />
                            </div>
                            <p className="text-[16px] font-extrabold text-blue-950 pr-2">
                                Free 6-month warranty
                            </p>
                        </div>
                        <div className="bg-white flex gap-4 items-center w-[270px] shadow-xl border border-gray-200 rounded-lg translate-x-16">
                            <div className="bg-[#EDF1F8] p-4">
                                <TbCoinEuroFilled className="w-10 h-10 text-blue-600" />
                            </div>
                            <p className="text-[16px] font-extrabold text-blue-950 pr-2">
                            Return the car within 14 days
                            </p>
                        </div>                    
                    </div>
                </motion.div>
            </div>

            <div className="flex justify-between flex-col min-lg:flex-row gap-6 min-lg:gap-0 lg:mt-20 mt-32">
                <motion.div 
                    className='flex min-lg:gap-12 items-start gap-4 '
                    initial={{ opacity: 0.5, x: -200 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ ease: 'easeInOut' }}>
                    <h2 className="text-blue-600 font-extrabold text-3xl min-lg:text-4xl xl:text-5xl">
                        05.
                    </h2>
                    <div className="flex flex-col gap-4 w-[190%] min-lg:w-[400px] lg:w-[550px] xl:w-[580px] min-[2000px]:w-[1000px]">
                        <h2 className="text-blue-950 font-extrabold text-3xl xl:text-4xl 2xl:text-5xl">
                            We’ll deliver it to your house, or a pick-up point
                        </h2>
                        {
                            how_it_works[4].map((item) => (
                                <HtwDrop paragraph={item.paragraph} header={item.header} key={item.paragraph} />
                            ))
                        }
                        <div className='flex gap-4 bg-[#C7FFE9] w-[100%] border border-[#95E7CE] pr-4 mt-8 h-fit'>
                            <div className='bg-[#95E7CE] pr-2 flex items-center'>
                                <img src={sub_htw3} alt="Unique experience guaranteed" />
                            </div>
                            <div className='flex flex-col gap-1 py-4'>
                                <h2 className='text-blue-950 text-2xl xl:text-3xl 2xl:text-4xl font-extrabold'>
                                    Unique experience guarantee
                                </h2>
                                <p className='text-blue-950  text-[16px] xl:text-[18px] 2xl:text-[20px] font-normal leading-6'>
                                    We can guarantee you that having the car delivered to your home is a unique experience. That’s what our customers say, and we believe them.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    className='relative w-[100%] sm:w-[420px] h-[330px] flex flex-col gap-4 self-end'
                    initial={{ opacity: 0.5, x: 200 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ ease: 'easeInOut' }}>
                    <img src={htw4} alt="Delivery to everywhere." className='w-[350px]' />
                    <div className="flex gap-4 pl-4 pr-2 py-6 border border-gray-300 shadow-xl rounded-md absolute w-[380px] -bottom-6 bg-white">
                        <div>
                            <TbTruckDelivery className="w-14 h-14 text-blue-600" />
                        </div>
                        <div className="flex flex-col gap-3 pr-4">
                            <h2 className="text-[16px] font-extrabold text-blue-950 xl:text-[20px]">
                                Delivery to your home
                            </h2>
                            <p className="text-[15px] font-medium text-blue-950 leading-6 xl:text-[18px]">
                                We will bring your dream car directly to your door step.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
})

export default HowItWorksComponent