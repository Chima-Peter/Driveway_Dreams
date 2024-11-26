import { motion } from "framer-motion"
import rotateVariant from "../../utils/rotate"

interface ButtonTypes {
    isLoading: boolean,
    text: string,
}

const Button = ({isLoading, text}: ButtonTypes) => {
    return (
        <motion.button type="submit" 
            className="text-[1rem] text-white self-center flex justify-center font-semibold w-[100%] mt-4 p-3 rounded-md bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-900 hover:to-blue-900 shadow-2xl hover:shadow-blue-900">
            {
                    !isLoading && <span>{text}</span>
                }
                {
                    isLoading && <motion.div variants={rotateVariant} animate="final" transition= {{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 0.3
                    }}
                    className='w-6 p-3 h-6 border-t-2 border-b-2 border-solid border-r-0 border-red border-l-2 rounded-full'></motion.div>
                }
            </motion.button>
    )
}

export default Button