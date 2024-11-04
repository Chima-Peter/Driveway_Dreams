import { motion } from "framer-motion"
import rotateVariant from "../../utils/rotate"

interface ButtonTypes {
    isLoading: boolean,
    text: string,
}

const Button = ({isLoading, text}: ButtonTypes) => {
    return (
        <motion.button type="submit" className="text-[1rem] text-white font-semibold w-[100%] py-2 px-2 border-[#17B3A6] border rounded-xl bg-[#17B3A6] hover:bg-white">
            {
                    !isLoading && <span>{text}</span>
                }
                {
                    isLoading && <motion.div variants={rotateVariant} animate="final" transition= {{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 0.3
                    }}
                    className='w-4 p-1 h-4 border-t-2 border-b-2 border-solid border-r-0 border-red border-l-2 rounded-full hover:bg-[#17B3A6]'></motion.div>
                }
            </motion.button>
    )
}

export default Button