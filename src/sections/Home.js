import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring'; // Changed import from 'react-spring'
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import SectionWrapper from '@/section/SectionWrapper';

const Home = () => {
  const images = [
    "https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg",
    "https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg",
    "https://usam.s3.ap-south-1.amazonaws.com/Image3.jpg",
    "https://usam.s3.ap-south-1.amazonaws.com/Image4.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const transitions = useTransition(images[index], {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0},
  });

  return (
    <div className="flex flex-row bg-[#CDD2E8] h-screen">
      <div className="flex flex-col w-3/5 justify-center items-center text-center bg-fixed">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="text-4xl md:text-6xl text-black font-bold mb-4"
        >
          Welcome to Our Service
        </motion.div>
        <div className="text-lg md:text-xl text-black mb-8">
          We provide the best solutions to enhance your business and life.
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-full text-lg md:text-xl hover:bg-orange-600 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="flex w-2/5 items-center justify-end">
        <div className="w-5/6 h-3/5 relative rounded-md bg-secondary z-10">
          <div className="absolute w-full h-full rounded-md top-16 right-16 bg-white">
            <div className="relative w-full h-full object-contain">
              {transitions((style, item) => (
                <animated.div style={{ ...style, position: 'absolute', top: 0, left: 0, width: '100%', height:'100%', objectFit:'cover' }}>
                  <img src={item} className="w-full h-full object-cover" alt={`slide ${index}`} />
                </animated.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Home, "Home");
