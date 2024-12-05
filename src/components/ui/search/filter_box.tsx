import { motion } from 'motion/react'


interface FilterOptions {
    options: string[];
}

const FilterBox = ({ options }: FilterOptions) => {
    // function to console.log value whenever button is clicked
    const executeOnClick = (value: string) => {
        console.log(value)
    } 
  return (
    <motion.ul 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-[100%] max-h-[150px] overflow-y-auto asideScroll rounded-lg bg-white shadow-2xl absolute top-12 border border-gray-300 left-0 z-10">
        {
            options.map((option) => (
                <li 
                    key={option}
                    onClick={() => executeOnClick(option)}
                    className="text-sm py-2 px-4 hover:bg-gray-100 active:bg-gray-100 hover:font-bold active:font-bold first:rounded-t-md last:rounded-b-md cursor-pointer font-semibold">
                    {option}
                </li>
            ))
        }
    </motion.ul>
  )
}

export default FilterBox