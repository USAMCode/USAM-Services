// src/components/Projects.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { fadeIn, fadeScaleIn, textVariant } from "@/utils/motion";
import SectionWrapper from "@/section/SectionWrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Projects = [
    {
      img: "https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg",
      content: "",
    },
    {
      img: "https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg",
      content: "",
    },
    {
      img: "https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg",
      content: "",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const isLastSlide = currentIndex === Projects.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="w-full relative ">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 focus:outline-none gap-4  justify-center items-center w-full"
            >
              <div className="flex flex-col gap-4 h-full w-full justify-center items-center">
                <img
                  src={project.img}
                  alt="Welcome to USAM"
                  className="w-full bg-white h-2/4"
                />
                <div className="text-black">Welcome to USAM</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <>
      <div className="flex flex-col gap-8 w-[90%] xs:w-[95%] mx-auto">
        <motion.div variants={textVariant()}>
          <div className={styles.sectionSubText}>Products</div>
          <div className="text-4xl font-semibold">For You.</div>
        </motion.div>
        <div className="flex xs:flex-col sm:flex-col md:flex-1 md:flex-wrap md:gap-8 md:justify-center lg:justify-between 2xl:justify-around lg:flex-row lg:flex-nowrap xs:gap-8 sm:gap-8 w-full justify-between">
          {/* <div className="h-full flex lg:w-[90%] justify-center"> */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className=" bg-second w-96 sm:w-full xs:w-full md:w-80 lg:w-96 h-80 relative rounded-lg"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl h-80 w-96 xs:w-full sm:w-full md:w-80 lg:w-96 flex rounded-xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full p-10 flex flex-col gap-2 lg:p-5 lg:gap-2 md:gap-1">
                  <img
                    src="/img/1.png"
                    className=" h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                  />
                  <div className="text-2xl font-semibold lg:text-xl md:text-lg xl:text-2xl">
                    Gap Hunter
                  </div>
                  <div className="lg:text-[14px] md:text-[14px] text-lg xs:text-base">
                    GapHunter automatically detects any gaps in your sketches
                    and zooms directly to the area, allowing you to quickly and
                    accurately address issues that could impact your design.{" "}
                  </div>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1 ">
                    View
                  </button>
                </div>
              </motion.div>
            </motion.div>
          {/* </div> */}
          {/* <div className="h-full flex justify-center"> */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className="bg-second relative w-96 sm:w-full xs:w-full md:w-80 lg:w-96 h-80 rounded-lg"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl h-80 w-96 xs:w-full sm:w-full md:w-80 lg:w-96 flex rounded-xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full p-10 flex flex-col gap-3 md:gap-1">
                  <img
                    src="/img/2.png"
                    className="h-10 w-10 object-cover lg:h-14 lg:w-14 md:h-11 md:w-11 xl:h-12 xl:w-12"
                  />
                  <div className="text-2xl font-semibold lg:text-xl md:text-lg xl:text-2xl">
                    Dim Check
                  </div>
                  <div className="lg:text-[14px] md:text-[14px] text-lg xs:text-base">
                    DimCheck scans your drawings to identify any overridden
                    dimensions, ensuring that all measurements adhere to your
                    specified standards{" "}
                  </div>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1 ">
                    View
                  </button>
                </div>
              </motion.div>
            </motion.div>
          {/* </div> */}
          {/* <div className="h-full flex justify-center"> */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className="bg-second relative w-96 h-80 md:w-80 lg:w-96 sm:w-full xs:w-full rounded-lg"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl h-80 w-96 sm:w-full xs:w-full md:w-80 lg:w-96 flex rounded-xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full p-10 flex flex-col gap-3">
                  <img
                    src="/img/3.png"
                    className="w-10 h-10 object-cover lg:h-14 lg:w-14 xl:h-12 xl:w-12"
                  />
                  <div className="text-2xl font-semibold lg:text-xl xl:text-2xl">
                    Balloon Master
                  </div>
                  <div className="lg:text-[14px] text-lg xs:text-base">
                    BalloonMaster, the ultimate tool for ballooning dimensions
                    specifically for inspection purposes in Inventor.{" "}
                  </div>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1">
                    View
                  </button>
                </div>
              </motion.div>
            </motion.div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
