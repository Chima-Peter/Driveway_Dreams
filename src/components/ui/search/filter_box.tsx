import { motion } from 'motion/react'
import useSearchContext from '../../hooks/search_hook';


interface FilterOptions {
    options?: string[];
    price?: number[];
    name: string
}

const FilterBox = ({ options, name, price }: FilterOptions) => {

    // context state for filters
    const { search, setSearch } = useSearchContext()

    
     // set the choice of user into search object for strings
    const collectUserSearchString = (value: string) => {
        setSearch({ ...search, [name]: value})
    } 

    // set the choice of user into search object for numbers
    const collectUserSearchNumber = (value: number) => {
        setSearch({ ...search, [name]: value})
    } 

    
  return (
    <motion.ul 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-[100%] max-h-[150px] overflow-y-auto asideScroll rounded-lg bg-white shadow-2xl absolute top-12 border border-gray-300 left-0 z-10">
        {
            options?.map((option) => (
                <li 
                    key={option}
                    onClick={() => collectUserSearchString(option)}
                    className="text-sm py-2 px-4 hover:bg-gray-100 active:bg-gray-100 hover:font-bold active:font-bold first:rounded-t-md last:rounded-b-md cursor-pointer font-semibold">
                    {option}
                </li>
            ))
        }
        {
            price?.map((option) => (
                <li 
                    key={option}
                    onClick={() => collectUserSearchNumber(option)}
                    className="text-sm py-2 px-4 hover:bg-gray-100 active:bg-gray-100 hover:font-bold active:font-bold first:rounded-t-md last:rounded-b-md cursor-pointer font-semibold">
                    {option.toLocaleString()}
                </li>
            ))
        }
    </motion.ul>
  )
}

export default FilterBox