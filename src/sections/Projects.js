// src/components/Projects.js
import React, { useEffect, useState } from "react";
import SectionWrapper from "@/section/SectionWrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Projects = [
    {
      "img":"",
      "content":""
    },
    {
      "img":"",
      "content":""
    },
    {
      "img":"",
      "content":""
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      const isLastSlide = currentIndex === Projects.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="w-full relative h-full ">
      <div className="relative overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 focus:outline-none gap-4 h-full justify-center items-center w-full">
              <div className="flex flex-col gap-4 h-full w-full justify-center items-center">
                <img
                  src=""
                  alt="Welcome to USAM"
                  className="w-full bg-white h-2/3" 
                />
                <div className="text-black">Welcome to USAM</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const [index, setIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

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
        <div className="flex justify-around w-[90%] mx-auto xs:hidden md:hidden sm:hidden">
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
        <div className="flex flex-row overflow-hidden w-[90%] mx-auto h-auto 2xl:hidden xl:hidden md:hidden sm:hidden lg:hidden">
          <Slider {...settings} className="flex flex-row w-full p-4 h-full">
            <div className="flex flex-col focus:outline-none gap-4 justify-center items-center w-full">
              <div className="flex flex-col gap-4">
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
                  alt="Welcome to USAM"
                  className="w-full"
                />
                <div className="text-black">Welcome to USAM</div>
              </div>
            </div>
            <div className="flex flex-col focus:outline-none gap-4 justify-center items-center w-full">
              <div className="flex flex-col gap-4">
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
                  alt="Welcome to USAM"
                  className="w-full"
                />
                <div className="text-black">Welcome to USAM</div>
              </div>
            </div>
            <div className="flex flex-col focus:outline-none gap-4 justify-center items-center w-full">
              <div className="flex flex-col gap-4">
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
                  alt="Welcome to USAM"
                  className="w-full"
                />
                <div className="text-black">Welcome to USAM</div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden sm:hidden xs:hidden flex justify-center items-center w-[90%] h-screen mx-auto">
          <CarouselComponent/>
        </div>
        <div className="xs:hidden md:hidden lg:hidden xl:hidden 2xl:hidden flex w-[90%] mx-auto items-center overflow-hidden">
          <div className="flex flex-row gap-4 overflow-x-scroll snap-x snap-mandatory items-center h-2/3">
            <div className="flex flex-col gap-4 h-2/3 w-full p-2 justify-center items-center snap-center shrink-0">
                <img className="object-cover w-full h-full" src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg" alt=""/>
                <div className="text-xl font-semibold text-black">Welcome to USAM</div>
            </div>
            <div className="flex flex-col gap-4 h-2/3 w-full p-2 justify-center items-center snap-center shrink-0">
                <img className="object-cover w-full h-full" src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg" alt=""/>
                <div className="text-xl font-semibold text-black">Welcome to USAM</div>
            </div>
            <div className="flex flex-col gap-4 h-2/3 w-full p-2 justify-center items-center snap-center shrink-0">
                <img className="object-cover w-full h-full" src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg" alt=""/>
                <div className="text-xl font-semibold text-black">Welcome to USAM</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
