// src/components/Projects.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeScaleIn } from "@/utils/motion";
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
      <div className="h-screen w-screen flex flex-col  justify-center md:hidden sm:hidden xs:hidden ">
        <div className=" w-[90%] mx-auto justify-between gap-14 flex flex-col xl:w-[95%] lg:w-[95%] md:gap-5 p-8 rounded-lg">
          {/* Header Section */}
          <div className="flex flex-col gap-2 border-l-8 rounded-xl border-first px-8 xl:gap-2 lg:gap-1">
            <div className="text-5xl font-semibold xl:text-5xl text-first lg:text-5xl">
              Our Products
            </div>
            <div className="text-2xl text-gray-500 font-light xl:text-2xl lg:text-xl">
              Inventor Enhance
            </div>
          </div>
          <div class="bg-gradient-to-r from-first to-black w-1/2">
            <div class=" w-full h-full"></div>
          </div>
          {/* Main Content Section */}
          <div className="flex flex-row md:flex-col w-full h-full justify-around">
            <div className="h-full w-[85%] flex lg:w-[90%] justify-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className=" bg-second w-96 h-80 lg:w-80 relative rounded-lg xl:h-80 md:h-60 md:w-2/3"
              >
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeScaleIn(0.2, 0.5)}
                  className="bg-white shadow-2xl h-80 w-96 lg:w-80 flex rounded-xl justify-center items-center absolute top-[-10px] left-5 z-10 xl:h-80 xl:top-[-10px] xl:left-4 lg:top-[-10px] lg:left-4 md:h-60 md:w-2/3 md:top-40 md:left-56"
                >
                  <div className="w-full p-10 flex flex-col gap-2 lg:p-5 lg:gap-2 md:gap-1">
                    <img
                      src="/img/1.png"
                      className=" h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                    />
                    <div className="text-2xl font-semibold lg:text-xl md:text-lg xl:text-2xl">
                      Gap Hunter
                    </div>
                    <div className="lg:text-[14px] md:text-[14px] text-lg">
                      GapHunter automatically detects any gaps in your sketches
                      and zooms directly to the area, allowing you to quickly
                      and accurately address issues that could impact your
                      design.{" "}
                    </div>
                    <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1 ">
                      View
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="h-full w-[85%] flex lg:w-[90%] justify-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-second relative w-96 h-80 lg:w-80 rounded-lg xl:h-80 md:h-60 md:w-2/3"
              >
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeScaleIn(0.2, 0.5)}
                  className="bg-white shadow-2xl h-80 w-96 lg:w-80 flex rounded-xl justify-center items-center absolute top-[-10px] left-5 z-10 xl:h-80 xl:top-[-10px] xl:left-4 lg:top-[-10px] lg:left-4 md:h-60 md:w-2/3 md:top-40 md:left-56"
                >
                  <div className="w-full p-10 flex flex-col gap-3 md:gap-1">
                    <img
                      src="/img/2.png"
                      className="h-10 w-10 object-cover lg:h-14 lg:w-14 md:h-11 md:w-11 xl:h-12 xl:w-12"
                    />
                    <div className="text-2xl font-semibold lg:text-xl md:text-lg xl:text-2xl">
                      Dim Check
                    </div>
                    <div className="lg:text-[14px] md:text-[14px] text-lg">
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
            </div>

            <div className="h-full w-[85%] flex justify-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-second relative w-96 h-80 lg:w-80 rounded-lg xl:h-80 md:h-60 md:w-full"
              >
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeScaleIn(0.2, 0.5)}
                  className="bg-white shadow-2xl h-80 w-96 lg:w-80 flex rounded-xl justify-center items-center absolute top-[-10px] left-5 z-10 xl:h-80 xl:top-[-10px] xl:left-4 lg:top-[-10px] lg:left-4 md:h-60 md:w-2/3 md:top-40 md:left-56"
                >
                  <div className="w-full p-10 flex flex-col gap-3">
                    <img
                      src="/img/3.png"
                      className="w-10 h-10 object-cover lg:h-14 lg:w-14 xl:h-12 xl:w-12"
                    />
                    <div className="text-2xl font-semibold lg:text-xl xl:text-2xl">
                      Balloon Master
                    </div>
                    <div className="lg:text-[14px] text-lg">
                      BalloonMaster, the ultimate tool for ballooning dimensions
                      specifically for inspection purposes in Inventor.{" "}
                    </div>
                    <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1">
                      View
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------  SM XS -------------------------------------------------------------------------- */}

      <div className="h-screen w-screen flex flex-col justify-center bg-gray-50 2xl:hidden xl:hidden lg:hidden md:hidden ">
        <div className="w-[90%] mx-auto justify-between flex flex-col xs:gap-5 sm:gap-10">
          {/* Header Section */}
          <div className="flex flex-col gap-3 border-l-8 rounded-xl border-first px-8 sm:gap-0 xs:gap-0">
            <div className="text-5xl font-semibold sm:text-3xl xs:text-3xl text-first">
              Our Products
            </div>
            <div className="text-2xl text-gray-500 font-extralight sm:text-base xs:text-lg">
              Inventor Enhance
            </div>
          </div>
          {/* Main Content Section */}
          <div className="xs:flex xs:flex-col xs:gap-4 sm:flex sm:flex-col sm:justify-center sm:items-center w-full h-full gap-12 sm:gap-8 ">
            <div className="bg-white shadow-2xl flex rounded-xl justify-center items-center z-10 sm:w-96 sm:h-60 sm:top-[-10px] sm:left-3 xs:w-[100%] xs:h-max">
              <div className="w-full p-5 flex flex-col gap-2 xs:gap-2">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src="/img/1.png"
                    className="object-cover sm:h-10 sm:w-10 xs:h-9 xs:w-9"
                  />
                  <div className="text-2xl font-semibold lg:text-xl md:text-lg sm:text-lg xs:text-lg ">
                    Gap Hunter
                  </div>
                </div>
                <div className="sm:text-[16px] xs:text-[14px]">
                  GapHunter automatically detects any gaps in your sketches and
                  zooms directly to the area, allowing you to quickly and
                  accurately address issues that could impact your design.{" "}
                </div>
                <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xs: ">
                  View
                </button>
              </div>
            </div>

            <div className="bg-white shadow-2xl flex rounded-xl justify-center items-center z-10 sm:w-96 sm:h-60">
              <div className="w-full p-5 flex flex-col gap-2 xs:gap-2">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src="/img/2.png"
                    className="object-cover sm:h-10 sm:w-10 xs:h-9 xs:w-9"
                  />
                  <div className="text-2xl font-semibold lg:text-xl md:text-lg sm:text-lg xs:text-lg ">
                    Dim Check
                  </div>
                </div>
                <div className="sm:text-[16px] xs:text-[14px]">
                  DimCheck scans your drawings to identify any overridden
                  dimensions, ensuring that all measurements adhere to your
                  specified standards{" "}
                </div>
                <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xs: ">
                  View
                </button>
              </div>
            </div>

            <div className="bg-white shadow-2xl flex rounded-lg justify-center items-center z-10 sm:w-96 sm:h-60 sm:top-[-10px] sm:left-3">
              <div className="w-full p-5 flex  flex-col gap-2 xs:gap-2">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src="/img/3.png"
                    className="object-cover sm:h-10 sm:w-10 xs:h-9 xs:w-9"
                  />
                  <div className="text-2xl font-semibold lg:text-xl md:text-lg sm:text-lg xs:text-lg ">
                    Balloon Master
                  </div>
                </div>
                <div className="sm:text-[16px] xs:text-[14px]">
                  BalloonMaster, the ultimate tool for ballooning dimensions
                  specifically for inspection purposes in Inventor.
                </div>
                <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xs: ">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------md--------------------------------------------- */}

      <div className="h-screen flex flex-col justify-center bg-gray-50 2xl:hidden xl:hidden lg:hidden sm:hidden xs:hidden">
        <div className="w-[90%] mx-auto justify-between flex flex-col md:gap-10 sm:gap-14">
          {/* Header Section */}
          <div className="flex flex-col gap-3 border-l-8 rounded-xl border-first px-8 md:gap-1 sm:gap-0 xs:gap-0">
            <div className="text-5xl font-semibold md:text-4xl sm:text-3xl xs:text-2xl text-first">
              Our Products
            </div>
            <div className="text-2xl text-gray-500 font-extralight md:text-lg sm:text-base xs:text-lg">
              Inventor Enhance
            </div>
          </div>
          {/* Main Content Section */}
          <div className="md:flex md:flex-col xs:flex xs:flex-col xs:gap-8 sm:flex sm:flex-col  w-full h-full gap-12 sm:gap-8  md:justify-center md:items-center ">
            <div className="flex w-full gap-5">
              <div className="bg-white shadow-2xl w-1/2 flex rounded-lg justify-center items-center z-10">
                <div className="w-full p-10 flex flex-col gap-2">
                  <img
                    src="/img/1.png"
                    className=" h-20 w-20 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10 sm:h-10 sm:w-10 xs:h-9 xs:w-9"
                  />
                  <div className="text-2xl font-semibold lg:text-xl md:text-lg sm:text-lg xs:text-lg ">
                    Gap Hunter
                  </div>
                  <div className="lg:text-[14px] md:text-[14px] sm:text-[14px] xs:text-[14px]">
                    GapHunter automatically detects any gaps in your sketches
                    and zooms directly to the area, allowing you to quickly and
                    accurately address issues that could impact your design.{" "}
                  </div>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xs: ">
                    View
                  </button>
                </div>
              </div>

              <div className="bg-white shadow-2xl w-1/2 flex rounded-lg justify-center items-center z-10">
                <div className="w-full p-10 flex flex-col gap-2">
                  <img
                    src="/img/2.png"
                    className=" h-20 w-20 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10 sm:h-10 sm:w-10 xs:h-9 xs:w-9"
                  />
                  <div className="text-2xl font-semibold lg:text-xl md:text-lg sm:text-lg xs:text-lg ">
                    Dim Check
                  </div>
                  <div className="lg:text-[14px] md:text-[14px] sm:text-[14px] xs:text-[14px]">
                    DimCheck scans your drawings to identify any overridden
                    dimensions, ensuring that all measurements adhere to your
                    specified standards{" "}
                  </div>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xs: ">
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <div className="bg-white shadow-2xl w-1/2 flex rounded-lg justify-center items-center z-10">
                <div className="w-full p-10 flex flex-col gap-2">
                  <img
                    src="/img/3.png"
                    className=" h-20 w-20 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10 sm:h-10 sm:w-10 xs:h-9 xs:w-9"
                  />
                  <div className="text-2xl font-semibold lg:text-xl md:text-lg sm:text-lg xs:text-lg ">
                    Balloon Master
                  </div>
                  <div className="lg:text-[14px] md:text-[14px] sm:text-[14px] xs:text-[14px]">
                    BalloonMaster, the ultimate tool for ballooning dimensions
                    specifically for inspection purposes in Inventor.
                  </div>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xs: ">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
