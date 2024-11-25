import { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "motion/react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";

import suv from "../../../assets/images/landing_page/suv.webp";
import family from "../../../assets/images/landing_page/family.webp";
import estate from "../../../assets/images/landing_page/estate.webp";
import luxury from "../../../assets/images/landing_page/luxury.webp";
import nearly_new from "../../../assets/images/landing_page/nearly-new.webp";
import sport from "../../../assets/images/landing_page/sport.webp";


const CarSlides = () => {
  // Initial state for car data (array of car objects with name, image, and link)
  const [cars, setCars] = useState([
    { car: "SUV", image: suv, link: "suv" },
    { car: "Family Car", image: family, link: "family-car" },
    { car: "Estate", image: estate, link: "estate" },
    { car: "Luxury", image: luxury, link: "luxury" },
    { car: "New", image: nearly_new, link: "nearly-new" },
    { car: "Sport", image: sport, link: "sport" },
  ]);

  // State to control the horizontal position of the slider
  const [shift, setShift] = useState(0);

  // State to track the index of the next car to be moved to the left
  const [leftIndex, setLeftIndex] = useState(0);

  // Function to shift elements to the left
  const shiftLeft = () => {
    setShift((prev) => prev - 250); // Move the slider to the left

    // Move the first element to the end of the array
    setCars((prevCars) => [...prevCars, prevCars[leftIndex]]);

    // Update the left index (reset to 0 if it exceeds array length)
    setLeftIndex((prevIndex) =>
      prevIndex === cars.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to shift elements to the right
  const shiftRight = () => {
    if (shift < 0) {
      setShift((prev) => prev + 250); // Move the slider to the right
    }
  };

  return (
    <section className="flex flex-col gap-8 mt-[130px] px-4 md:px-8 tablet:px-12 w-[100%] overflow-hidden">
      {/* Section Header */}
      <h2 className="text-3xl tracking-tight font-extrabold text-blue-950">
        Popular at Driveway Dreams
      </h2>

      {/* Slider Container */}
      <motion.div
        className="flex gap-8"
        animate={{ x: shift }} // Animate the horizontal position
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      >
        {/* Render each car as a clickable card */}
        {cars.map((car, index) => (
          <Link
            to={`/${car.link}`} // Navigate to the car's link
            key={index} // Unique key for each car
            className="w-[250px] h-[150px] group/link rounded-xl border border-[#D7E1EF] shadow-md bg-white flex-shrink-0 flex flex-col items-center justify-center text-blue-950 hover:border-blue-600 hover:border-2 hover:text-blue-600"
          >
            {/* Car Title and Hover Icon */}
            <div className="flex items-center">
              <h2 className="text-lg font-extrabold">{car.car}</h2>
              {/* Icon animates when hovered */}
              <motion.div
                className="hidden group-hover/link:flex"
                initial={{ x: 0, opacity: 0 }}
                animate={{ opacity: 1, x: 10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <FaLongArrowAltRight className="w-5 h-5 text-blue-600" />
              </motion.div>
            </div>
            {/* Car Image */}
            <img
              src={car.image}
              alt={`Image of ${car.car}`} // Accessible image description
              className="max-h-[100px] object-contain"
            />
          </Link>
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex gap-6">
        {/* Shift Right Button */}
        <button
          className={`outline-none p-3 rounded-md border ${shift === 0 ? 'border-gray-400  text-gray-400 cursor-default' : 'border-blue-600  text-blue-600'}`}
          onClick={shiftRight}
        >
          <GrPrevious className="w-5 h-5" />
        </button>
        {/* Shift Left Button */}
        <button
          className="outline-none p-3 rounded-md border border-blue-600"
          onClick={shiftLeft}
        >
          <GrNext className="w-5 h-5 text-blue-600" />
        </button>
      </div>
    </section>
  );
};

export default CarSlides;
