import { useEffect, useState } from 'react';
import { motion } from 'motion/react'

import { AiFillPlusCircle } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import FilterBox from './filter_box';
import useSearchContext from '../../hooks/search_hook';


const AllSearchTab = () => {    
    // state to control when the modal for any filter should be opened or closed
    const [filterControl, setFilterControl] = useState([
        false, // price from
        false, // price to
        false, // registration from
        false, // registration to
        false, // mileage from
        false, // mileage to
        false, // fuel all
        false, // power from
        false, // power to
        false  // vehicle type all
    ])

    // data for price
    const priceData = [ 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000 ]


    // // data for mileage
    // const mileageData = [ '10,000', '50,000', '100,000', '150,000', '200,000', '250,000', '300,000', '350,000', '400,000', '450,000', '500,000', '550,000', '600,000', '650,000', '700,000', '750,000', '800,000', '850,000', '900,000', '950,000', '1,000,000' ]

    // data for fuel
    const fuelData = [ 'Petrol', 'Diesel', 'CNG', 'LPG' ]

    // data for power in hp
    // const powerData = [ '34hp', '50hp', '59hp', '74hp', '89hp', '99hp', '117hp', '129hp', '148hp', '197hp', '248hp', '299hp', '353hp', '397hp' ]

    // data for vehicle type
    const vehicleTypeData = [ 'Hatchback', 'Sedan', 'SUV', 'Crossover', 'Pickup Trucks', 'Hybrid', 'Electric', 'Wagons', 'Coupes', 'Convertibles', 'Vans' ]


    // context state for filters
    const { search, setSearch } = useSearchContext()

    // error for managing price
    const [error, setError] = useState(false)

    useEffect(() => {
        search.price_from > search.price_to ? setError(true) : setError(false)
    }, [search])

    // function to change which modal is displayed
    const changeFilterModal = (index: number) => {
        const temp = [ false, false, false, false, false, false, false, false, false, false]
        temp[index] = !filterControl[index]
        setFilterControl(temp)
    }

    // set the choice of user into search object
    const collectUserSearch = (name: string, value: string) => {
        setSearch({ ...search, [name]: value}) 
    } 


  return (
    <div className="text-blue-950 flex flex-col px-6 gap-6">
        <section className='flex gap-2 w-[100%] flex-col'>
            <div className='flex gap-2 w-[100%] flex-wrap'>
                {
                    Object.entries(search).map(([key, value]) => (
                        (value !== '' && value !== 0) && <button onClick={() => collectUserSearch(key, '')} key={key} className='rounded-2xl py-2 px-3 bg-blue-600 text-white font-bold shadow-lg hover:shadow-xl text-sm flex gap-3 items-center'>
                            <div className='flex flex-col items-center'>
                                <p className='text-[10px] font-bold'>
                                    {key}
                                </p>
                                <span>
                                    {
                                        typeof value === 'number' ? value.toLocaleString() : value
                                    }
                                </span>
                            </div>
                            <IoClose className='text-white w-6 h-6' />
                    </button>
                    ))
                }
            </div>
            {
                error && <p className='text-[12px] font-semibold text-red-600'>
                    price_from can't be more than price_to
                </p>
            }
        </section>


        <section className="flex flex-col gap-2">
            <h3 className="text-[13px] text-blue-950 font-extrabold uppercase">
                Make and Model
            </h3>
            <button 
                className="w-[100%] hover:shadow-lg rounded-md border border-gray-600 px-3 py-2 outline-none flex justify-between items-center"
                >
                <div className="flex items-center gap-3">
                    <AiFillPlusCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-[15px] font-medium text-gray-700">Add a car</span>
                </div>
                <FaChevronRight className="w-4 h-4 text-blue-600" />
            </button>
        </section>

        <section className="flex flex-col gap-2">
            <h3 className="text-[13px] text-blue-950 font-extrabold uppercase">
                PRICE ($)
            </h3>
            <div className="w-[100%] rounded-md border border-gray-600 flex justify-between items-center">
                <button 
                    className="w-[50%] flex justify-between py-[2.5px] items-center pl-3 px-2 relative border-r border-r-gray-600"
                    onClick={() => changeFilterModal(0)}>
                    <span className="text-[15px] font-medium text-gray-700">
                        From
                    </span>
                    <motion.span
                        animate={{ rotate: filterControl[0] ? 180 : 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}>
                        <RiArrowDropDownLine className="w-8 h-8 text-gray-500" />
                    </motion.span>
                    {
                        filterControl[0] && <FilterBox name='price_from' price={priceData} />
                    }
                </button>
                <button 
                    className="w-[50%] flex justify-between py-[2.5px] items-center pl-3 px-2 relative"
                    onClick={() => changeFilterModal(1)}>
                    <span className="text-[15px] font-medium text-gray-700">
                        To
                    </span>
                    <motion.span
                        animate={{ rotate: filterControl[1] ? 180 : 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}>
                        <RiArrowDropDownLine className="w-8 h-8 text-gray-500" />
                    </motion.span>
                    {
                        filterControl[1] && <FilterBox name='price_to' price={priceData} />
                    }
                </button>
            </div>
        </section>

        {/* <section className="flex flex-col gap-2">
            <h3 className="text-[13px] text-blue-950 font-extrabold uppercase">
                MILEAGE
            </h3>
            <div className="w-[100%] rounded-md border border-gray-600 flex justify-between items-center">
                <button 
                    className="w-[50%] flex justify-between py-[2.5px] outline-none items-center pl-3 px-2 border-r border-r-gray-600 relative"
                    onClick={() => changeFilterModal(4)}>
                    <span className="text-[15px] font-medium text-gray-700">
                        From
                    </span>
                    <motion.span
                        animate={{ rotate: filterControl[4] ? 180 : 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}>
                        <RiArrowDropDownLine className="w-8 h-8 text-gray-500" />
                    </motion.span>
                    {
                        filterControl[4] && <FilterBox options={mileageData} />
                    }
                </button>
                <button 
                    className="w-[50%] flex justify-between py-[2.5px] outline-none items-center pl-3 px-2 relative"
                    onClick={() => changeFilterModal(5)}>
                    <span className="text-[15px] font-medium text-gray-700">
                        To
                    </span>
                    <motion.span
                        animate={{ rotate: filterControl[5] ? 180 : 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}>
                        <RiArrowDropDownLine className="w-8 h-8 text-gray-500" />
                    </motion.span>
                    {
                        filterControl[5] && <FilterBox options={mileageData} />
                    }
                </button>
            </div>
        </section> */}

        <section className="flex flex-col gap-2">
            <h3 className="text-[13px] text-blue-950 font-extrabold uppercase">
                FUEL
            </h3>
            <div className="w-[100%] relative rounded-md border border-gray-600 flex justify-between items-center">
                <button onClick={() => collectUserSearch('fuel', 'diesel')} className="w-[45%] relative py-[6px] tracking-wide outline-none text-[15px] font-semibold text-gray-700 border-r border-r-gray-600">
                    Diesel
                </button>
                <button onClick={() => collectUserSearch('fuel', 'petrol')} className="w-[45%] py-[6px] tracking-wide outline-none text-[15px] font-semibold text-gray-700 border-r border-r-gray-600">
                    Petrol
                </button>
                <button onClick={() => changeFilterModal(6)}>
                    <motion.span
                        animate={{ rotate: filterControl[6] ? 180 : 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}>
                        <RiArrowDropDownLine className="w-8 h-8 text-gray-500" />
                    </motion.span>
                    {
                        filterControl[6] && <FilterBox name='fuel' options={fuelData} />
                    }
                </button>
            </div>
        </section>

        {/* <section className="flex flex-col gap-2">
            <h3 className="text-[13px] text-blue-950 font-extrabold uppercase">
                POWER
            </h3>
            <div className="w-[100%] rounded-md border border-gray-600 flex justify-between items-center">
                <button 
                    className="w-[50%] flex justify-between py-[2.5px] items-center outline-none pl-3 px-2 border-r border-r-gray-600 relative"
                    onClick={() => changeFilterModal(7)}>
                    <span className="text-[15px] font-medium text-gray-700">
                        From
                    </span>
                    <motion.span
                        animate={{ rotate: filterControl[7] ? 180 : 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}>
                        <RiArrowDropDownLine className="w-8 h-8 text-gray-500" />
                    </motion.span>
                    {
                        filterControl[7] && <FilterBox options={powerData} />
                    }
                </button>
                <button 
                    className="w-[50%] flex justify-between py-[2.5px] items-center outline-none pl-3 px-2 relative"
                    onClick={() => changeFilterModal(8)}>
                    <span className="text-[15px] font-medium text-gray-700">
                        To
                    </span>
                    <motion.span
                        animate={{ rotate: filterControl[8] ? 180 : 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}>
                        <RiArrowDropDownLine className="w-8 h-8 text-gray-500" />
                    </motion.span>
                    {
                        filterControl[8] && <FilterBox options={powerData} />
                    }
                </button>
            </div>
        </section> */}
        
        <section className="flex flex-col gap-2">
            <h3 className="text-[13px] text-blue-950 font-extrabold uppercase">
                Vehicle Condition
            </h3>
            <div className="w-[100%] rounded-md border border-gray-600 flex justify-between items-center">
                <button onClick={() => collectUserSearch('condition', 'new')} className="w-[50%] py-[6px] outline-none tracking-wide text-[15px] font-semibold text-gray-700 border-r border-r-gray-600">
                    New
                </button>
                <button onClick={() => collectUserSearch('condition', 'used')} className="w-[50%] py-[6px] outline-none tracking-wide text-[15px] font-semibold text-gray-700">
                    Used
                </button>
            </div>
        </section>

        <section className="flex flex-col gap-2">
            <h3 className="text-[13px] text-blue-950 font-extrabold uppercase">
                Vehicle Type
            </h3>
            <button 
                className="w-[100%] border border-gray-500 rounded-md flex justify-between py-[2.5px] items-center outline-none pl-3 px-2 relative"
                onClick={() => changeFilterModal(9)}>
                <span className="text-[15px] font-medium text-gray-700">
                    All
                </span>
                <motion.span
                        animate={{ rotate: filterControl[9] ? 180 : 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}>
                        <RiArrowDropDownLine className="w-8 h-8 text-gray-500" />
                    </motion.span>
                    {
                        filterControl[9] && <FilterBox name='category' options={vehicleTypeData} />
                    }
            </button>
        </section>

        <section className="flex flex-col gap-2">
            <h3 className="text-[13px] text-blue-950 font-extrabold uppercase">
                Vehicle Color
            </h3>
            <div className="w-[100%] flex flex-wrap mt-4 gap-2">
                <motion.button  onClick={() => collectUserSearch('color', 'white')}  className="w-7 h-7 rounded-full bg-white border border-gray-400 outline-none" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: 'easeInOut' }} />
                <motion.button  onClick={() => collectUserSearch('color', 'black')}  className="w-7 h-7 rounded-full bg-black border border-black outline-none" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: 'easeInOut' }} />
                <motion.button  onClick={() => collectUserSearch('color', 'red')}  className="w-7 h-7 rounded-full bg-red-500 border border-red-500 outline-none" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: 'easeInOut' }} />
                <motion.button  onClick={() => collectUserSearch('color', 'blue')}  className="w-7 h-7 rounded-full bg-blue-500 border border-blue-500 outline-none" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: 'easeInOut' }} />
                <motion.button  onClick={() => collectUserSearch('color', 'purple')}  className="w-7 h-7 rounded-full bg-purple-500 border border-purple-500 outline-none" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: 'easeInOut' }} />
                <motion.button  onClick={() => collectUserSearch('color', 'green')}  className="w-7 h-7 rounded-full bg-green-500 border border-green-500 outline-none" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: 'easeInOut' }} />
                <motion.button  onClick={() => collectUserSearch('color', 'orange')}  className="w-7 h-7 rounded-full bg-orange-500 border border-orange-500 outline-none" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: 'easeInOut' }} />
                <motion.button  onClick={() => collectUserSearch('color', 'yellow')}  className="w-7 h-7 rounded-full bg-yellow-500 border border-yellow-500 outline-none" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: 'easeInOut' }} />
                <motion.button  onClick={() => collectUserSearch('color', 'cyan')}  className="w-7 h-7 rounded-full bg-cyan-500 border border-cyan-500 outline-none" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: 'easeInOut' }} />
                <motion.button  onClick={() => collectUserSearch('color', 'indigo')}  className="w-7 h-7 rounded-full bg-indigo-500 border border-indigo-500 outline-none" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: 'easeInOut' }} />
                <motion.button  onClick={() => collectUserSearch('color', 'violet')}  className="w-7 h-7 rounded-full bg-violet-500 border border-violet-500 outline-none" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4, ease: 'easeInOut' }} />
            </div>
        </section>
    </div>
  )
}

export default AllSearchTab