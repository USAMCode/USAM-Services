import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring'; // Changed import from 'react-spring'
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import SectionWrapper from '@/section/SectionWrapper';


const Home = () => {
  const images = [
    "/images/AdobeStock_286032339.jpeg",
    "/images/AdobeStock_501059332.jpeg",
    "/images/AdobeStock_589427987.jpeg",
  ];


  const services = [
    {
      "title": "Automation Service",
      "content": "Unlock innovation and creativity and achieve outcomes faster with automation."
    },
    {
      "title": "Consulting Service",
      "content": "Guiding Your Project Towards Success: Expert Consulting Every Step of the Way."
    },
    {
      "title": "Data & Insights Service",
      "content": "The right people get the right information at the right time with connected data."
    },
  ]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const transitions = useTransition(images[index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="flex flex-row bg-gray-50 h-screen">
      <div className="flex flex-col w-3/5 absolute z-10 top-96 xs:w-full md:hidden lg:hidden sm:hidden justify-center items-center text-center bg-fixed">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="text-5xl md:text-6xl text-black font-bold mb-4"
        >
          {services[index % services.length].title}
        </motion.div>
        <div className="text-2xl md:text-xl text-black mb-8">
          {services[index % services.length].content}
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-full text-lg md:text-xl hover:bg-orange-600 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="w-full xs:hidden sm:hidden md:hidden lg:hidden items-center justify-end">
        <div className="relative top-24 w-full h-[75%] object-contain">
          {transitions((style, item) => (
            <animated.div style={{ ...style, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', }}>
              <img src={item} className="w-full h-full object-cover" alt={`slide ${index}`} />
            </animated.div>
          ))}
        </div>
      </div>

      {/* ========================================================================== */}

      <div className='2xl:hidden xl:hidden xs:hidden flex flex-col w-full h-full justify-between'>
        <div className="relative flex flex-col w-full justify-center items-center h-full rounded-md">
          <div className="relative w-full h-3/4 object-contain justify-center items-center rounded-md">
            {transitions((style, item) => (
              <animated.div style={{ ...style, position: 'absolute', justifyContent: "center", alignContent: "center", top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
                <img src={item} className="w-full h-3/4 object-cover" alt={`slide ${index}`} />
              </animated.div>
            ))}
            <div className="flex absolute flex-col w-full h-full xs:hidden 2xl:hidden xl:hidden justify-center items-center text-center bg-fixed">
              <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="text-4xl md:text-5xl sm:text-5xl lg:text-6xl text-black font-bold mb-4"
              >
                Welcome to Our Service
              </motion.div>
              <div className="text-lg md:text-xl text-black mb-8">
                We provide the best solutions to enhance your business and life.
              </div>
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <button className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold md:text-xl hover:bg-orange-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Home, "Home");
