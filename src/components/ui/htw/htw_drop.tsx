import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";

interface HtwTypes {
  paragraph: string;
  header: string;
}

const HtwDrop = ({ paragraph, header }: HtwTypes) => {
  // State to hide or show dropdown
  const [drop, setDrop] = useState(false);

  // Function to toggle dropdown when user clicks on it
  const toggleDrop = () => {
    setDrop(!drop);
  };

  return (
    <motion.div
      key={paragraph} // Unique key for animations
      className="flex flex-col gap-3 pb-3 border-b border-b-gray-300 w-[100%]"
    >
      {/* Header Button */}
      <button
        onClick={toggleDrop}
        className="w-[100%] flex justify-between px-1 cursor-pointer items-center"
      >
        <p className={`hover:text-blue-600 font-extrabold text-[16px] text-left w-[80%] ${drop ? 'text-blue-600' : 'text-blue-950'}`}>
          {header}
        </p>
        <motion.div
          animate={{ rotate: drop ? 180 : 0 }} // Rotate arrow on toggle
          transition={{ duration: 0.3 }}
        >
          <FaAngleDown className="w-5 h-5 text-blue-600" />
        </motion.div>
      </button>

      {/* Animated Dropdown Content */}
      <AnimatePresence>
        { drop && (
          <motion.p
            className="text-blue-950 font-semibold text-sm px-1 leading-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", type: 'spring' }}
          >
            {paragraph}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HtwDrop;
