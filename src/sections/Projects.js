// src/components/Projects.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import SectionWrapper from "@/section/SectionWrapper";
import { Carousel } from "react-bootstrap";

const Projects = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  return (
    <>
      <div className="h-screen w-full flex flex-col gap-4 justify-center bg-quaternary items-center text-center">
        {/* <motion.div
          variants={fadeIn("", "", 0.5, 0.5)}
          className="text-primary font-extrabold text-6xl xs:text-4xl py-1 justify-center items-center text-center"
        >
          PROJECTS
        </motion.div> */}
        {/* <div className="flex w-56 xs:w-44 border-2 justify-center items-center text-center rounded-tr-full rounded-br-full border-secondary"></div> */}
        <div className="flex justify-around w-[90%] mx-auto xs:hidden">
          <div className="relative m-4 text-black transition-transform duration-500 group hover:transform-none">
            <img
              src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
              alt=""
              className="relative z-10 w-[500px] h-72 object-cover transform translate-y-1/2 transition-transform duration-500 group-hover:translate-y-2"
            />
            <div className="relative z-0 py-10 h-72 bg-gradient-to-r from-quaternary via-tertiary to-quaternary shadow-xl transform -translate-y-1/2 transition-transform duration-500 group-hover:translate-y-0">
              <h5 className="mb-3 text-xl font-bold">Welcome</h5>
              <p className="mb-4">to USAM</p>
              {/* <a
                href="#"
                className="inline-block px-3 py-1 text-black border border-black rounded transition-colors duration-500 hover:bg-black hover:text-white"
              >
                More
              </a> */}
            </div>
          </div>
          <div className="relative m-4 text-black transition-transform duration-500 group hover:transform-none">
            <img
              src="https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg"
              alt=""
              className="relative z-10 w-[500px] h-72 object-cover transform translate-y-1/2 transition-transform duration-500 group-hover:translate-y-2"
            />
            <div className="relative z-0 py-10 h-72 bg-gradient-to-r from-quaternary via-tertiary to-quaternary shadow-xl transform -translate-y-1/2 transition-transform duration-500 group-hover:translate-y-0">
              <h5 className="mb-3 text-xl font-bold">Welcome</h5>
              <p className="mb-4">to USAM</p>
              {/* <a
                href="#"
                className="inline-block px-3 py-1 text-black border border-black rounded transition-colors duration-500 hover:bg-black hover:text-white"
              >
                More
              </a> */}
            </div>
          </div>
          <div className="relative m-4 text-black transition-transform duration-500 group hover:transform-none">
            <img
              src="https://usam.s3.ap-south-1.amazonaws.com/Image3.jpg"
              alt=""
              className="relative z-10 w-[500px] h-72 object-cover transform translate-y-1/2 transition-transform duration-500 group-hover:translate-y-2"
            />
            <div className="relative z-0 py-10 h-72 bg-gradient-to-r from-quaternary via-tertiary to-quaternary shadow-xl transform -translate-y-1/2 transition-transform duration-500 group-hover:translate-y-0">
              <h5 className="mb-3 text-xl font-bold">Welcome</h5>
              <p className="mb-4">to USAM</p>
              {/* <a
                href="#"
                className="inline-block px-3 py-1 text-black border border-black rounded transition-colors duration-500 hover:bg-black hover:text-white"
              >
                More
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex w-full h-auto p-4 bg-white xl:hidden">
          <Carousel controls={false} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div className="flex flex-col justify-center items-center bg-white w-full">
                <img src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg" alt=""/>
                <div className="flex text-black">Welcome to USAM</div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
